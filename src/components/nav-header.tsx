import { Button } from "@nextui-org/button";
import { UserMenu } from "./navigation/user-menu";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { Icons } from "./icons";

export function NavHeader() {
  let user = null;
  return (
    <header className="pt-3 pb-2 sticky top-0 w-full z-20 h-18 backdrop-blur-md bg-light/10 border-b border-mid-light">
      <section className="flex items-center justify-between mx-auto max-w-screen-xl px-4 md:px-0">
        <div className="flex items-center gap-2">
          <Icons.qrcode />
          <h1 className="font-bold text-2xl">Barlink</h1>
          <Chip size="sm" className="text-dark bg-mid-light">v2.0.0</Chip>
        </div>
        <nav className="flex items-center gap-6">
          <ul className="inline-flex items-center gap-3 font-medium">
            <li>
              <Link
                className="font-medium text-sm hover:underline underline-offset-4 text-dark hover:text-cinnabar"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:underline underline-offset-4 text-dark hover:text-cinnabar"
                href={"/shorten"}
              >
                Shorten
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:underline underline-offset-4 text-dark hover:text-cinnabar"
                href={"/gen/qrcode"}
              >
                QRcode
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:underline underline-offset-4 text-dark hover:text-cinnabar"
                // href={"/integration"}
                href={"#"}
              >
                Integration
              </Link>
            </li>
          </ul>
          {/* {user ? <UserMenu /> : <Button size="sm">Sign In</Button>} */}
          <Button size="md" radius="none" className="bg-dark text-light rounded-md" >Get started</Button>
        </nav>
      </section>
    </header>
  );
}
