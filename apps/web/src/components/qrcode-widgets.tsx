import { Flex, Button } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";

export function QRCodetype() {
	const { colorScheme } = useMantineColorScheme();
	return (
		<Flex
			bg={colorScheme === "dark" ? "rgba(0, 0, 0, .3)" : "brand.0"}
			gap='sm'
			p='sm'
			justify='flex-start'
			align='flex-start'
			direction='row'
			wrap='wrap'>
			<Button>busd</Button>
			<Button>busd</Button>
			<Button>busd</Button>
			<Button>busd</Button>
			<Button>busd</Button>
		</Flex>
	);
}

export function QRCodeCustomize() {
	return <div>Customize</div>;
}

export function QRCodeLogo() {
	return <div>qrcode logo</div>;
}

export function QRCodeTemplate() {
	return <div>template</div>;
}
