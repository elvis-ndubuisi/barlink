import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

export default function BaseNavigation() {
	return (
		<header className='w-full pb-3 pt-5'>
			<section className='mx-auto flex max-w-screen-xl items-center justify-between'>
				<Link to='/' className='[&.active]:font-bold'>
					BarLink
				</Link>

				<nav className='flex items-center gap-2'>
					<Button asChild variant='link'>
						<Link to='/generate' className='[&.active]:font-bold'>
							Generate
						</Link>
					</Button>
					<Link to='/shorten' className='[&.active]:font-bold'>
						Shorten URL
					</Link>
					<Link to='/integration' className='[&.active]:font-bold'>
						Integration
					</Link>
					<Link to='/docs' className='[&.active]:font-bold'>
						Documentation
					</Link>
				</nav>
			</section>
		</header>
	);
}
