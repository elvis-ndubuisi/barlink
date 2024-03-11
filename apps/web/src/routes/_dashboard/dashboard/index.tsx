import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/dashboard/")({
	component: () => <div>Hello /_dashboard/dashboard/!</div>,
});
