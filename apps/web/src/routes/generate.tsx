import { createFileRoute, Outlet, useNavigate, useParams } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";
import React from "react";
import { Carousel } from "@mantine/carousel";
import {
	Title,
	Text,
	Paper,
	Grid,
	Container,
	Tabs,
	ScrollArea,
	Flex,
	rem,
	ActionIcon,
} from "@mantine/core";
import {
	IconIdBadge,
	IconLink,
	IconBrandGooglePlay,
	IconCoffee,
	IconWifi,
	IconFileBarcode,
} from "@tabler/icons-react";

const qrcode_type = [
	{ title: "URL", icon: IconLink },
	{ title: "vCard", icon: IconIdBadge },
	{ title: "Wifi", icon: IconWifi },
	{ title: "Menu", icon: IconCoffee },
	{ title: "Google Form", icon: IconFileBarcode },
	{ title: "Play Store", icon: IconBrandGooglePlay },
	{ title: "URwL", icon: IconLink },
	{ title: "vCawrd", icon: IconIdBadge },
	{ title: "Wifiw", icon: IconWifi },
	{ title: "Menwu", icon: IconCoffee },
	{ title: "Goowgle Form", icon: IconFileBarcode },
	{ title: "Playw Store", icon: IconBrandGooglePlay },
	{ title: "URqwL", icon: IconLink },
	{ title: "vqCawrd", icon: IconIdBadge },
	{ title: "Wiqfiw", icon: IconWifi },
	{ title: "Menqwu", icon: IconCoffee },
	{ title: "Goowqgle Form", icon: IconFileBarcode },
	{ title: "Playwq Store", icon: IconBrandGooglePlay },
];

export const Route = createFileRoute("/generate")({
	component: Generate,
});

function Generate() {
	const typeViewport = React.useRef<HTMLDivElement>(null);
	const navigate = useNavigate({ from: "/generate/$step" });
	const { step } = useParams({ strict: false }) as { step: string };

	return (
		<>
			<BaseHeader />
			<section className='relative mx-auto my-[--mantine-spacing-lg] max-w-screen-lg'>
				<Title ta='center'>Generate qrcode for free</Title>
				<Text size='lg' ta='center' my='md'>
					some test foes here
				</Text>

				<Container>
					<Grid>
						<Grid.Col span={{ base: 12 }}>
							<ScrollArea type='hover' viewportRef={typeViewport}>
								<Paper withBorder p='sm'>
									<Carousel
										maw={900}
										w={"100%"}
										slideSize='48px'
										align='start'
										slideGap='md'
										controlsOffset='xs'
										controlSize={21}
										loop
										slidesToScroll={3}
										dragFree>
										<Carousel.Slide />
										{qrcode_type.map((t) => (
											<Carousel.Slide key={t.title}>
												<Flex
													direction={"column"}
													align='center'
													justify='center'
													gap='xs'
													flex={1}>
													<ActionIcon c='secondary.8' size={42} variant='default'>
														<t.icon style={{ width: rem(24), height: rem(24) }} />
													</ActionIcon>
													<Text size='xs'>{t.title}</Text>
												</Flex>
											</Carousel.Slide>
										))}
									</Carousel>
									{/* <Flex gap='md'>
										{qrcode_type.map((t) => (
											<Flex direction={"column"} align='center' justify='center' gap='xs' flex={1}>
												<ActionIcon size={42} variant='default'>
													<t.icon style={{ width: rem(24), height: rem(24) }} />
												</ActionIcon>
												<Text size='xs' key={t.title}>
													{t.title}
												</Text>
											</Flex>
										))}
									</Flex> */}
								</Paper>
							</ScrollArea>
						</Grid.Col>
						<Grid.Col span={{ base: 12, xs: 9 }}>
							<Paper p='0.4rem' withBorder>
								<Tabs
									value={step}
									onChange={(value) =>
										navigate({ to: "/generate/$step", params: { step: value } })
									}>
									<Tabs.List>
										<Tabs.Tab value='type'>QRCode Type</Tabs.Tab>
										<Tabs.Tab value='customize'>Customize</Tabs.Tab>
										<Tabs.Tab value='logo'>Logo</Tabs.Tab>
										<Tabs.Tab value='template'>Templates</Tabs.Tab>
									</Tabs.List>

									<Outlet />
								</Tabs>
							</Paper>
						</Grid.Col>
						<Grid.Col span={{ base: 12, xs: 3 }}>
							<Paper p='0.4rem' withBorder>
								<Title order={5} fw={600}>
									Pattern
								</Title>
								side ba
							</Paper>
						</Grid.Col>
					</Grid>
				</Container>
			</section>
			<BaseFooter />
		</>
	);
}
