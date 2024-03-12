import { createLazyFileRoute } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";

export const Route = createLazyFileRoute("/pricing")({
	component: () => {
		return (
			<>
				<BaseHeader />
				<h2>Pricing</h2>
				<BaseFooter />
			</>
		);
	},
});
