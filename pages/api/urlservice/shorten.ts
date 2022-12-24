import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../libraries/mongodb";

type Data = {
  name: string;
};

export default async function shorten(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check request method. Accepts only POST request.
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ type: "Error", message: "request method not allowed" });
  }
  console.log(req.body);
  const { link, custom } = req.body;
  if (!link) {
    return res
      .status(400)
      .json({ type: "Error", message: "Expected string URL" });
  }

  try {
    const database = await connectMongo();
    const collection = database.collection("url");
    /* Check if passed URL or custom string already exist */
    let foundLink = collection.findOne({ url: link });
    /* if No foundLink, process ELSE return found link details */
    /*
    * Check if custom has value
        IF NO VALUE
          generate and store hash
        ELSE
          store custom as string (security) 
     */
  } catch (error: any) {
    return res.status(500).send("internal server error");
    console.log(error);
  }
}
