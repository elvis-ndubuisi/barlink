import { createLazyFileRoute } from "@tanstack/react-router";
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import illustration from "../assets/illustrations/faqs.svg";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";

const faqs = [
	{
		value: "none for now",
		question: "What is Barlink?",
		answer:
			"Barlink is a QRCode-as-a-Service platform that allows you to generate and manage custom QR codes.",
	},
	{
		value: "none for now",
		question: "What are QR codes?",
		answer:
			"QR codes (Quick Response codes) are two-dimensional barcodes that can be scanned by smartphones and other devices to access information.",
	},
	{
		value: "none for now",
		question: "Who can use Barlink?",
		answer:
			"Barlink can be used by anyone who needs to generate QR codes, from individuals and small businesses to large enterprises.",
	},
	{
		value: "none for now",
		question: "Is Barlink free to use?",
		answer:
			"Barlink offers a free plan with limited features. We also offer paid plans with more features and functionalities.",
	},
];

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
									{faqs.map((faq) => (
										<Accordion.Item className='text-[--mantine-font-size-sm]' value={faq.question}>
											<Accordion.Control>{faq.question}</Accordion.Control>
											<Accordion.Panel>{faq.answer}</Accordion.Panel>
										</Accordion.Item>
									))}
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
