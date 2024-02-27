import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { typographyVariants } from "@/components/ui/typography";
import fbIcon from "../assets/icons8-facebook-96.png";
import twIcon from "../assets/icons8-twitter-96.png";
import ggIcon from "../assets/icons8-google-96.png";

export const Route = createFileRoute("/auth")({
	component: Auth,
});

function Auth() {
	return (
		<main className='flex h-screen items-center justify-center'>
			<section className='max-w-md'>
				<h2 className={typographyVariants({ variant: "h3" })}>
					Log in or sign up to continue
				</h2>
				<div className='flex flex-col gap-3'>
					<Button variant='outline' size='lg'>
						<img src={ggIcon} alt='sign in with google' className='mr-2 h-7 w-7' />
						Continue with Google
					</Button>
					<div className='flex items-center justify-between gap-3'>
						<Button className='flex-1' variant='outline' size='lg'>
							<img src={fbIcon} alt='sign in with facebook' className='mr-2 h-7 w-7' />
							Facebook
						</Button>
						<Button className='flex-1' variant='outline' size='lg'>
							<img src={twIcon} alt='sign in with twitter' className='mr-2 h-7 w-7' />
							Twitter
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
