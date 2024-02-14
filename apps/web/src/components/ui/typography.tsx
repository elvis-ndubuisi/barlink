import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as React from "react";

const typographyVariants = cva("inline-flex", {
	variants: {
		variant: {
			default: "",
			h1: "",
			h2: "",
			h3: "",
			h4: "",
			p: "",
			blockquote: "",
			list: "",
			inlineCode: "",
			lead: "",
			large: "",
			small: "",
			muted: "",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export interface TypographyProps
	extends React.BlockquoteHTMLAttributes<HTMLElement>,
		VariantProps<typeof typographyVariants> {}

const Typography = () => {
	return <p>adsf</p>;
};
Typography.displayName = "Button";

export { Typography, typographyVariants };
