import { ShortenInput } from "@/components/shorten-input";
import Community from "@/components/community";

export default function ShortenPage() {
  return (
    <main className="relative z-0">
      <section className="dot_bg absolute bottom-0 left-0 right-0 top-0 -z-10 opacity-30" />

      <section className="relative grid h-screen max-h-[27em] place-content-center">
        <section className="flex flex-col gap-3 px-2">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Shorten Links in a Flash
          </h1>
          <p className="max-w-xl text-center opacity-80">
            Create memorable and trackable links instantly, no registration
            needed.
          </p>
          <ShortenInput />
        </section>
      </section>

      <section className="bg-lavender-blue py-8">
        <h2>Unlock More Features</h2>
        <div>
          <section>image</section>
          <div></div>
        </div>
      </section>

      <section className="my-8 flex flex-col space-y-4 px-4 md:px-2">
        <h3 className="mx-auto max-w-md text-center text-2xl font-bold">
          Simple & fast URL shortener
        </h3>
        <p className="bg-card-bg/5 border-main/30 mx-auto max-w-2xl rounded-md border p-3 text-center backdrop-blur-md">
          URLs shortened with Barlink URL shortener always remains the same so
          you don&apos;t have to worry about any redirect conflict. Your
          shortened URLs can be used in social media platforms, advertisements,
          blogs, instant messages, publications, forums and other locations.
        </p>

        {/* <div className="flex items-center space-x-3">adsfads</div> */}
      </section>

      <section className="bg-dark text-light h-24">
        <section className="mx-auto max-w-screen-lg px-4">
          <h2>See How Others Are Succeeding</h2>
          <div>testimonies</div>
        </section>
      </section>

      <section className="mx-auto max-w-screen-lg px-4">
        <h2>Frequently Asked Questions</h2>
      </section>

      {/* <Community /> */}
    </main>
  );
}
