import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Feature } from "@/components/card";

export default function Home() {
	return (
		<>
			<section className='relative z-0 grid h-screen max-h-[30em] w-full place-content-center bg-deep-sapphire-950 text-white'>
				<section className='absolute bottom-0 left-0 right-0 top-0 -z-20 opacity-30' />
				<section className='mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-4 md:px-0'>
					<h1 className='text-center text-5xl font-black'>
						<span className='block'>Unlock Link Power</span>
						with QR Codes & Short Links
					</h1>
					<p className='max-w-xl text-center'>
						Barlink makes it effortless to generate QR codes and shorten URLs. Enhance
						user experience and engagement with our free and user-friendly services.
					</p>
					<div className='flex items-center gap-6'>
						<Button
							href='/login/sign-up'
							as={Link}
							size='lg'
							radius='none'
							className='rounded-md bg-white font-medium text-deep-sapphire-950'>
							Get started for free
						</Button>
						<Button
							href='/shorten'
							as={Link}
							variant='bordered'
							size='lg'
							radius='none'
							className='rounded-md border-1 border-white font-medium text-white'>
							Shorten URL link
						</Button>
					</div>
				</section>
			</section>

			<section className='bg-dark text-light space-y-4 py-4'>
				<h2 className='text-center text-3xl font-bold text-deep-sapphire-950'>
					Key Features
				</h2>
				<section className='mx-auto flex max-w-screen-xl items-center justify-center gap-6 px-4 md:px-0'>
					<div className='flex max-w-md flex-col space-y-4 rounded-md p-3'>
						<div>
							<h3 className='text-tangerine text-xl font-bold'>QR Codes</h3>
							<p className='text-mid-light text-xl opacity-80'>Made your way</p>
						</div>
						<p>
							Create custom QR codes with logos, colors, and dynamic content. Track scans
							and measure impact.
						</p>
					</div>

					<div className='flex max-w-md flex-col space-y-4 rounded-md p-3'>
						<div>
							<h3 className='text-xl font-bold'>Short Links</h3>
							<p className='text-mid-light text-xl opacity-80'>Big Impact</p>
						</div>
						<p>
							Shorten URLs, brand them, and track clicks across platforms. Unleash the
							power of data-driven marketing.
						</p>
					</div>

					<div className='flex max-w-md flex-col space-y-4 rounded-md p-3'>
						<div>
							<h3 className='text-lavender-blue text-xl font-bold'>
								Empowering Developers
							</h3>
							<p className='text-mid-light text-xl opacity-80'>Developer-Friendly API:</p>
						</div>
						<p>
							Integrate seamlessly with our API. Build custom solutions, automate
							workflows, and extend possibilities.
						</p>
					</div>
				</section>

				<h2 className='text-center text-5xl'>Flexible management workspace</h2>
				<div className='mx-auto flex max-w-screen-lg flex-col md:flex-row'>
					<section>worksace dadskjfk</section>
					{/* <Image/> */}
				</div>
			</section>

			{/* <section className="h-48 bg-mid-light text-dark">
        <h3>Title goes here</h3>
      </section> */}
		</>
	);
}
