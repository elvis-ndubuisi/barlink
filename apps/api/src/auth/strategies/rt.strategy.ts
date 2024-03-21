import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, "refresh-jwt") {
	constructor(
		private readonly configService: ConfigService,
		private authService: AuthService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: Buffer.from(configService.get<string>("REFRESH_PUBLIC_KEY"), "base64").toString(
				"ascii",
			),
			passReqToCallback: true,
		});
	}

	async validate(req: Request, payload: any) {
		const refresh_token = req.get("Authorization").replace("Bearer", "").trim();
		return { ...payload, refresh_token };
	}
}
