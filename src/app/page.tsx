import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Feature } from "@/components/card";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen max-h-[30em] grid place-content-center z-0">
        <section className="dot_bg absolute top-0 left-0 bottom-0 right-0 -z-10" />
        <section className="max-w-screen-xl mx-auto px-4 md:px-0 flex flex-col items-center gap-2 leading-none justify-center">
          <h1 className="font-semibold text-6xl text-center">
            Streamline Your Links with Barlink
          </h1>
          <p className="text-lg font-medium text-center text-secondary">
            Barlink makes it effortless to generate QR codes and shorten URLs.
            Enhance user experience and engagement with our free and
            user-friendly services.
          </p>
          <div className="flex items-center gap-6">
            <Button
              href="/gen/qrcode"
              as={Link}
              size="lg"
              className="font-medium text-main bg-highlight"
            >
              Generate QR
            </Button>
            <Button
              href="/gen/shorten"
              as={Link}
              variant="bordered"
              size="lg"
              className="font-medium text-highlight border-highlight bg-bg"
            >
              Shorten URL
            </Button>
          </div>
        </section>
      </section>

      <section className="space-y-4 bg-bg2 py-4">
        <h2 className="text-center font-bold text-3xl">Key Features</h2>
        <section className="flex items-center gap-6 justify-center max-w-screen-xl mx-auto px-4 md:px-0">
          <Feature />
          <Feature />
          <Feature />
        </section>
      </section>
    </>
  );
}
