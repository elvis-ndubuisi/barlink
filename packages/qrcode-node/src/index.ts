import { QRCodeDataType, QRCodeCustomizationOptions } from "./interface";
import { encodeQRCodeData } from "./utils";
import QRCode from "qrcode";
import fs from "node:fs";
import { generateQRCodeImage, customizeQRCodeImage } from "./qr-encoder";

// const encoded = encodeQRCodeData({
// 	content: "not to tame nodsaf",
// 	type: QRCodeDataType.WIFI,
// 	metadata: { ssid: "asdfisoafds", type: "asdkfadsf", password: "asdfjadskfjaskl" },
// });

// console.log("logging encoded value");
// console.log(encoded);

// QRCode.toDataURL(encoded, { type: "image/jpeg" })
// 	.then((url) => {
// 		fs.writeFileSync("qrcode-image.jpeg", url.replace(/^data:image\/\w+;base64,/, ""), "base64");
// 		console.log("geneer");
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

/********************************************************************* */
const urlQRCodeData = {
	type: QRCodeDataType.URL,
	content: "https://www.example.com",
};

async function generateAndSaveQRCodeImage() {
	const qrCodeImageBuffer = await generateQRCodeImage(urlQRCodeData, {
		errorCorrectionLevel: "M", // Set the error correction level to 'H' (highest)
		color: {
			dark: "#000000", // Set the QR code color to black
			light: "#ffffff", // Set the QR code background color to white
		},
	});

	// Save the QR code image to a file
	const fs = require("fs");
	fs.writeFileSync("qrcode.png", qrCodeImageBuffer);
}

generateAndSaveQRCodeImage();

/***************************************************************** */
// const urlQRCodeData = {
// 	type: QRCodeDataType.URL,
// 	content: "https://www.example.com",
// };

const customizationOptions: QRCodeCustomizationOptions = {
	logo: fs.readFileSync("logo.png"),
	logoPosition: { x: 10, y: 10 },
	backgroundColor: "#ffffff",
	backgroundImage: fs.readFileSync("background.jpg"),
	eyes: {
		topLeft: {
			color: "#ff0000",
			radius: 10,
			logo: fs.readFileSync("inner-logo.png"),
		},
		topRight: {
			color: "#00ff00",
			radius: 8,
		},
		bottomLeft: {
			color: "#0000ff",
		},
	},
};

async function generateAndCustomizeQRCodeImage() {
	const qrCodeImageBuffer = await generateQRCodeImage(urlQRCodeData);
	const customizedQRCodeImageBuffer = await customizeQRCodeImage(
		qrCodeImageBuffer,
		customizationOptions,
	);

	// Save the customized QR code image to a file
	fs.writeFileSync("customized-qrcode.png", customizedQRCodeImageBuffer);
}

generateAndCustomizeQRCodeImage();
