import { createFileRoute, Link } from "@tanstack/react-router";
import SocialSignins from "@/components/social-signins";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import {
	PasswordInput,
	Text,
	Stack,
	Button,
	Container,
	rem,
	Center,
	Paper,
	Group,
	Anchor,
	TextInput,
} from "@mantine/core";

const schema = z.object({
	name: z.string().min(4, { message: "Name's too short" }),
	email: z.string().email("Invalid email"),
	password: z
		.string()
		.min(8, { message: "Password is too short" })
		.max(20, { message: "Password too long" }),
	confirmPassword: z.string(),
});
export const Route = createFileRoute("/_auth-layout/signup")({
	component: SignUP,
});

function SignUP() {
	const form = useForm({
		initialValues: { email: "", password: "", confirmPassword: "", name: "" },
		validate: zodResolver(schema),
	});
	return (
		<Center className='flex-1'>
			<Container style={{ maxWidth: rem(430), width: "100%" }}>
				<Text size='lg' ta='center' fw={600}>
					Sign Up to Barlink
				</Text>
				<SocialSignins />
				<Paper withBorder shadow='md' p='md' radius='md'>
					<form onSubmit={form.onSubmit(() => {})}>
						<Stack gap='md'>
							<TextInput
								required
								label='Name'
								placeholder='Name'
								value={form.values.name}
								onChange={(event) => form.setFieldValue("name", event.target.value)}
								error={form.errors.name && form.errors.name}
							/>

							<TextInput
								required
								label='Email'
								placeholder='email@address.domain'
								value={form.values.email}
								onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
								error={form.errors.email && form.errors.email}
							/>

							<PasswordInput
								required
								label='Password'
								placeholder='********'
								value={form.values.password}
								onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
								error={form.errors.password && form.errors.password}
							/>

							<PasswordInput
								required
								label='Confirm password'
								placeholder='********'
								value={form.values.confirmPassword}
								onChange={(event) =>
									form.setFieldValue("confirmPassword", event.currentTarget.value)
								}
								error={form.errors.confirmPassword && form.errors.confirmPassword}
							/>
						</Stack>

						<Group justify='space-between' mt='xl'>
							<Link to='/login'>
								<Anchor component='button' c={"dimmed"} size='xs'>
									Already have an account? Login
								</Anchor>
							</Link>

							<Button type='submit'>Register</Button>
						</Group>
					</form>
				</Paper>
			</Container>
		</Center>
	);
}
