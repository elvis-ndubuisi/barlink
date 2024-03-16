import { createFileRoute, Outlet, useNavigate, useParams } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";
import { Title, Text, Paper, Grid, Container, Tabs } from "@mantine/core";

export const Route = createFileRoute("/generate")({
	component: Generate,
});

function Generate() {
	const navigate = useNavigate({ from: "/generate/$step" });
	const { step } = useParams({ strict: false });

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
						<Grid.Col span={{ base: 12, xs: 9 }}>
							<Paper p='0.4rem' withBorder>
								<Tabs
									value={step}
									onChange={(value) =>
										navigate({ to: "/generate/$step", params: { step: value } })
									}>
									<Tabs.List>
										<Tabs.Tab value='1'>Gallery</Tabs.Tab>
										<Tabs.Tab value='2'>Customize</Tabs.Tab>
										<Tabs.Tab value='3'>Settings</Tabs.Tab>
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
