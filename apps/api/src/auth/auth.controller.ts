import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

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
		return this.signupWithGoogle();
	}

	@HttpCode(HttpStatus.OK)
	@Post("/facebook")
	signupWithFacebook() {
		return this.signupWithFacebook();
	}

	@Post("/logout")
	logOut() {
		return this.logOut();
	}

	@Post("/refresh")
	refreshToken() {
		return this.refreshToken();
	}
}
