import { Title, Text, Button, Paper, Center, Group } from "@mantine/core";

export default function APIBanner() {
	return (
		<Center className='relative flex min-h-40'>
			<Paper withBorder radius='md' p='sm' w='100%' maw={700}>
				<Title order={3}>title goes here</Title>
				<Text></Text>
				<Group>
					<Button>Fsaf</Button>
					<Button>Fsaf</Button>
				</Group>
			</Paper>
		</Center>
	);
}
