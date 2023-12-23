import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Feature } from "@/components/card";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen max-h-[30em] grid place-content-center z-0">
        <section className="dot_bg absolute top-0 left-0 bottom-0 right-0 -z-20 opacity-30" />
        <section className="max-w-screen-xl mx-auto px-4 md:px-0 flex flex-col items-center space-y-5 justify-center">
          <h1 className="font-black text-5xl text-center mx-auto max-w-5xl">
          <span className="font-normal text-6xl">Shorten Links, Lengthen Reach:</span> <br/>QR Codes & URLs That Convert.
          </h1>
          <p className="text-xl text-center max-w-xl">
          Create and manage custom QR codes and branded short links with ease
          </p>
          <div className="flex items-center gap-6">
            <Button
              href="/login/sign-up"
              as={Link}
              size="lg"
              radius="none"
              className="rounded-md bg-dark text-light hover:outline-cinnabar"
            >
              Get started for free
            </Button>
            <Button
              href="/shorten"
              as={Link}
              variant="bordered"
              size="lg"
              radius="none"
              className="rounded-md bg-light border-cinnabar border-1 font-medium hover:outline-cinnabar"
            >
              Shorten URL link
            </Button>
          </div>
        </section>
      </section>

      <section className="space-y-8 bg-dark text-light py-4">
        <h2 className="text-center font-bold text-4xl text-cinnabar">
          Key Features
        </h2>
        <section className="flex items-center gap-6 justify-center max-w-screen-xl mx-auto px-4 md:px-0">
          <div className="max-w-md rounded-md p-3 flex flex-col space-y-4">
            <div>
            <h3 className="font-bold text-xl text-tangerine">QR Codes</h3>
            <p className="text-xl text-mid-light opacity-80">Made your way</p>
            </div>
            <p>Create custom QR codes with logos, colors, and dynamic content. Track scans and measure impact.</p>
          </div>

          <div className="max-w-md rounded-md p-3 flex flex-col space-y-4">
            <div>
            <h3 className="font-bold text-xl">Short Links</h3>
            <p className="text-xl text-mid-light opacity-80">Big Impact</p>
            </div>
            <p>Shorten URLs, brand them, and track clicks across platforms. Unleash the power of data-driven marketing.</p>
          </div>

          <div className="max-w-md rounded-md p-3 flex flex-col space-y-4">
            <div>
            <h3 className="font-bold text-xl text-lavender-blue">Empowering Developers</h3>
            <p className="text-xl text-mid-light opacity-80">Developer-Friendly API:</p>
            </div>
            <p>Integrate seamlessly with our API. Build custom solutions, automate workflows, and extend possibilities.</p>
          </div>
        </section>

        <h2 className="text-center text-5xl">Flexible management workspace</h2>
        <div className="flex flex-col md:flex-row mx-auto max-w-screen-lg">
          <section>
            worksace dadskjfk
          </section>
          {/* <Image/> */}
        </div>

      </section>

      {/* <section className="h-48 bg-mid-light text-dark">
        <h3>Title goes here</h3>
      </section> */}
    </>
  );
}
