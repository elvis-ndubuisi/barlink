import {
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import { Tokens } from "./types";
import { JwtService } from "@nestjs/jwt";
import * as argon from "argon2";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
	constructor(
		private prismaService: PrismaService,
		private jwtService: JwtService,
		private configService: ConfigService,
	) {}

	async loginWithCredentials(dto: AuthDto): Promise<Tokens> {
		const user = await this.prismaService.user.findUnique({ where: { email: dto.email } });

		if (!user) throw new NotFoundException("User not found");
		const passwordMatches = await argon.verify(user.password, dto.password);
		if (!passwordMatches) throw new UnauthorizedException("Incorrect credentials");

		const tokens = await this.signTokens(user.id, user.email);
		await this.updateRtHash(user.id, tokens.refresh_token);
		return tokens;
	}

	async signupWithCredentials(dto: AuthDto): Promise<Tokens> {
		try {
			const hash = await argon.hash(dto.password.trim());

			const user = await this.prismaService.user.create({
				data: { email: dto.email.toLowerCase().trim(), password: hash },
			});

			const tokens = await this.signTokens(user.id, user.email);
			this.updateRtHash(user.id, tokens.refresh_token);
			return tokens;
		} catch (error) {
			console.log(error);
			throw new InternalServerErrorException("wait small");
		}
	}

	signupWithGoogle() {
		return "";
	}

	signupWithFacebook() {
		return "";
	}

	async logOut(userId: string) {
		return await this.prismaService.user.updateMany({
			where: { id: userId, hashRt: { not: null } },
			data: { hashRt: null },
		});
	}

	refreshToken(userId: string, rt: string) {
		console.log(userId, rt);
		return "";
	}

	async signTokens(userId: string, identity: string): Promise<Tokens> {
		const { accessPrivateKey, refreshPrivateKey } = this.retrieveTokensFormats();

		const [at, rt] = await Promise.all([
			this.jwtService.signAsync(
				{
					sub: userId,
					identity,
				},
				{
					// expiresIn: "60s",
					algorithm: "RS256",
					secret: accessPrivateKey,
				},
			),
			this.jwtService.signAsync(
				{
					// sub: userId,
					identity,
				},
				{
					// expiresIn: "7d",
					algorithm: "RS256",
					secret: refreshPrivateKey,
				},
			),
		]);

		return { access_token: at, refresh_token: rt };
	}

	// Add hashed refresh_token to the database
	async updateRtHash(userId: string, refresh_token: string) {
		const hashRt = await argon.hash(refresh_token);
		await this.prismaService.user.update({
			where: { id: userId },
			data: { hashRt },
		});
	}

	retrieveTokensFormats() {
		const refreshPrivateKey = Buffer.from(
			this.configService.get<string>("REFRESH_PRIVATE_KEY"),
			"base64",
		).toString("ascii");

		const accessPrivateKey = Buffer.from(
			this.configService.get<string>("ACCESS_PRIVATE_KEY"),
			"base64",
		).toString("ascii");

		return { accessPrivateKey, refreshPrivateKey };
	}
}
