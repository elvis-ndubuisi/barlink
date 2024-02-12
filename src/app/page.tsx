import { Feature } from "@/components/card";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<section className='h-screen max-h-[580px] px-2'>
				<section className='mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center gap-6'>
					<h1 className='text-center text-6xl'>
						Simplify Sharing, Track, & Grow.
						<br /> All-in-one QR & URL Platform
					</h1>
					<h2 className='max-w-2xl text-center text-xl font-medium opacity-90'>
						QR magic + URL power: Supercharge your marketing with one platform. Scannable
						simplicity, data-driven growth.
					</h2>
					<Button size={"lg"}>Try for free</Button>
				</section>
			</section>
		</>
	);
}
