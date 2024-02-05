// import { Button } from "@nextui-org/button";
// import { UserMenu } from "./user-menu";
// import { Link } from "@nextui-org/link";
// import { Chip } from "@nextui-org/chip";
// import { Icons } from "../icons";

// export function NavHeader() {
//   let user = null;
//   return (
//     <header className="pt-3 pb-2 sticky top-0 w-full z-20 h-14 backdrop-blur-md bg-deep-sapphire-950 text-white">
//       <section className="flex items-center justify-between mx-auto max-w-screen-xl px-4 md:px-0">
//         <div className="flex items-center gap-2">
//           <Icons.qrcode />
//           <h1 className="font-bold text-2xl">Barlink</h1>
//           <Chip size="sm" className="text-dark bg-mid-light">
//             v2.0.0
//           </Chip>
//         </div>
//         <nav className="flex items-center gap-6">
//           <ul className="inline-flex items-center gap-3 font-medium">
//             <li>
//               <Link
//                 className="font-medium text-sm hover:underline underline-offset-4 text-dark hover:text-cinnabar"
//                 href={"/"}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="font-medium text-sm hover:underline underline-offset-4 text-dark hover:text-cinnabar"
//                 href={"/shorten"}
//               >
//                 Shorten
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="font-medium text-sm hover:underline underline-offset-4 text-dark hover:text-cinnabar"
//                 href={"/gen/qrcode"}
//               >
//                 QRcode
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="font-medium text-sm hover:underline underline-offset-4 text-dark hover:text-cinnabar"
//                 // href={"/integration"}
//                 href={"#"}
//               >
//                 Integration
//               </Link>
//             </li>
//           </ul>
//           {/* {user ? <UserMenu /> : <Button size="sm">Sign In</Button>} */}
//           <Button
//             size="md"
//             radius="none"
//             className="bg-dark text-light rounded-md"
//           >
//             Get started
//           </Button>
//         </nav>
//       </section>
//     </header>
//   );
// }
import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export default function BaseHeader() {
	return (
		<header className='h-22 w-full'>
			<section className='mx-auto flex max-w-screen-2xl items-center justify-between px-2'>
				<div className='flex items-center gap-2'>
					<Icons.Qrcode />
					<h3 className='text-xl font-bold'>Barlink</h3>
				</div>
				<div>
					<nav className='flex items-center gap-2'>
						<Link href='#'>Docs</Link>
						<Link href='#'>Integration</Link>
					</nav>
					<Button>Sign Up</Button>
					<Button variant='outline'>Join</Button>
				</div>
			</section>
		</header>
	);
}