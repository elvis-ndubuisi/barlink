import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QrcodesModule } from "./qrcodes/qrcodes.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
// import { DatabaseModule } from "@package/database";

@Module({
	imports: [QrcodesModule, AuthModule, UsersModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
