import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shorten")({
	component: () => {
		return <main>shorten</main>;
	},
});
