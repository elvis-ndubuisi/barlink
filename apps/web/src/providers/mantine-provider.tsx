import "@mantine/core/styles.css";
import { MantineProvider as Provider } from "@mantine/core";
import { PropsWithChildren } from "react";
import { theme } from "@/utils/theme";

export default function MantineProvider({ children }: Readonly<PropsWithChildren>) {
	return (
		<Provider defaultColorScheme='light' theme={theme}>
			{children}
		</Provider>
	);
}
