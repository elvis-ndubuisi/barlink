import { createLazyFileRoute } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";
import { Paper, Text, Title, List } from "@mantine/core";

export const Route = createLazyFileRoute("/privacy")({
	component: () => {
		return (
			<main>
				<BaseHeader />
				<Paper shadow='xs' p='lg' my='xl' withBorder className='mx-auto max-w-screen-lg'>
					<Title>Privacy Policy</Title>
					<Text fw={600}>Last Updated: 12 Match 2024</Text>

					<Title my='lg' order={2}>
						1. Introduction
					</Title>
					<Text>
						This Privacy Policy describes how Barlink, a QRCode-as-a-Service platform provided by
						[Your Company Name] ("Company"), collects, uses, and discloses information from and
						about you when you use our Service.
					</Text>

					<Title my='lg' order={2}>
						2. Information We Collect
					</Title>
					<Text>We collect the following information when you use Barlink:</Text>
					<List spacing='xs' size='md' withPadding listStyleType='disc'>
						<List.Item>
							<Text span fw={600}>
								Account Information:
							</Text>{" "}
							When you create an account, we collect your name, email address, and password (hashed
							and salted).
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								Usage Data:
							</Text>{" "}
							We collect information about how you use Barlink, such as the number of QR codes you
							generate, the types of QR codes you generate (static or dynamic), and the features you
							use.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								Billing Information:
							</Text>{" "}
							If you subscribe to a paid plan, we may collect your billing information, such as your
							payment method and billing address. This information is processed by a third-party
							payment processor and is not stored by the Company.
						</List.Item>
					</List>

					<Title my='lg' order={2}>
						3. How We Use Your Information
					</Title>
					<Text>We use the information we collect to:</Text>
					<List spacing='xs' size='md' withPadding listStyleType='disc'>
						<List.Item>Provide and operate Barlink.</List.Item>
						<List.Item>
							Send you important information about Barlink, such as changes to our terms and
							conditions or service updates.
						</List.Item>
						<List.Item>Respond to your inquiries and support requests.</List.Item>
						<List.Item>Improve Barlink based on your usage data.</List.Item>
						<List.Item>Detect and prevent fraud and abuse.</List.Item>
					</List>

					<Title my='lg' order={2}>
						4. Sharing Your Information
					</Title>
					<Text mb='sm'>
						We may share your information with third-party service providers who help us operate
						Barlink, such as payment processors and cloud storage providers. These third-party
						service providers are contractually obligated to keep your information confidential and
						secure.
					</Text>
					<Text>
						We will not share your information with any other third party without your consent,
						except as required by law.
					</Text>

					<Title my='lg' order={2}>
						5. Data Retention
					</Title>
					<Text>
						We will retain your information for as long as your account is active or as needed to
						provide you with services. We will also retain your information as necessary to comply
						with our legal obligations, resolve disputes, and enforce our agreements.
					</Text>

					<Title my='lg' order={2}>
						6. Security
					</Title>
					<Text>
						We take reasonable steps to protect your information from unauthorized access,
						disclosure, alteration, or destruction. However, no internet transmission or electronic
						storage is 100% secure.
					</Text>

					<Title my='lg' order={2}>
						7. Your Choices
					</Title>
					<Text mb='sm'>
						You can access and update your account information at any time by logging into your
						Barlink account.
					</Text>
					<Text>
						You can also choose to opt out of receiving marketing emails from us by following the
						unsubscribe instructions in those emails.
					</Text>

					<Title my='lg' order={2}>
						8. Children's Privacy
					</Title>
					<Text>
						Barlink is not intended for children under the age of 18. We do not knowingly collect
						personal information from children under 18. If you are a parent or guardian and you
						believe your child has provided us with personal information, please contact us.
					</Text>

					<Title my='lg' order={2}>
						9. Changes to This Privacy Policy
					</Title>
					<Text>
						We may update this Privacy Policy from time to time. We will notify you of any changes
						by posting the new Privacy Policy on our website.
					</Text>

					<Title my='lg' order={2}>
						10. Contact Us
					</Title>
					<Text>
						If you have any questions about this Privacy Policy, please contact us at [Your Company
						Email Address].
					</Text>
				</Paper>
				<BaseFooter />
			</main>
		);
	},
});
