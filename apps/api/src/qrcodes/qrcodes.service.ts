import { Injectable } from "@nestjs/common";
import { CreateQrcodeDto } from "./dto/create-qrcode.dto";
import { UpdateQrcodeDto } from "./dto/update-qrcode.dto";

@Injectable()
export class QrcodesService {
	create(createQrcodeDto: CreateQrcodeDto) {
		console.log(createQrcodeDto);
		return "This action adds a new qrcode";
	}

	findAll() {
		return `This action returns all qrcodes`;
	}

	findOne(id: number) {
		return `This action returns a #${id} qrcode`;
	}

	update(id: number, updateQrcodeDto: UpdateQrcodeDto) {
		console.log(updateQrcodeDto);
		return `This action updates a #${id} qrcode`;
	}

	remove(id: number) {
		return `This action removes a #${id} qrcode`;
	}
}
