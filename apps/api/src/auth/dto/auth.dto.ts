import {
	IsEmail,
	IsOptional,
	IsString,
	IsStrongPassword,
	MaxLength,
	MinLength,
} from "class-validator";

export class AuthDto {
	@IsEmail()
	email: string;

	@IsStrongPassword({
		minLength: 6,
		minLowercase: 1,
		minNumbers: 1,
		minSymbols: 1,
		minUppercase: 1,
	})
	password: string;

	@IsOptional()
	@IsString()
	@MinLength(4, { message: "Name too short" })
	@MaxLength(10, { message: "Name too long" })
	name: string;
}
