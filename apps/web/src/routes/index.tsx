import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { typographyVariants } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<main className=''>
			<section className='min-720:absolute min-720:pt-60 flex h-full w-full flex-col items-center justify-between pb-24 pt-40'>
				<h1
					className={cn(
						typographyVariants({ variant: "h1" }),
						"max-w-3xl text-center font-bold",
					)}>
					Customize your QR code colors and logo for branding
				</h1>
				<p
					className={cn(
						typographyVariants({ variant: "lead" }),
						"my-3 max-w-xl text-center text-lg md:my-4",
					)}>
					Simplify Your Workflow: Seamlessly Generate, Customize, and Integrate QR Codes
					into Your Business Processes
				</p>
				<div className='flex items-center gap-4'>
					<Link
						to='/shorten'
						className={buttonVariants({ variant: "outline", size: "lg" })}>
						Create free account
					</Link>
					<Link
						className={buttonVariants({ variant: "default", size: "lg" })}
						to='/generate'>
						Generate QR
					</Link>
				</div>
			</section>
		</main>
	);
}
