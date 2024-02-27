import { createFileRoute } from "@tanstack/react-router";
import ShortenUrlPreview from "@/components/previews/shorten-url-preview";
import ShortenUrlInput from "@/components/inputs/shorten-url-input";

export const Route = createFileRoute("/shorten")({
	component: Shorten,
});

function Shorten() {
	return (
		<main className='flex h-screen flex-col md:grid md:grid-cols-2'>
			<ShortenUrlInput />
			<ShortenUrlPreview />
		</main>
	);
}
