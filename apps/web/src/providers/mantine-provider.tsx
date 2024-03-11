import "@mantine/core/styles.css";
import { MantineProvider as Provider } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function MantineProvider({ children }: PropsWithChildren) {
	return <Provider>{children}</Provider>;
}
