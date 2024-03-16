import { Group, Button, Divider } from "@mantine/core";
import { FacebookIcon, GoogleIcon } from "./authenticatin-buttons";

export default function SocialSignins() {
	return (
		<>
			<Group grow mb='md' mt='md'>
				<Button fullWidth variant='default' className='font-normal' leftSection={<GoogleIcon />}>
					Continue with Google
				</Button>
				<Button
					fullWidth
					variant='default'
					className='bg-[#4267b2] font-normal text-white hover:bg-[#3a5a9b]'
					leftSection={<FacebookIcon />}>
					Sign in with Facebook
				</Button>
			</Group>
			<Divider label='Or continue with email' labelPosition='center' my='lg' />
		</>
	);
}
