import { IsEmail, IsOptional } from "class-validator";

export class AuthDto {
	@IsEmail()
	email: string;

	password: string;

	@IsOptional()
	name: string;
}
