import BaseHeader from "@/components/base-header";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/integration")({
	component: () => {
		return (
			<>
				<BaseHeader />
				<section>documentation</section>
			</>
		);
	},
});
