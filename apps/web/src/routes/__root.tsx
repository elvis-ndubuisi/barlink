import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import "../styles/index.css";
import "@mantine/carousel/styles.css";
import { QueryClient } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
	component: () => (
		<>
			<Outlet />
			<TanStackRouterDevtools position='bottom-right' />
			<ReactQueryDevtools buttonPosition='bottom-left' />
		</>
	),
});
