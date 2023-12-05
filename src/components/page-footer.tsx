import { Link } from "@nextui-org/link";
import { Icons } from "./icons";
import { siteConfig } from "@/configs/site.config";

export function PageFooter() {
  return (
    <footer className="py-4">
      <section className="flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-0">
        <h2>barlink</h2>

        <section>
        <div className="flex items-center gap-3">
          <Link
            isExternal
            className="text-main hover:text-tertiary"
            href={siteConfig.author.twitter}
          >
            <Icons.twitter className="h-4 w-4" />
          </Link>
          <Link
            isExternal
            className="text-main hover:text-tertiary"
            href={siteConfig.author.github}
          >
            <Icons.twitter className="h-4 w-4" />
          </Link>
        </div>

        <Link>Privacy policy</Link>
        <Link>Terms of use</Link>
        </section>
      </section>
    </footer>
  );
}
