import prisma from "@/db";
import { NextResponse } from "next/server";
import { generateShortkey } from "@/lib/url";

export async function POST(req: Request, res: Response) {
  const { longURL, customUrl } = await req.json();

  if (!longURL) return NextResponse.json("Invalid request", { status: 400 });

  const found_link = await prisma.url.findFirst({
    where: { originalUrl: longURL },
  });

  if (found_link)
    return NextResponse.json(
      { short_link: found_link.shortUrl },
      { status: 200 }
    );

  const lks = generateShortkey(customUrl);

  const short_link = await prisma.url.create({
    data: {
      originalUrl: longURL,
      shortUrl: lks.short_link,
      shortUrlKey: lks.short_key,
    },
  });

  return NextResponse.json({ short_link: short_link.shortUrl });
}
