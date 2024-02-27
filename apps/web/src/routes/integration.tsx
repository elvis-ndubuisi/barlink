import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/integration")({
	component: Integration,
});

function Integration() {
	return <main>integration</main>;
}
