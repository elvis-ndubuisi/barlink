// Define an enum for the different QR code data types
export enum QRCodeDataType {
	URL = "url",
	TEXT = "text",
	VCARD = "vcard",
	WIFI = "wifi",
	GOOGLE_PLAY = "google_play",
	APP_STORE = "app_store",
	EMAIL = "email",
	GEO = "geo",
	PHONE_NUMBER = "phone_number",
	SMS = "sms",
	EVENT = "event",
	CRYPTO = "crypto",
	MECARD = "mecard",
}

// Define an interface for the QR code data
export interface QRCodeData {
	type: QRCodeDataType;
	content: string;
	metadata?: Record<string, any>;
}

// Example usage
const urlQRCodeData: QRCodeData = {
	type: QRCodeDataType.URL,
	content: "https://www.example.com",
};

const vCardQRCodeData: QRCodeData = {
	type: QRCodeDataType.VCARD,
	content:
		"BEGIN:VCARD\nVERSION:3.0\nN:Doe;John;;;\nFN:John Doe\nEMAIL;TYPE=INTERNET:john.doe@example.com\nEND:VCARD",
	metadata: {
		version: "3.0",
	},
};

const wifiQRCodeData: QRCodeData = {
	type: QRCodeDataType.WIFI,
	content: "", // Not used in this approach
	metadata: {
		ssid: "MyWifiNetwork",
		password: "SuperSecurePassword",
		type: "WPA2", // Optional security type
	},
};

const emailQRCodeData: QRCodeData = {
	type: QRCodeDataType.EMAIL,
	content: "mailto:jane.doe@example.com", // Direct content for email address
	metadata: {
		subject: "Important Message", // Optional subject line
	},
};

const geoQRCodeData: QRCodeData = {
	type: QRCodeDataType.GEO,
	content: "", // Not used in this approach
	metadata: {
		latitude: 37.7749,
		longitude: -122.4194,
	},
};

const phoneNumberQRCodeData: QRCodeData = {
	type: QRCodeDataType.PHONE_NUMBER,
	content: "tel:+1234567890", // Direct content for phone number
	metadata: {
		label: "Work Phone", // Optional label for the phone number
	},
};

const smsQRCodeData: QRCodeData = {
	type: QRCodeDataType.SMS,
	content: "", // Not used in this approach
	metadata: {
		phoneNumber: "+1234567890",
		body: "Your message here",
	},
};

const googlePlayQRCodeData: QRCodeData = {
	type: QRCodeDataType.GOOGLE_PLAY,
	content: "market://details?id=com.example.android.app", // URI for Google Play Store app
	metadata: {
		packageName: "com.example.android.app", // Optional package name
	},
};

const appStoreQRCodeData: QRCodeData = {
	type: QRCodeDataType.APP_STORE,
	content: "itms-apps://apps.apple.com/app/id1234567890", // URI for App Store app
	metadata: {
		appId: "1234567890", // Optional app ID
	},
};

const eventQRCodeData: QRCodeData = {
	type: QRCodeDataType.EVENT,
	content: "", // Not directly used (library specific format)
	metadata: {
		summary: "Event Title",
		description: "Event Description",
		start: new Date("2024-10-26T10:00:00"), // Event start date/time
		end: new Date("2024-10-26T12:00:00"), // Event end date/time
		location: "123 Main St, Anytown, CA", // Optional location
	},
};

const cryptoQRCodeData: QRCodeData = {
	type: QRCodeDataType.CRYPTO,
	content: "", // Not directly used (library specific format)
	metadata: {
		address: "bitcoin:1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2", // Crypto address
		amount: 0.01, // Optional amount to send
		currency: "BTC", // Optional cryptocurrency (e.g., BTC, ETH)
	},
};

const mecardQRCodeData: QRCodeData = {
	type: QRCodeDataType.MECARD,
	content: "MECARD:N:John Doe;TEL:1234567890;EMAIL:john.doe@example.com;FN:John Doe", // MECARD formatted string
	metadata: {
		// No metadata needed for MECARD, data is stored in the content string
	},
};
