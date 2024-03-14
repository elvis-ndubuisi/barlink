import { Group, Button, Divider } from "@mantine/core";
import { FacebookIcon, GoogleIcon } from "./authenticatin-buttons";

export default function SocialSignins() {
	return (
		<>
			<Group grow mb='md' mt='md'>
				<Button fullWidth variant='default' leftSection={<GoogleIcon />}>
					Google
				</Button>
				<Button fullWidth variant='default' bg='blue.6' leftSection={<FacebookIcon />}>
					Facebook
				</Button>
			</Group>
			<Divider label='Or continue with email' labelPosition='center' my='lg' />
		</>
	);
}
