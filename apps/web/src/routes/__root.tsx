import { Link, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import "../index.css";
import { QueryClient } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
	component: () => (
		<>
			<div className='flex gap-2 p-2'>
				<Link to='/' className='[&.active]:font-bold'>
					Home
				</Link>{" "}
				<Link to='/about' className='[&.active]:font-bold'>
					About
				</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools position='bottom-right' />
			<ReactQueryDevtools buttonPosition='top-right' />
		</>
	),
});
