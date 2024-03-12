import { createTheme, MantineColorsTuple } from "@mantine/core";

const brand: MantineColorsTuple = [
	"#f6edfc",
	"#e7d6f5",
	"#cfaaed",
	"#b67ae5",
	"#a152df",
	"#943adc",
	"#8d2ddb",
	"#7a22c2",
	"#6c1dae",
	"#5e1598",
];

const secondary: MantineColorsTuple = [
	"#ffe9e7",
	"#ffd3ce",
	"#ffa49b",
	"#ff7264",
	"#fe4937",
	"#fe2f19",
	"#ff1f09",
	"#e41200",
	"#cb0800",
	"#b10000",
];

const accent: MantineColorsTuple = [
	"#e6f1ff",
	"#cddeff",
	"#9ab9ff",
	"#6392ff",
	"#3671ff",
	"#185cff",
	"#0152ff",
	"#0043e5",
	"#003acd",
	"#0032b5",
];

export const theme = createTheme({
	fontFamily: "General Sans",
	primaryColor: "brand",
	primaryShade: 8,
	black: "#080708",
	colors: { brand, secondary, accent },
});
