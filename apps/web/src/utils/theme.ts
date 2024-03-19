import { createTheme, MantineColorsTuple } from "@mantine/core";

const brand: MantineColorsTuple = [
	"#f7f2f6",
	"#e9e3e7",
	"#d4c3cf",
	"#bfa1b6",
	"#ac85a1",
	"#a17394",
	"#9d688e",
	"#89587b",
	"#7b4e6e",
	"#6c4160",
];

const secondary: MantineColorsTuple = [
	"#fff9e3",
	"#fff1cd",
	"#ffe19c",
	"#ffd066",
	"#fec23a",
	"#feb91f",
	"#ffb50f",
	"#e39e00",
	"#ca8c00",
	"#af7800",
];

const accent: MantineColorsTuple = [
	"#ffece5",
	"#ffdacd",
	"#ffb39b",
	"#ff8864",
	"#fe6537",
	"#fe4f19",
	"#ff4209",
	"#e43400",
	"#cb2c00",
	"#b12000",
];

export const theme = createTheme({
	fontFamily: "General Sans",
	primaryColor: "brand",
	// primaryShade: 8,
	black: "#071013",
	white: "#FFFFFF",
	colors: { brand, secondary, accent },
});
