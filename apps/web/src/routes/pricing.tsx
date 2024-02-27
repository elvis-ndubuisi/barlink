import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
	component: Pricing,
});

function Pricing() {
	return (
		<main>
			<h2>Pricing</h2>
		</main>
	);
}
