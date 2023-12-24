import { ShortenInput } from "@/components/shorten-input";
import Community from "@/components/community";

export default function ShortenPage() {
  return (
    <main className="relative z-0">
      <section className="dot_bg absolute top-0 left-0 bottom-0 right-0 -z-10 opacity-30" />

      <section className="h-screen max-h-[27em] grid place-content-center relative">
        <section className="flex flex-col gap-3 px-2">
          <h1 className="text-center font-bold text-3xl md:text-5xl">
          Shorten Links in a Flash
          </h1>
          <p className="text-center max-w-xl opacity-80">
          Create memorable and trackable links instantly, no registration needed.
          </p>
          <ShortenInput />
        </section>
      </section>

      <section className="py-8 bg-lavender-blue">
        <h2>Unlock More Features</h2>
        <div>
          <section>image</section>
          <div></div>
        </div>
      </section>

      <section className="my-8 flex flex-col space-y-4 px-4 md:px-2">
        <h3 className="text-center text-2xl font-bold max-w-md mx-auto">
          Simple & fast URL shortener
        </h3>
        <p className="max-w-2xl mx-auto text-center p-3 rounded-md bg-card-bg/5 backdrop-blur-md border border-main/30">
          URLs shortened with Barlink URL shortener always remains the same so
          you don&apos;t have to worry about any redirect conflict. Your
          shortened URLs can be used in social media platforms, advertisements,
          blogs, instant messages, publications, forums and other locations.
        </p>

        {/* <div className="flex items-center space-x-3">adsfads</div> */}
      </section>

      <section className="bg-dark h-24 text-light">
        <section className="max-w-screen-lg mx-auto px-4">
          <h2>See How Others Are Succeeding</h2>
          <div>testimonies</div>
        </section>
      </section>

      <section className="max-w-screen-lg mx-auto px-4">
        <h2>Frequently Asked Questions</h2>

      </section>

      {/* <Community /> */}
    </main>
  );
}
