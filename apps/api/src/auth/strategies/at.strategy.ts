import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

// type JwtPayload = {
// 	sub: string;
// 	identity: string;
// };

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, "jwt") {
	constructor(private readonly configService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get<string>("ACCESS_PUBLIC_KEY"),
		});
	}

	async validate(payload: any) {
		return payload;
	}
}
