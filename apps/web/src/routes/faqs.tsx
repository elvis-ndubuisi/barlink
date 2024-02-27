import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faqs")({
	component: FAQs,
});

function FAQs() {
	return <main>faqs</main>;
}
