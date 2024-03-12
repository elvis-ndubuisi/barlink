import { Link } from "@tanstack/react-router";
import { Button, Group } from "@mantine/core";

export default function BaseHeader() {
	return (
		<header className=''>
			<section className='mx-auto flex max-w-screen-xl items-center justify-between px-2 py-4 md:px-1'>
				<Link
					to='/'
					className='flex items-center gap-2 text-xl font-semibold tracking-widest'>
					<img
						className='h-8 w-8 bg-gray-300 object-contain object-center'
						src=''
						alt=''
					/>
					<span className='text-[--mantine-color-brand-8]'>Barlink</span>
				</Link>

				<nav role='navigation' className='flex items-center gap-2 text-sm font-medium'>
					<Link to='/'>Use Cases</Link>
					<Link to='/'>Features</Link>
					<Link to='/'>FAQ</Link>
					<Link to='/'>Integration</Link>
					<Link to='/'>Pricing</Link>
				</nav>

				<Group justify='center'>
					<Link to='/login'>
						<Button variant='light'>Log in</Button>
					</Link>
					<Link to='/signup'>
						<Button
							variant='filled'
							gradient={{ from: "orange.7", to: "orange.5", deg: 90 }}>
							Try for free
						</Button>
					</Link>
				</Group>
			</section>
		</header>
	);
}
