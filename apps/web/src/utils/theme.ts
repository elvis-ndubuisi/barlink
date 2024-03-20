import { createTheme, MantineColorsTuple } from "@mantine/core";

const brand: MantineColorsTuple = [
	"#F4FAEC",
	"#E9F6DC",
	"#D5EEBB",
	"#C1E69B",
	"#ADDE7A",
	"#91D34D",
	"#75BA2E",
	"#598D23",
	"#3D6018",
	"#20330D",
];

const secondary: MantineColorsTuple = [
	"#FFFFFF",
	"#FFFFFF",
	"#FFFFFF",
	"#FAE8DE",
	"#F4D0BC",
	"#EEB799",
	"#E89F76",
	"#E28653",
	"#DC6E30", // main color
	"#B5551F",
];

const accent: MantineColorsTuple = [
	"#FFFFFF",
	"#FFFFFF",
	"#FFFFFF",
	"#FFFFFF",
	"#FEF8E9",
	"#FCECC3",
	"#F9E09C",
	"#F7D376",
	"#F5C74F", // main color
	"#F2B61A",
];

const dark: MantineColorsTuple = [
	"#A0A0A0",
	"#959595",
	"#818181",
	"#6D6D6D",
	"#585858",
	"#444444",
	"#2F2F2F",
	"#1B1B1B",
	"#000000",
	"#000000",
];

export const theme = createTheme({
	fontFamily: "Inter",
	primaryColor: "brand",
	primaryShade: { light: 7, dark: 5 },
	black: "#141414",
	colors: { brand, secondary, accent, dark },
});
