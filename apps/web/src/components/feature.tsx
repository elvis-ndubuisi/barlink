import { Title, SimpleGrid, Text, Button, Grid, ThemeIcon, rem } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import {
	IconApiApp,
	IconMoodHeart,
	IconAnalyze,
	IconStack,
	IconAccessible,
	IconWand,
} from "@tabler/icons-react";

const features = [
	{
		icon: IconMoodHeart,
		title: "Easy to Use",
		description:
			"No design experience required. Barlink's intuitive interface allows you to create professional static and dynamic QR codes in minutes.",
	},
	{
		icon: IconAccessible,
		title: "Fully Customizable",
		description:
			"Design QR codes that match your brand with our extensive color and logo upload options.",
	},
	{
		icon: IconAnalyze,
		title: "Track and Analyze",
		description:
			"Gain valuable insights into your QR code performance with detailed scan tracking and analytics.",
	},
	{
		icon: IconApiApp,
		title: "Integrations",
		description:
			"Barlink's robust API allows developers to seamlessly integrate QR code functionalities into their applications, unlocking new possibilities for user engagement.",
	},
	{
		icon: IconStack,
		title: "Bulk Generation",
		description: " Save time by creating and managing hundreds of QR codes at once.",
	},
];

export default function Features() {
	const items = features.map((feature) => (
		<div key={feature.title}>
			<ThemeIcon
				size={44}
				radius='md'
				variant='gradient'
				gradient={{ deg: 45, from: "dark.6", to: "dark.7" }}>
				<feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
			</ThemeIcon>
			<Text fz='lg' mt='sm' fw={500}>
				{feature.title}
			</Text>
			<Text c='' fz='sm'>
				{feature.description}
			</Text>
		</div>
	));
	return (
		<section className='mx-auto max-w-screen-xl p-3'>
			<Grid gutter={80} align='start'>
				<Grid.Col span={{ base: 12, md: 5 }}>
					<Title>Powerful QR Codes, Easy Integration</Title>
					<Text my='md'>
						Barlink empowers you to create impactful QR codes that elevate your marketing
						strategies. Our intuitive platform allows you to design professional, fully customizable
						QR codes in seconds. With a variety of features like dynamic content, password
						protection, and detailed analytics, Barlink provides the power you need to track and
						measure campaign success.
					</Text>
					<Text>
						For developers, Barlink offers seamless integration through our robust API. Integrate
						Barlink's functionalities into your applications to unlock the potential of QR codes
						within your existing workflows. Barlink: Powerful QR codes made easy to use and
						integrate.
					</Text>
					<Link to='/signup'>
						<Button variant='outline' size='sm' mt='md' leftSection={<IconWand />}>
							Sign up for free
						</Button>
					</Link>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 7 }}>
					<SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
						{items}
					</SimpleGrid>
				</Grid.Col>
			</Grid>
		</section>
	);
}
