import prisma from "@/db";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { longURL } = await req.json();
  console.log(longURL);
  const short_link = await prisma.url.create({
    data: {
      originalUrl: longURL,
      shortUrl: "https://shorturl",
      shortUrlKey: "asdf",
    },
  });

  return NextResponse.json({ short_link: short_link.shortUrl });
}
