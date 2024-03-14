import { Text, ThemeIcon, Title, SimpleGrid } from "@mantine/core";
import { TallGridBackground } from "@/components/background-snippets";
import { IconAuth2fa } from "@tabler/icons-react";

const use_case = [
	{
		image: IconAuth2fa,
		title: "Secure User Authentication",
		description:
			"Utilize Barlink's API to dynamically generate QR codes for secure user authentication, enhancing login processes and access control in applications and systems.",
	},
	{
		image: IconAuth2fa,
		title: "Dynamic Transaction Verification",
		description:
			" Employ Barlink's API to create dynamic QR codes for transaction verification, ensuring secure and reliable validation of user identities and transactions.",
	},
	{
		image: IconAuth2fa,
		title: "Track Inventory in Real-Time",
		description:
			"Generate dynamic QR codes for your products, allowing for easy scanning and real-time updates on stock levels.",
	},
	{
		image: IconAuth2fa,
		title: "Business Card Sharing",
		description:
			"Ditch bulky cards! Integrate your contact information and links into a scannable QR code on your business card for a modern and convenient exchange.",
	},
	{
		image: IconAuth2fa,
		title: " Simplified Payment Solutions",
		description:
			" Leverage Barlink's API to generate QR codes for mobile payments, enabling seamless transactions and providing customers with convenient and secure payment options.",
	},
	{
		image: IconAuth2fa,
		title: " Restaurant Menus",
		description:
			"Replace bulky menus with scannable QR codes that update instantly, reducing printing costs and offering a dynamic dining experience.",
	},
	{
		image: IconAuth2fa,
		title: "Education Resources",
		description:
			"Utilize QR codes for educational materials and interactive learning experiences, empowering educators to deliver personalized content and engage students effectively.",
	},
	{
		image: IconAuth2fa,
		title: "Social Media Engagement",
		description:
			"Direct users to your social media profiles with scannable QR codes, fostering community growth and brand awareness.",
	},
];

export default function UseCase() {
	const items = use_case.map((item) => (
		<div className='flex' key={item.title}>
			<ThemeIcon
				variant='outline'
				// className={classes.itemIcon}
				p={"sm"}
				mr={"md"}
				size={40}
				radius='md'>
				<item.image />
				{/* <Image src={IMAGES[item.image]} /> */}
			</ThemeIcon>

			<div>
				<Text fw={700} fz='lg' mb={"sm"}>
					{item.title}
				</Text>
				<Text c='dimmed'>{item.description}</Text>
			</div>
		</div>
	));

	return (
		<section className='relative mx-auto my-6 max-w-screen-xl px-3 py-5'>
			<TallGridBackground />
			<Text size='md' c={"accent.2"} fw={800} ta='center'>
				Use Cases
			</Text>

			<Title order={2} c='dimmed' ta='center' my={"sm"}>
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
