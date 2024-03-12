import { createLazyFileRoute } from "@tanstack/react-router";
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import illustration from "../assets/illustrations/faqs.svg";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";

const placeholder =
	"It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export const Route = createLazyFileRoute("/faqs")({
	component: () => {
		return (
			<>
				<BaseHeader />
				<div className='py-[--mantine-spacing-xl]'>
					<Container size='lg'>
						<Grid id='faq-grid' gutter={50}>
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Image src={illustration} alt='Frequently Asked Questions' />
							</Grid.Col>
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Title
									order={2}
									ta='left'
									className='mb-[--mantine-spacing-md] pl-[--mantine-spacing-md]'>
									Frequently Asked Questions
								</Title>

								<Accordion
									chevronPosition='right'
									defaultValue='reset-password'
									variant='separated'>
									<Accordion.Item
										className='text-[--mantine-font-size-sm]'
										value='reset-password'>
										<Accordion.Control>How can I reset my password?</Accordion.Control>
										<Accordion.Panel>{placeholder}</Accordion.Panel>
									</Accordion.Item>

									<Accordion.Item
										className='text-[--mantine-font-size-sm]'
										value='another-account'>
										<Accordion.Control>
											Can I create more that one account?
										</Accordion.Control>
										<Accordion.Panel>{placeholder}</Accordion.Panel>
									</Accordion.Item>

									<Accordion.Item
										className='text-[--mantine-font-size-sm]'
										value='newsletter'>
										<Accordion.Control>
											How can I subscribe to monthly newsletter?
										</Accordion.Control>
										<Accordion.Panel>{placeholder}</Accordion.Panel>
									</Accordion.Item>

									<Accordion.Item
										className='text-[--mantine-font-size-sm]'
										value='credit-card'>
										<Accordion.Control>
											Do you store credit card information securely?
										</Accordion.Control>
										<Accordion.Panel>{placeholder}</Accordion.Panel>
									</Accordion.Item>
								</Accordion>
							</Grid.Col>
						</Grid>
					</Container>
				</div>
				<BaseFooter />
			</>
		);
	},
});
