import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
	component: Auth,
});

function Auth() {
	return <main className='flex h-screen items-center justify-center'>borrow</main>;
}
