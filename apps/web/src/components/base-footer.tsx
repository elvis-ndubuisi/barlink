import { Link } from "@tanstack/react-router";
import { Text, ActionIcon, Group, rem } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "../styles/footer.module.css";

const data = [
	{
		title: "Links",
		links: [
			{ label: "Integration", link: "/integration" },
			{ label: "Contact", link: "/contact" },
			{ label: "FAQ", link: "/faqs" },
			{ label: "Pricing", link: "/pricing" },
		],
	},
	{
		title: "Legals",
		links: [
			{ label: "Privacy Policy", link: "/privacy" },
			{ label: "Terms & Conditions", link: "/terms" },
		],
	},
	{
		title: "Community",
		links: [
			{ label: "Join Discord", link: "#" },
			{ label: "Follow on Twitter", link: "#" },
			{ label: "Email newsletter", link: "#" },
			{ label: "GitHub discussions", link: "#" },
		],
	},
];

export default function BaseFooter() {
	const groups = data.map((group) => {
		const links = group.links.map((link, index) => (
			<Link key={index} className={classes.link} to={link.link}>
				{link.label}
			</Link>
		));

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		);
	});

	return (
		<footer className={classes.footer}>
			<div className={`mx-auto max-w-screen-xl ${classes.inner}`}>
				<div className={classes.logo}>
					{/* <MantineLogo size={30} /> */}
					<p>logo</p>
					<Text size='xs' c='dimmed' className={classes.description}>
						Build fully functional accessible web applications faster than ever
					</Text>
				</div>
				<div className={classes.groups}>{groups}</div>
			</div>
			<div className={`mx-auto max-w-screen-xl ${classes.afterFooter}`}>
				<Text c='dimmed' size='sm'>
					© 2020 mantine.dev. All rights reserved.
				</Text>

				<Group gap={0} className={classes.social} justify='flex-end' wrap='nowrap'>
					<ActionIcon size='lg' variant='subtle'>
						<IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size='lg' variant='subtle'>
						<IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size='lg' variant='subtle'>
						<IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
					</ActionIcon>
				</Group>
			</div>
		</footer>
	);
}
