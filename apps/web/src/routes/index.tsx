import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Title, Text, Container } from "@mantine/core";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";
import Dots from "@/components/dots";

export const Route = createFileRoute("/")({
	component: () => {
		return (
			<main className=''>
				<BaseHeader />
				<Container
					className='relative flex min-h-96 items-center justify-center py-3'
					size={1400}>
					<Dots
						className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-accent-2]'
						style={{ left: 0, top: 0 }}
					/>
					<Dots
						className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-accent-2]'
						style={{ left: 60, top: 0 }}
					/>
					<Dots
						className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-secondary-2]'
						style={{ left: 0, top: 0 }}
					/>
					<Dots
						className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-accent-2]'
						style={{ left: 0, top: 140 }}
					/>
					<Dots
						className='absolute hidden text-[--mantine-color-dark-5] md:block dark:text-[--mantine-color-accent-2]'
						style={{ right: 0, top: 60 }}
					/>

					<section className='relative z-[1]'>
						<Title
							ta='center'
							order={1}
							size={"3rem"}
							className='mx-auto max-w-4xl text-left md:text-center'>
							Generate{" "}
							<Text
								component='span'
								c='brand.5'
								// className='text-[--mantine-color-secondary-8]'
								inherit>
								dynamic QRCodes
							</Text>{" "}
							like never before
						</Title>

						<Container p={0} size={600}>
							<Text
								size='lg'
								c='dimmed'
								className='text-left text-base font-medium md:text-center md:text-lg'>
								Build more reliable software with AI companion. AI is also trained to
								detect lazy developers who do nothing and just complain on Twitter.
							</Text>
						</Container>

						<div className='items-enter my-4 flex flex-col justify-center gap-4 md:flex-row'>
							<Button className='' size='md' variant='default' color='gray'>
								<Link to='/generate'>Generate QRCode</Link>
							</Button>
							<Button className='' size='md'>
								<Link to='/signup'>Start Using API now</Link>
							</Button>
						</div>
					</section>
				</Container>
				{/* <FeaturesTitle /> */}
				<BaseFooter />
			</main>
		);
	},
});
