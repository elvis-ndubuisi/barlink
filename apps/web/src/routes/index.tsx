import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Title, Text, Container } from "@mantine/core";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";
import Features from "@/components/feature";
import UseCase from "@/components/use-case";
import { GradientDownBackground } from "@/components/background-snippets";

export const Route = createFileRoute("/")({
	component: () => {
		return (
			<>
				<GradientDownBackground />
				<BaseHeader />
				<Container className='relative flex min-h-96 items-center justify-center py-3' size={1400}>
					<section className='relative z-[1]'>
						<Title
							ta='center'
							order={1}
							size={"3rem"}
							className='mx-auto max-w-4xl text-left md:text-center'>
							Generate Powerful{" "}
							<Text
								component='span'
								c='brand.5'
								// className='text-[--mantine-color-secondary-8]'
								inherit>
								QR Codes
							</Text>{" "}
							in Seconds
						</Title>

						<Container p={0} size={600}>
							<Text
								size='lg'
								c='dimmed'
								className='text-left text-base font-medium md:text-center md:text-lg'>
								Barlink - QR Codes Made Easy. Elevate Your Marketing with Customizable &
								Easy-to-Integrate QR Codes.
							</Text>
						</Container>

						<div className='items-enter my-4 flex flex-col justify-center gap-4 md:flex-row'>
							<Link to='/generate'>
								<Button size='md' variant='outline' color='gray'>
									Generate QRCode
								</Button>
							</Link>
							<Link to='/signup'>
								<Button size='md'>Start Using API now</Button>
							</Link>
						</div>
					</section>
				</Container>
				<Features />
				<UseCase />
				<BaseFooter />
			</>
		);
	},
});
