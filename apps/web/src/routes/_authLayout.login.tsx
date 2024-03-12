import { createFileRoute, Link } from "@tanstack/react-router";
import googleIcon from "../assets/icons8-google-96.png";
import facebookIcon from "../assets/icons8-facebook-96.png";
import {
	Input,
	PasswordInput,
	Text,
	Stack,
	Button,
	Title,
	Divider,
	Flex,
	Center,
} from "@mantine/core";

export const Route = createFileRoute("/_authLayout/login")({
	component: () => {
		// const [state, setState] = React.useState({});
		return (
			<Center className='flex-1'>
				<Stack gap='md' maw={400} w='100%'>
					<Title order={2} ta='center'>
						Sign in to Barlink
					</Title>
					<Flex direction='row' gap='xs' justify={{ sm: "center" }}>
						<Button
							size='md'
							fullWidth
							leftSection={
								<img
									src={googleIcon}
									width={24}
									height={24}
									className='object-contain object-center'
								/>
							}
							variant='outline'>
							Sign in with Google
						</Button>
						<Button
							size='md'
							fullWidth
							leftSection={
								<img
									src={facebookIcon}
									width={24}
									height={24}
									className='object-contain object-center'
								/>
							}
							variant='outline'>
							Sign in with Facebook
						</Button>
					</Flex>
					<Divider size={"sm"} label='OR' labelPosition='center' />
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}>
						<Stack gap='sm'>
							<Input.Wrapper label='Email address' required error='' size='sm'>
								<Input
									size='md'
									placeholder='email@address.com'
									name='email'
									type='email'
									id='email'
								/>
							</Input.Wrapper>
							<Input.Wrapper label='Password' required error='' size='sm'>
								<PasswordInput
									size='md'
									placeholder='************'
									name='password'
									id='password'
								/>
							</Input.Wrapper>
							<Input.Wrapper label='field' hidden>
								<Input name='giggle' id='giggle' />
							</Input.Wrapper>
							<Button type='submit' size='md'>
								Submit
							</Button>
						</Stack>
					</form>
					<Text size='sm'>
						Don't have an account?{" "}
						<Link to='/signup' className='font-medium'>
							Register
						</Link>
					</Text>
				</Stack>
			</Center>
		);
	},
});
