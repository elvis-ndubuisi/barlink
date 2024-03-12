import { createFileRoute } from "@tanstack/react-router";
import BaseHeader from "@/components/base-header";
import BaseFooter from "@/components/base-footer";

export const Route = createFileRoute("/privacy")({
	component: () => {
		return (
			<main>
				<BaseHeader />
				<div className='mx-auto max-w-screen-md rounded-lg'></div>
				<BaseFooter />
			</main>
		);
	},
});
