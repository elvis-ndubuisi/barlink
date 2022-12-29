import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import connectMongo from "../../../libraries/mongodb";
import validateUrl from "../../../libraries/validateUrl";
import { nanoid } from "nanoid";

type Data = {
  type: string;
  message?: string;
  result?: {
    link: string;
    shortlink: string;
    altLink: string;
  };
};

export default async function shorten(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Check request method. Accepts only POST request.
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ type: "Error", message: "request method not allowed" });
  }
  const body = req.body;
  const { link, custom } = JSON.parse(body);

  if (!link) {
    return res
      .status(400)
      .json({ type: "ERR_Input", message: "Expected string" });
  }
  // validate URL
  if (!validateUrl(link)) {
    return res
      .status(406)
      .json({ type: "ERR_Input", message: "Invalid URL provided" });
  }

  try {
    const database = await connectMongo();
    const collection = database.collection("url");
    /* Check if passed URL or custom string already exist */
    let foundLink = await collection.findOne({
      $or: [{ link: link }, { custom: custom }],
    });
    if (foundLink) {
      return res.status(200).json({
        type: "FOUND",
        result: {
          link: foundLink.link,
          shortlink: foundLink.shortlink,
          altLink: foundLink.altShortlink,
        },
      });
    } else {
      if (custom) {
        // Generate URL using custom string
        // TODO: make sure custom is secured before saving to database.
        const result = await collection.insertOne({
          link: link,
          shortlink: `${process.env.HOST}/${custom}`,
          altShortlink: `${process.env.ALT_HOST}/${custom}`,
          hash: custom,
        });
        // FindQuery is Skip to save 1 write operation. YEEEEEEEHAAA!!!
        if (result) {
          return res.status(201).json({
            type: "SUCCESS_INSERT",
            result: {
              link: link,
              shortlink: `${process.env.HOST}/${custom}`,
              altLink: `${process.env.ALT_HOST}/${custom}`,
            },
          });
        }
        return res
          .status(500)
          .json({ type: "ERR", message: "couldn't create link" });
      } else {
        let hash = nanoid(8);
        const result = await collection.insertOne({
          link: link,
          shortlink: `${process.env.HOST}/${hash}`,
          altShortlink: `${process.env.ALT_HOST}/${hash}`,
          hash: hash,
        });
        if (result) {
          return res.status(201).json({
            type: "SUCCESS_INSERT",
            result: {
              link: link,
              shortlink: `${process.env.HOST}/${hash}`,
              altLink: `${process.env.ALT_HOST}/${hash}`,
            },
          });
        }
        return res
          .status(500)
          .json({ type: "ERR", message: "couldn't create link" });
      }
    }
  } catch (error: any) {
    console.log(error);
    return res
      .status(500)
      .json({ type: "ERR_SRV", message: "internal server error" });
  }
}
