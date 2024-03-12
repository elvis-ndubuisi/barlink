import { createLazyFileRoute } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";

export const Route = createLazyFileRoute("/faqs")({
	component: () => {
		return (
			<>
				<BaseHeader />
				<section>main</section>
				<BaseFooter />
			</>
		);
	},
});
