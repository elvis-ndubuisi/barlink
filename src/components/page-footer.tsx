import { Icons } from "./icons";
import { siteConfig } from "@/configs/site.config";

export function PageFooter() {
	return (
		<footer className='pb-6 pt-3'>
			<section className='mx-auto flex max-w-screen-2xl items-center justify-between px-2 md:px-1 lg:px-0'>
				<div className='flex items-center gap-2'>
					<Icons.qrcode />
					<h4>Barlink</h4>
				</div>

				<section className='flex items-center gap-3'>
					{/* <div className='flex items-center gap-3'>
						<Link
							isExternal
							className='text-main hover:text-tertiary'
							href={siteConfig.author.twitter}>
							<Icons.twitter className='h-4 w-4' />
						</Link>
						<Link
							isExternal
							className='text-main hover:text-tertiary'
							href={siteConfig.author.github}>
							<Icons.twitter className='h-4 w-4' />
						</Link>
					</div>

					<Link href='/' className='text-highlight hover:text-tertiary cursor-pointer'>
						Privacy policy
					</Link>
					<Link href='/' className='text-highlight hover:text-tertiary cursor-pointer'>
						Terms of use
					</Link> */}
				</section>
			</section>
		</footer>
	);
}
