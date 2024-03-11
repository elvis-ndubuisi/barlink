import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import helmet from "helmet";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableVersioning({ type: VersioningType.URI });
	app.enableCors();
	app.use(helmet());
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(3000);
}
bootstrap();
