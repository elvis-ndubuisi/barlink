import { QRCodeData, QRCodeDataType } from "./interface";

export function encodeQRCodeData(data: QRCodeData): string {
	switch (data.type) {
		case QRCodeDataType.URL:
			return data.content;
		case QRCodeDataType.TEXT:
			return data.content;
		case QRCodeDataType.VCARD:
			return data.content;
		case QRCodeDataType.WIFI:
			// Example using WIFI data in metadata (library specific format might differ)
			return `WIFI:S:${data.metadata!.ssid};T:${data.metadata!.type};P:${data.metadata!.password}`;
		case QRCodeDataType.EMAIL:
			return data.content;
		case QRCodeDataType.GEO:
			// Example using GEO data in metadata (library specific format might differ)
			return `geo:${data.metadata!.latitude},${data.metadata!.longitude}`;
		case QRCodeDataType.PHONE_NUMBER:
			return data.content;
		case QRCodeDataType.SMS:
			// Example using SMS data in metadata (library specific format might differ)
			return `sms:${data.metadata!.phoneNumber};body=${data.metadata!.body}`;
		default:
			// Handle unsupported data types or provide a default behavior
			throw new Error(`Unsupported QRCodeDataType: ${data.type}`);
	}
}

// Example usage
// const urlData = { type: QRCodeDataType.URL, content: "https://www.example.com" };
// const encodedUrl = encodeQRCodeData(urlData);
// console.log(encodedUrl); // Output: https://www.example.com

// const wifiData = {
// 	type: QRCodeDataType.WIFI,
// 	content: "",
// 	metadata: { ssid: "MyWifi", type: "WPA", password: "SuperSecurePassword" },
// };
// const encodedWifi = encodeQRCodeData(wifiData);
// console.log(encodedWifi); // Output: WIFI:S:MyWifi;T:WPA;P:SuperSecurePassword
