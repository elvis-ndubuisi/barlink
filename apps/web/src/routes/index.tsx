import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className='p-2'>
			<Button>Click Me!</Button>
			<h3>Welcome Home!</h3>
		</div>
	);
}
