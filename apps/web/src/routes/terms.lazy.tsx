import BaseFooter from "@/components/base-footer";
import BaseHeader from "@/components/base-header";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/terms")({
	component: () => {
		return (
			<main>
				<BaseHeader />
				terms page
				<BaseFooter />
			</main>
		);
	},
});
