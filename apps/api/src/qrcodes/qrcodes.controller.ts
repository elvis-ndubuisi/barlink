import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { QrcodesService } from "./qrcodes.service";
import { CreateQrcodeDto } from "./dto/create-qrcode.dto";
import { UpdateQrcodeDto } from "./dto/update-qrcode.dto";

@Controller("qrcodes")
export class QrcodesController {
	constructor(private readonly qrcodesService: QrcodesService) {}

	@Post()
	create(@Body() createQrcodeDto: CreateQrcodeDto) {
		return this.qrcodesService.create(createQrcodeDto);
	}

	@Get()
	findAll() {
		return this.qrcodesService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.qrcodesService.findOne(+id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateQrcodeDto: UpdateQrcodeDto) {
		return this.qrcodesService.update(+id, updateQrcodeDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.qrcodesService.remove(+id);
	}
}
