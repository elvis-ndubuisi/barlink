import BaseFooter from "@/components/base-footer";
import BaseHeader from "@/components/base-header";
import { Paper, Text, Title, List } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/terms")({
	component: () => {
		return (
			<>
				<BaseHeader />
				<Paper shadow='xs' p='lg' my='xl' withBorder className='mx-auto max-w-screen-lg'>
					<Title>Terms of Use</Title>
					<Text fw={600}>Last Updated: 12 Match 2024</Text>

					<Title my='lg' order={2}>
						1. Introduction
					</Title>
					<Text>
						Welcome to Barlink, a QRCode-as-a-Service platform (the "Service") provided by [Your
						Company Name] (the "Company"). These Terms and Conditions (the "Terms") govern your
						access and use of the Service. By accessing or using the Service, you agree to be bound
						by these Terms. If you disagree with any part of the Terms, then you may not access or
						use the Service.
					</Text>

					<Title my='lg' order={2}>
						2. Definition
					</Title>
					<List spacing='xs' size='md' withPadding listStyleType='disc'>
						<List.Item>
							<Text span fw={600}>
								Account:
							</Text>{" "}
							An account created by a user to access the Service's dashboard and certain features.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								API:
							</Text>{" "}
							Application Programming Interface used by developers to integrate the Service's
							functionalities into their applications.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								API Key:
							</Text>{" "}
							A unique identifier used to authenticate API calls.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								Data:
							</Text>{" "}
							Information stored within a QR code, including static or dynamic content.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								Dynamic QR Code:
							</Text>{" "}
							A QR code that can be updated with new information after generation.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								QR Code:
							</Text>{" "}
							A two-dimensional barcode that can be scanned by devices to access information.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								Service:
							</Text>{" "}
							The QRCode-as-a-Service platform offered by the Company.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								Static QR Code:
							</Text>{" "}
							A QR code that contains fixed information and cannot be changed after generation.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								Subscription Plan:
							</Text>{" "}
							A paid tier offering access to specific features and functionalities within the
							Service.
						</List.Item>
						<List.Item>
							<Text span fw={600}>
								User:
							</Text>{" "}
							An individual or entity that accesses or uses the Service.
						</List.Item>
					</List>

					<Title order={2} my='lg'>
						3. User Accounts
					</Title>
					<List spacing='xs' size='md' withPadding listStyleType='disc'>
						<List.Item>Users must be at least 18 years old to create an account.</List.Item>
						<List.Item>
							Users are responsible for maintaining the confidentiality of their account credentials
							and are fully responsible for all activities that occur under their account.
						</List.Item>
						<List.Item>
							Users agree to notify the Company immediately of any unauthorized use of their account
							or any other security breach.
						</List.Item>
					</List>

					<Title order={2} my='lg'>
						4. Use of Barlink
					</Title>
					<List spacing='xs' size='md' withPadding listStyleType='disc'>
						<List.Item>Barlink is intended for lawful purposes only.</List.Item>
						<List.Item>
							Users are prohibited from using Barlink to generate QR codes containing illegal
							content, infringing intellectual property rights, or transmitting malware.
						</List.Item>
						<List.Item>
							Users are responsible for ensuring that the Data stored within QR codes complies with
							all applicable Nigerian laws and regulations.
						</List.Item>
						<List.Item>
							The Company reserves the right to suspend or terminate any account that violates these
							Terms.
						</List.Item>
					</List>

					<Title order={2} my='lg'>
						5. API Integration
					</Title>
					<List spacing='xs' size='md' withPadding listStyleType='disc'>
						<List.Item>
							Developers using Barlink's API are responsible for complying with the API
							documentation and usage guidelines provided by the Company.
						</List.Item>
						<List.Item>
							The Company reserves the right to modify or discontinue the API at any time without
							prior notice.
						</List.Item>
					</List>

					<Title order={2} my='lg'>
						6. Intellectual Property
					</Title>
					<List spacing='xs' size='md' withPadding listStyleType='disc'>
						<List.Item>
							Barlink and all underlying technology, content, and materials are protected by
							copyright, trademark, and other intellectual property laws.
						</List.Item>
						<List.Item>
							Users are granted a non-exclusive, non-transferable license to use Barlink in
							accordance with these Terms.
						</List.Item>
						<List.Item>
							Users may not modify, reverse engineer, decompile, or disassemble any part of Barlink.
						</List.Item>
					</List>

					<Title order={2} my='lg'>
						7. Third-Party Service
					</Title>
					<Text>
						Barlink may integrate with or utilize third-party services. Your use of such third-party
						services may be subject to their own terms and conditions. The Company is not
						responsible for the content or practices of any third-party services.
					</Text>

					<Title order={2} my='lg'>
						8. Disclaimers
					</Title>
					<List spacing='xs' size='md' withPadding listStyleType='disc'>
						<List.Item>
							THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND,
							EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
							FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
						</List.Item>
						<List.Item>
							THE COMPANY DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR
							VIRUS-FREE.
						</List.Item>
						<List.Item>
							THE COMPANY DOES NOT WARRANT THAT THE RESULTS OBTAINED BY THE USE OF THE SERVICE WILL
							BE ACCURATE OR RELIABLE.
						</List.Item>
					</List>

					<Title order={2} my='lg'>
						9. Limitation of Liability
					</Title>
					<Text>
						IN NO EVENT SHALL THE COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
						FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
						ARISING OUT OF OR IN CONNECTION WITH THE USE OF BARLINK, EVEN IF ADVISED OF THE
						POSSIBILITY OF SUCH DAMAGES.
					</Text>

					<Title order={2} my='lg'>
						10. Indemnification
					</Title>
					<Text>
						You agree to indemnify and hold harmless the Company, its officers, directors,
						employees, and agents from and against any and all claims, losses, damages, expenses,
						and liabilities (including attorneys' fees) arising out of or in connection with your
						use of Barlink.
					</Text>

					<Title order={2} my='lg'>
						11. Term and Termination
					</Title>
					<List spacing='xs' size='md' withPadding listStyleType='disc'>
						<List.Item>
							These Terms shall remain in full force and effect while you use Barlink.
						</List.Item>
						<List.Item>
							The Company reserves the right to terminate your access to Barlink at any time for any
							reason, with or without notice.
						</List.Item>
					</List>

					<Title order={2} my='lg'>
						12. Governing Law
					</Title>
					<Text>
						These Terms shall be governed by and construed in accordance with the laws of Nigeria.
					</Text>

					<Title order={2} my='lg'>
						13. Dispute Resolution
					</Title>
					<Text>
						Any dispute arising out of or relating to these Terms shall be settled by [Specify
						dispute resolution method, e.g., binding arbitration in accordance
					</Text>
				</Paper>
				<BaseFooter />
			</>
		);
	},
});
