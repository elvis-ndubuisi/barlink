import { ScrollArea, Box } from "@mantine/core";
// import { Group, Code, ScrollArea, rem, Box } from "@mantine/core";
// import { IconGauge, IconQrcode, IconReceipt2 } from "@tabler/icons-react";
// import { Link } from "@tanstack/react-router";

// const routes = [
// 	{ ico: IconGauge, label: "Dashboard", link: "/dashboard" },
// 	{ ico: IconQrcode, label: "Qrcode", link: "/dashboard/qrcodes" },
// 	{ ico: IconReceipt2, label: "Account", link: "/dashboard/account" },
// ];

export default function DashboardSidebar() {
	return (
		<nav className='dashboard_sidebar'>
			<Box></Box>
			<ScrollArea></ScrollArea>
			<Box></Box>
		</nav>
	);
}
