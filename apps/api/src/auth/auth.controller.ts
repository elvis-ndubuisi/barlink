import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Post("/credentials/login")
	loginWithCredentials(@Body() dto: AuthDto) {
		return this.authService.loginWithCredentials(dto);
	}

	@HttpCode(HttpStatus.CREATED)
	@Post("/credentials/signup")
	signupWithCredentials(@Body() dto: AuthDto) {
		return this.authService.signupWithCredentials(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Post("/google")
	signupWithGoogle() {
		return this.authService.signupWithGoogle();
	}

	@HttpCode(HttpStatus.OK)
	@Post("/facebook")
	signupWithFacebook() {
		return this.authService.signupWithFacebook();
	}

	@UseGuards(AuthGuard("jwt"))
	@HttpCode(HttpStatus.OK)
	@Post("/logout")
	logOut(@Req() req: Request) {
		return this.authService.logOut(req.user["sub"]);
	}

	@UseGuards(AuthGuard("refresh-jwt"))
	@Post("/refresh")
	refreshToken(@Req() req: Request) {
		return this.authService.refreshToken(req.user["sub"], req.user["refresh_token"]);
	}
}
