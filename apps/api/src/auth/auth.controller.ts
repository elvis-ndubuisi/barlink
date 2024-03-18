import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private prisma: PrismaService,
	) {}

	@Post("/credentials/login")
	loginWithCredentials(dto: AuthDto) {
		return "hello";
	}

	@Post("/credentials/signup")
	signupWithCredentials() {
		return "hello";
	}

	@Post("/google")
	signupWithGoogle() {
		return "hello";
	}

	@Post("/facebook")
	signupWithFacebook() {
		return "hello";
	}

	@Post("/log-out")
	logOut() {
		return "hello";
	}

	@Post("/refresh")
	refreshToken() {
		return "hello";
	}
}
