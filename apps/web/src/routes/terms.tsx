import { createFileRoute } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";

export const Route = createFileRoute("/terms")({
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
