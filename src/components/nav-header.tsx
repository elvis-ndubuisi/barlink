import { Button } from "@nextui-org/button";
import { UserMenu } from "./navigation/user-menu";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { Icons } from "./icons";

export function NavHeader() {
  let user = null;
  return (
    <header className="pt-3 pb-2 sticky top-0 w-full z-20 h-14 backdrop-blur-md bg-bg/20">
      <section className="flex items-center justify-between mx-auto max-w-screen-xl px-4 md:px-0">
        <div className="flex items-center gap-2">
          <Icons.qrcode />
          <h1 className="font-bold text-2xl">Barlink</h1>
          <Chip size="sm">v2.0.0</Chip>
        </div>
        <nav className="flex items-center gap-6">
          <ul className="inline-flex items-center gap-3 font-medium">
            <li>
              <Link
                className="font-medium text-sm hover:underline underline-offset-4 text-main"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:underline underline-offset-4 text-main"
                href={"/gen/shorten"}
              >
                Shorten
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:underline underline-offset-4 text-main"
                href={"/gen/qrcode"}
              >
                QRcode
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:underline underline-offset-4 text-main"
                href={"/integration"}
              >
                Integration
              </Link>
            </li>
          </ul>
          {user ? <UserMenu /> : <Button size="sm">Sign In</Button>}
        </nav>
      </section>
    </header>
  );
}