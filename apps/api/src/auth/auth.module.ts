import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AtStrategy, RtStrategy } from "./strategies";
@Module({
	imports: [
		JwtModule.registerAsync({
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				privateKey: configService.get<string>("ACCESS_PRIVATE_KEY"),
				publicKey: configService.get<string>("ACCESS_PUBLIC_KEY"),
				signOptions: { expiresIn: "5m", algorithm: "RS256" },
			}),
		}),
		JwtModule.registerAsync({
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				privateKey: configService.get<string>("REFRESH_PRIVATE_KEY"),
				publicKey: configService.get<string>("REFRESH_PUBLIC_KEY"),
				signOptions: { expiresIn: "7d", algorithm: "RS256" },
			}),
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}
