import { Input } from "../ui/input";
import { Button } from "../ui/button";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useToast } from "../ui/use-toast";
import { cn } from "@/lib/utils";
// import { Form, FormControl, FormMessage } from "../ui/form";
import { typographyVariants } from "../ui/typography";

// const schema = z.object({ url: z.string().min(16, { message: "URL must be long one" }) });

export default function ShortenUrlInput() {
	// const toast = useToast();
	// const form = useForm<z.infer<typeof schema>>({
	// 	resolver: zodResolver,
	// 	defaultValues: { url: "" },
	// });

	return (
		<section className='flex flex-col items-start justify-center p-4'>
			<h2 className={typographyVariants({ variant: "h1" })}>Shorten & Simplify:</h2>
			<h3 className={cn(typographyVariants({ variant: "h3" }), "mt-1")}>
				Long URLs to Powerful QRs in Seconds!
			</h3>
			<div className='flex items-center gap-2 py-3'>
				<Input placeholder='Enter loooooooooong URL' />
				<Button size='icon'>Ic</Button>
				<Button>Shorten URL</Button>
			</div>
			<p className={cn(typographyVariants({ variant: "small" }), "max-w-xl")}>
				Tame the URL beast! This magical box turns long links into bite-sized QR treats.
			</p>
		</section>
	);
}
