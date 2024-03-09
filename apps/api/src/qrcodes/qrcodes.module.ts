import { Module } from "@nestjs/common";
import { QrcodesService } from "./qrcodes.service";
import { QrcodesController } from "./qrcodes.controller";
import { StaticModule } from "./static/static.module";
import { DynamicModule } from "./dynamic/dynamic.module";

@Module({
	controllers: [QrcodesController],
	providers: [QrcodesService],
	imports: [StaticModule, DynamicModule],
})
export class QrcodesModule {}
