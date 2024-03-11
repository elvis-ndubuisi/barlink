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

export const Route = createFileRoute("/_authLayout/signup")({
	component: () => {
		return (
			<Center className='flex-1'>
				<Stack gap='md' maw={400} w='100%'>
					<Title order={2} ta='center'>
						Sign Up to Barlink
					</Title>
					<Flex direction='row' gap='xs' justify={{ sm: "center" }}>
						<Button
							size='md'
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
							<Flex direction='row' gap={"sm"}>
								<Input.Wrapper label='First Name' required error='' size='sm'>
									<Input size='md' placeholder='Name' name='first_name' id='first_name' />
								</Input.Wrapper>
								<Input.Wrapper label='Last Name' required error='' size='sm'>
									<Input
										size='md'
										placeholder='Last name'
										name='last_name'
										id='last_name'
									/>
								</Input.Wrapper>
							</Flex>
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
							<Input.Wrapper label='Confirm Password' required error='' size='sm'>
								<PasswordInput
									size='md'
									placeholder='************'
									name='confirm_password'
									id='confirm_password'
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
						Already have an account?{" "}
						<Link to='/login' className='font-medium'>
							Log In
						</Link>
					</Text>
				</Stack>
			</Center>
		);
	},
});
