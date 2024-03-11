import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
	component: () => {
		return <main>terms page</main>;
	},
});
