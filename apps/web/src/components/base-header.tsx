import { Link } from "@tanstack/react-router";
import { Button, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ThemeSwitcgh from "./theme-switch";

const links = [
	{
		link: "/generate",
		label: "Generate",
	},
	// {
	// 	link: "/shorten",
	// 	label: "Shorten",
	// },
	{
		link: "/faqs",
		label: "FAQ",
	},
	{
		link: "/pricing",
		label: "Pricing",
	},
	{
		link: "/integration",
		label: "Integration",
	},
];

export default function BaseHeader() {
	const [opened, { toggle }] = useDisclosure(false);

	return (
		<header className='bg-[--mantine-color-body]/90'>
			<section className='mx-auto flex max-w-screen-xl items-center justify-between px-2 py-4 md:px-1'>
				<Link to='/' className='flex items-center gap-2 text-xl font-semibold tracking-widest'>
					<img className='h-8 w-8 bg-gray-300 object-contain object-center' src='' alt='' />
					<span className=''>Barlink</span>
				</Link>

				<Group gap={5} visibleFrom='xs'>
					{links.map((link) => (
						<Link
							to={link.link}
							key={link.label}
							className='rounded-[--mantine-radius-sm] px-1.5 py-0.5 hover:text-[--mantine-color-brand-6]'
							activeProps={{
								className: "bg-[--mantine-color-brand-8] text-white hover:text-white",
							}}>
							{link.label}
						</Link>
					))}
				</Group>

				<Group justify='center' gap={"xs"} visibleFrom='xs'>
					<Link to='/login'>
						<Button variant='transparent'>Log in</Button>
					</Link>
					<Link to='/signup'>
						<Button
							variant='filled'
							gradient={{
								from: "orange.7",
								to: "orange.5",
								deg: 90,
							}}>
							Try for free
						</Button>
					</Link>
					<ThemeSwitcgh />
				</Group>

				<Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />
				{/* TODO: Add nav menu */}
			</section>
		</header>
	);
}
