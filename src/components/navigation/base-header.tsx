import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { ModeToggleIcon } from "../theme-toggles";

export default function BaseHeader() {
	return (
		<header className='w-full'>
			<section className='mx-auto flex max-w-screen-2xl items-center justify-between px-2 py-3'>
				<section className='flex flex-1 items-center gap-6'>
					<div className='flex items-center gap-2'>
						<Icons.Qrcode />
						<h3 className='text-2xl font-bold text-primary'>Barlink</h3>
					</div>
					<nav className='flex flex-1 items-start gap-3'>
						<Link href='#'>Features</Link>
						<Link href='#'>Integrations</Link>
						<Link href='#'>Pricing</Link>
					</nav>
				</section>

				<section>
					<Button>Contact Us</Button>
					<Button>Sign Up</Button>
					{/* <ModeToggleIcon /> */}
					<Button variant='outline'>Join</Button>
				</section>
			</section>
		</header>
	);
}
