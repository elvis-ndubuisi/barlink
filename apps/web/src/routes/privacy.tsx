import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
	component: () => {
		return <main>privacy</main>;
	},
});
