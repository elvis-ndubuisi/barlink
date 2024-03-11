import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@mantine/core";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<main>
			<Button>click me</Button>
		</main>
	);
}
