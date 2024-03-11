import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Box } from "@mantine/core";

export const Route = createFileRoute("/_authLayout")({
	component: () => {
		return (
			<main className='flex min-h-screen items-stretch justify-center'>
				<Box className='hidden max-w-md flex-auto bg-blue-300 lg:block'>
					image section
				</Box>
				<Outlet />
			</main>
		);
	},
});
