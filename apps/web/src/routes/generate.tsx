import { createFileRoute, Outlet, useNavigate, useParams } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";
import React from "react";
import { Title, Text, Paper, Grid, Container, Tabs, ScrollArea, Flex } from "@mantine/core";

const qrcode_type = ["URl", "Web", "VCard"];

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
									<Flex gap='md'>
										{qrcode_type.map((t) => (
											<Text key={t}>{t}</Text>
										))}
									</Flex>
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
										<Tabs.Tab value='1'>QRCode Type</Tabs.Tab>
										<Tabs.Tab value='2'>Customize</Tabs.Tab>
										<Tabs.Tab value='3'>Logo</Tabs.Tab>
										<Tabs.Tab value='4'>Templates</Tabs.Tab>
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
