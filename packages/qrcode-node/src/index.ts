import { QRCodeDataType } from "./interface";
import { encodeQRCodeData } from "./utils";
import QRCode from "qrcode";
import fs from "node:fs";

const encoded = encodeQRCodeData({
	content: "not to tame nodsaf",
	type: QRCodeDataType.WIFI,
	metadata: { ssid: "asdfisoafds", type: "asdkfadsf", password: "asdfjadskfjaskl" },
});

console.log("logging encoded value");
console.log(encoded);

QRCode.toDataURL(encoded, { type: "image/jpeg" })
	.then((url) => {
		fs.writeFileSync("qrcode-image.jpeg", url.replace(/^data:image\/\w+;base64,/, ""), "base64");
		console.log("geneer");
	})
	.catch((err) => {
		console.error(err);
	});
