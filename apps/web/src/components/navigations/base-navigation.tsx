import { Button, buttonVariants } from "../ui/button";
import { Link } from "@tanstack/react-router";
import React from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
	{ name: "Generate", link: "/generate" },
	{ name: "Shorten", link: "/shorten" },
	{ name: "Integration", link: "/integration" },
];

export default function BaseNavigation() {
	// const { scrollYProgress } = useScroll();
	// const [visible, setVisible] = React.useState(false);

	// useMotionValueEvent(scrollYProgress, "change", (current) => {
	// 	// Check if current is not undefined and is a number
	// 	if (typeof current === "number") {
	// 		let direction = current! - scrollYProgress.getPrevious()!;

	// 		if (scrollYProgress.get() < 0.05) {
	// 			setVisible(true);
	// 		} else {
	// 			if (direction < 0) {
	// 				setVisible(true);
	// 			} else {
	// 				setVisible(false);
	// 			}
	// 		}
	// 	}
	// });

	return (
		// <AnimatePresence mode='wait'>
		// 	<motion.header
		// 		initial={{ opacity: 1, y: -100 }}
		// 		animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
		// 		transition={{ duration: 0.2 }}
		// 		className={cn(
		// 			"fixed inset-x-0  top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black",
		// 		)}>
		// 		<section className='mx-auto flex max-w-screen-xl items-center justify-between'>
		// 			<Link to='/' className='[&.active]:font-bold'>
		// 				BarLink
		// 			</Link>

		// 			<nav className='flex items-center gap-2'>
		// 				{navLinks.map((nav) => (
		// 					<Button asChild variant='link' key={nav.name}>
		// 						<Link to={nav.link} className='[&.active]:font-bold'>
		// 							{nav.name}
		// 						</Link>
		// 					</Button>
		// 				))}
		// 			</nav>
		// 		</section>
		// 	</motion.header>
		// </AnimatePresence>
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
