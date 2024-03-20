import { Text, ThemeIcon, Title, SimpleGrid, rem } from "@mantine/core";
import {
	IconPasswordUser,
	IconUserScan,
	IconGraph,
	IconId,
	IconCreditCardPay,
	IconStars,
	IconBook,
	IconSocial,
} from "@tabler/icons-react";

const use_case = [
	{
		image: IconPasswordUser,
		title: "Secure User Authentication",
		description:
			"Utilize Barlink's API to dynamically generate QR codes for secure user authentication, enhancing login processes and access control in applications and systems.",
	},
	{
		image: IconUserScan,
		title: "Dynamic Transaction Verification",
		description:
			" Employ Barlink's API to create dynamic QR codes for transaction verification, ensuring secure and reliable validation of user identities and transactions.",
	},
	{
		image: IconGraph,
		title: "Track Inventory in Real-Time",
		description:
			"Generate dynamic QR codes for your products, allowing for easy scanning and real-time updates on stock levels.",
	},
	{
		image: IconId,
		title: "Business Card Sharing",
		description:
			"Ditch bulky cards! Integrate your contact information and links into a scannable QR code on your business card for a modern and convenient exchange.",
	},
	{
		image: IconCreditCardPay,
		title: " Simplified Payment Solutions",
		description:
			" Leverage Barlink's API to generate QR codes for mobile payments, enabling seamless transactions and providing customers with convenient and secure payment options.",
	},
	{
		image: IconStars,
		title: " Restaurant Menus",
		description:
			"Replace bulky menus with scannable QR codes that update instantly, reducing printing costs and offering a dynamic dining experience.",
	},
	{
		image: IconBook,
		title: "Education Resources",
		description:
			"Utilize QR codes for educational materials and interactive learning experiences, empowering educators to deliver personalized content and engage students effectively.",
	},
	{
		image: IconSocial,
		title: "Social Media Engagement",
		description:
			"Direct users to your social media profiles with scannable QR codes, fostering community growth and brand awareness.",
	},
];

export default function UseCase() {
	const items = use_case.map((item) => (
		<div className='flex' key={item.title}>
			<ThemeIcon variant='outline' c={"secondary.7"} mr={"md"} size={40} radius='md'>
				<item.image style={{ width: rem(24), height: rem(24) }} />
				{/* <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} /> */}
			</ThemeIcon>

			<div>
				<Text fw={500} fz='md' mb={"sm"}>
					{item.title}
				</Text>
				<Text fz='sm'>{item.description}</Text>
			</div>
		</div>
	));

	return (
		<section className='relative mx-auto my-6 max-w-screen-xl px-3 py-5'>
			<Text size='md' c='secondary.8' fw={800} ta='center'>
				Use Cases
			</Text>

			<Title order={2} c='accent.8' ta='center' my={"sm"}>
				Real-World Applications of Barlink's QRCode-as-a-Service
			</Title>

			<SimpleGrid
				cols={{ base: 1, xs: 2, sm: 4 }}
				spacing={"md"}
				mt={30}
				className='mx-auto max-w-screen-xl'>
				{items}
			</SimpleGrid>
		</section>
	);
}
