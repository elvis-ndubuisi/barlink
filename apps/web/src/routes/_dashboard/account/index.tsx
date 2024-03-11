import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/account/")({
	component: () => <div>Hello /_dashboard/account/!</div>,
});
