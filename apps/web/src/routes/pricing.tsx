import { createFileRoute } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";

export const Route = createFileRoute("/pricing")({
	component: Pricing,
});

function Pricing() {
	return (
		<main>
			<BaseHeader />
			<h2>Pricing</h2>
		</main>
	);
}
