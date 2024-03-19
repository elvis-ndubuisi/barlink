import { createLazyFileRoute } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";
// import { DotMaskedBackground } from "@/components/background-snippets";
import { Title, Text, Flex } from "@mantine/core";
import PricingCard from "@/components/pricing-card";

// const pricing = [{ plan: "free" }, { plan: "pro" }];

export const Route = createLazyFileRoute("/pricing")({
	component: () => {
		return (
			<>
				<BaseHeader />
				<section className='relative'>
					<Title ta='center' mt='xl'>
						Barlink Plan & Pricing
					</Title>
					<Text ta='center' my='lg'>
						From individuals to enterprises, Scanova offers value for money with flexible payment
						options
					</Text>

					<Flex gap='sm' align='stretch' justify='center'>
						<PricingCard />
						<PricingCard />
						<PricingCard />
						<PricingCard />
					</Flex>
				</section>

				<main className='mx-auto my-6 max-w-screen-xl px-2'>
					<Title order={2}>Compare Pricing</Title>
					<section className='sticky top-0'>list titles</section>
					<section></section>
				</main>

				<section className='mx-auto max-w-screen-xl'>
					<Title order={2}>Frequently Asked Questions</Title>
				</section>
				<BaseFooter />
			</>
		);
	},
});
