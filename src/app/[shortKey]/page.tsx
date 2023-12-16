import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/db";
import Image from "next/image";

export default async function ShortKey({
  params,
}: {
  params: { shortKey: string };
}) {
  noStore();
  const found = await prisma.url.findFirst({
    where: { shortUrlKey: params.shortKey },
  });
  if (found) return redirect(found.originalUrl);

  return (
    <section className="relative h-[calc(100vh_-_7em)] w-full flex items-center justify-center z-0 px-3">
      <div className="absolute top-0 left-0 bottom-0 right-0 -z-10 dot_bg" />
      <section className="relative border border-main/20 flex flex-col gap-2 items-center justify-center h-48 rounded bg-card-bg p-2 w-full min-w-[300px] max-w-lg">
        <Image
          alt="mascot"
          src={"/sad-sea-otter.png"}
          width={150}
          height={150}
          className="absolute -bottom-16 -right-10"
        />
        <h2 className="font-bold text-3xl">Opsssy. You Found Me</h2>
        <p className="max-w-[80%]">
          Path to <span className="text-tertiary">{params.shortKey}</span> make
          be deleted or not valid
        </p>
      </section>
    </section>
  );
}
