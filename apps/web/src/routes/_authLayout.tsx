import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Box, Center } from "@mantine/core";

export const Route = createFileRoute("/_authLayout")({
	component: () => {
		return (
			<main className='flex min-h-screen items-stretch justify-center'>
				<Box bg={"brand.0"} className='hidden max-w-md flex-auto lg:block'>
					<Center h='100%' className=''>
						center
					</Center>
				</Box>
				<Outlet />
			</main>
		);
	},
});
