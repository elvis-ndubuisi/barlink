import { ShortenInput } from "@/components/shorten-input";

export default function ShortenPage() {
  return (
    <main className="relative z-0">
      <section className="dot_bg absolute top-0 left-0 bottom-0 right-0 -z-10" />

      <section className="h-screen max-h-[27em] grid place-content-center relative">
        <section className="dot-bg flex items-center justify-center absolute top-0 left-0 right-0 bottom-0" />
        <section className="flex flex-col gap-3 px-2">
          <h1 className="text-center font-bold text-5xl">
            Simplify your URLs.
            <br />
            Easy way to share links.
          </h1>
          <p className="text-center max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus suscipit, totam non similique reprehenderit natus animi
          </p>
          <ShortenInput />
        </section>
      </section>

      <section className="my-8 flex flex-col space-y-4">
        <h3 className="text-center text-2xl font-bold">
          Simple & fast URL shortener
        </h3>
        <p>
          URLs shortened with Barlink URL shortener always remains the same so
          you don&apos;t have to worry about any redirect conflict. Your
          shortened URLs can be used in social media platforms, advertisements,
          blogs, instant messages, publications, forums and other locations.
        </p>

        <div className="flex items-center space-x-3"></div>
      </section>
    </main>
  );
}
