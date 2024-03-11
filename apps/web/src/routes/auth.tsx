import { createFileRoute } from "@tanstack/react-router";
import fbIcon from "../assets/icons8-facebook-96.png";
import twIcon from "../assets/icons8-twitter-96.png";
import ggIcon from "../assets/icons8-google-96.png";

export const Route = createFileRoute("/auth")({
	component: Auth,
});

function Auth() {
	return <main className='flex h-screen items-center justify-center'>borrow</main>;
}
