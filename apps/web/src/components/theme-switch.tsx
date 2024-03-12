import {
	ActionIcon,
	useMantineColorScheme,
	useComputedColorScheme,
	Group,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";

export default function ThemeSwitcgh() {
	const { setColorScheme, colorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});

	return (
		<Group>
			<ActionIcon
				onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
				variant='outline'
				size='lg'
				aria-label='Toggle color scheme'>
				<IconSun
					className={cx("block", colorScheme === "light" && "hidden")}
					stroke={1.5}
					size={22}
				/>
				<IconMoon
					className={cx("block", colorScheme === "dark" && "hidden")}
					stroke={1.5}
					size={22}
				/>
			</ActionIcon>
		</Group>
	);
}
