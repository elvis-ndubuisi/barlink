import { Button, buttonVariants } from "../ui/button";
import { Link } from "@tanstack/react-router";

const navLinks = [
	{ name: "Generate", link: "/generate" },
	{ name: "Shorten", link: "/shorten" },
	{ name: "Integration", link: "/integration" },
];

export default function BaseNavigation() {
	return (
		<header className='bg-background sticky left-0 right-0 top-0 py-2'>
			<section className='mx-auto flex max-w-screen-xl items-center justify-between'>
				<nav className='flex items-center gap-3'>
					<Link to='/'>Barl</Link>
					<ul className='flex items-center'>
						{navLinks.map((link) => (
							<li key={link.link}>
								<Link className={buttonVariants({ variant: "link" })} to={link.link}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className='flex items-center gap-3'>
					<Link to='/auth' className={buttonVariants({ variant: "ghost" })}>
						Log in
					</Link>
					<Link to='/auth' className={buttonVariants({ variant: "default" })}>
						Create free account
					</Link>
					<Button size='icon'>ico</Button>
				</div>
			</section>
		</header>
	);
}
