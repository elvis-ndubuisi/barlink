import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/generate")({
	component: Generate,
});

function Generate() {
	return (
		<div className='p-2'>
			<h2>Generate</h2>
		</div>
	);
}
