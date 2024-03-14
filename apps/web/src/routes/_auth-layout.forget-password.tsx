import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Anchor,
	Box,
	Button,
	Center,
	Container,
	Group,
	Paper,
	TextInput,
	rem,
	Text,
	Title,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

export const Route = createFileRoute("/_auth-layout/forget-password")({
	component: () => {
		return (
			<Center className='flex-1'>
				<Container size={460} my={30}>
					<Title order={3} ta='center'>
						Forgot your password?
					</Title>

					<Text c='dimmed' fz='sm' ta='center' mt='xs'>
						Enter your email to get a reset link
					</Text>

					<Paper withBorder shadow='md' p='md' radius='md' mt='xl'>
						<TextInput label='Your email' placeholder='me@mantine.dev' required />
						<Group justify='space-between' mt='lg'>
							<Anchor c='dimmed' size='sm'>
								<Link to='/login'>
									<Center inline>
										<IconArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
										<Box ml={5}>Back to the login page</Box>
									</Center>
								</Link>
							</Anchor>
							<Button>Reset password</Button>
						</Group>
					</Paper>
				</Container>
			</Center>
		);
	},
});
