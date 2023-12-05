import { ShortenInput } from "@/components/shorten-input";

export default function ShortenPage() {
  return (
    <main className="relative z-0">
      <section className="dot_bg absolute top-0 left-0 bottom-0 right-0 -z-10" />

      <section className="h-screen max-h-[27em] grid place-content-center relative">
        <section className="dot-bg flex items-center justify-center absolute top-0 left-0 right-0 bottom-0" />
        <section className="flex flex-col gap-3 max-w-lg px-2">
          <h1 className="text-center font-bold">shorten page</h1>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus suscipit, totam non similique reprehenderit natus animi
            commodi provident vitae quis quia adipisci quos porro dicta
            perspiciatis deleniti quidem id recusandae!
          </p>
          <ShortenInput />
        </section>
      </section>
    </main>
  );
}
