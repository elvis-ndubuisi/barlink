import * as QRCode from "qrcode";
import * as Jimp from "jimp";
import {
	QRCodeData,
	QRCodeDataType,
	QRCodeCustomizationOptions,
	QRCodeEyeCustomization,
} from "./interface";

export async function encodeQRCodeData(qrcodeData: QRCodeData): Promise<string> {
	switch (qrcodeData.type) {
		case QRCodeDataType.TEXT:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.URL:
			return encodeUrl(qrcodeData.content);

		case QRCodeDataType.APP_STORE:
			return encodePhoneNumber(qrcodeData.metadata!);

		case QRCodeDataType.CRYPTO:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.EMAIL:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.EVENT:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.GEO:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.GOOGLE_PLAY:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.MECARD:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.PHONE_NUMBER:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.SMS:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.VCARD:
			return encodeText(qrcodeData.content);

		case QRCodeDataType.WIFI:
			return encodeText(qrcodeData.content);

		default:
			throw new Error(`Unsupported QRCode data type: ${qrcodeData.type}`);
	}
}

export async function generateQRCodeImage(
	qrCodeData: QRCodeData,
	options?: QRCode.QRCodeRenderersOptions,
): Promise<Buffer> {
	const qrCodeString = await encodeQRCodeData(qrCodeData);
	const qrCodeBuffer = await QRCode.toDataURL(qrCodeString, options);
	return Buffer.from(qrCodeBuffer.split(",")[1], "base64");
}

export async function customizeQRCodeImage(
	qrCodeImageBuffer: Buffer,
	options: QRCodeCustomizationOptions,
): Promise<Buffer> {
	const image = await Jimp.read(qrCodeImageBuffer);

	// Apply customizations
	if (options.logo) {
		const logoImage = await Jimp.read(options.logo);
		const logoPosition = options.logoPosition || { x: 0, y: 0 };
		image.composite(logoImage, logoPosition.x, logoPosition.y);
	}

	if (options.backgroundColor) {
		image.background(Jimp.cssColorToHex(options.backgroundColor));
	}

	if (options.backgroundImage) {
		const backgroundImage = await Jimp.read(options.backgroundImage);
		image.composite(backgroundImage, 0, 0);
	}

	// Eye customizations
	const eyeRadiusDef = 7; // Default eye radius
	const eyePositions = [
		{ x: 6, y: 6 }, // Top-left eye
		{ x: image.bitmap.width - 6 - eyeRadiusDef, y: 6 }, // Top-right eye
		{ x: 6, y: image.bitmap.width - 6 - eyeRadiusDef }, // Bottom-left eye
	];

	for (let i = 0; i < eyePositions.length; i++) {
		const eyePosition = eyePositions[i];
		const eyeCustomization = Object.values(options.eyes || {})[i];

		if (eyeCustomization) {
			const eyeColor = eyeCustomization.color
				? Jimp.cssColorToHex(eyeCustomization.color)
				: 0x000000; // Default to black
			const eyeRadius = eyeCustomization.radius || eyeRadiusDef;

			if (eyeCustomization.logo) {
				const logoImage = await Jimp.read(eyeCustomization.logo);
				image.composite(logoImage, eyePosition.x, eyePosition.y);
			} else {
				image.scan(
					eyePosition.x - eyeRadius,
					eyePosition.y - eyeRadius,
					eyeRadius * 2,
					eyeRadius * 2,
					(x, y, idx) => {
						const distance = Math.sqrt(
							Math.pow(x - eyePosition.x, 2) + Math.pow(y - eyePosition.y, 2),
						);
						if (distance <= eyeRadius) {
							image.setPixelColor(eyeColor, x, y);
						}
					},
				);
			}
		}
	}

	// Return the customized QR code image buffer
	return await image.getBufferAsync(Jimp.MIME_PNG);
}

async function encodeUrl(url: string): Promise<string> {
	return QRCode.toString(url, { type: "utf8" });
}

async function encodeText(text: string) {
	return QRCode.toString(text, { type: "terminal" });
}
async function encodeVCard(vCardData: string, metadata?: Record<string, any>): Promise<string> {
	const vCardContent = `BEGIN:VCARD\n${vCardData}\nEND:VCARD`;
	return QRCode.toString(vCardContent, { type: "terminal" });
}

async function encodeWifi(metadata: Record<"ssid" | "type" | "password", string>) {
	const wifi = `WIFI:S:${metadata.ssid};T:${metadata.type};P:${metadata.password}`;
	return QRCode.toString(wifi, { type: "terminal" });
}

async function encodeSms(metadata: Record<string, any>): Promise<string> {
	const sms = `sms:${metadata!.phoneNumber};body=${metadata!.body}`;
	return QRCode.toString(sms, { type: "terminal" });
}

async function encodePhoneNumber(metadata: Record<string, any>) {
	return QRCode.toString("", { type: "terminal" });
}
