import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Paper,
	Center,
	Container,
	Group,
	rem,
	Text,
	Stack,
	PasswordInput,
	TextInput,
	Button,
	Anchor,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import SocialSignins from "@/components/social-signins";

const schema = z.object({
	email: z.string().email("Invalid email"),
	password: z.string(),
});

export const Route = createFileRoute("/_auth-layout/login")({
	component: Login,
});

function Login() {
	const form = useForm({
		initialValues: { email: "", password: "" },
		validate: zodResolver(schema),
	});

	return (
		<Center className='flex-1'>
			<Container style={{ maxWidth: rem(430), width: "100%" }}>
				<Text size='xl' ta='center' fw={600}>
					Welcome to Mantine, login with
				</Text>
				<Text c='dimmed' size='sm' ta='center' mt={5}>
					Do not have an account yet?{" "}
					<Link to='/signup'>
						<Anchor size='sm' component='button'>
							Create account
						</Anchor>
					</Link>
				</Text>
				<SocialSignins />

				<Paper withBorder shadow='md' p='md' mt={30} radius='md'>
					<form onSubmit={form.onSubmit(() => {})}>
						<Stack gap='lg'>
							<TextInput
								required
								label='Email'
								placeholder='email@address.domain'
								value={form.values.email}
								onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
								error={form.errors.email && "Invalid email"}
							/>

							<PasswordInput
								required
								label='Password'
								placeholder='**********'
								value={form.values.password}
								onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
								error={form.errors.password && "Password should include at least 6 characters"}
							/>
						</Stack>

						<Group justify='space-between' mt='xl'>
							<Link to='/forget-password'>
								<Anchor component='button' size='sm'>
									Forgot password?
								</Anchor>
							</Link>

							<Button type='submit'>Login</Button>
						</Group>
					</form>
				</Paper>
			</Container>
		</Center>
	);
}
