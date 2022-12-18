import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../libraries/mongodb";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("shorten");
    const data = db.collection("url").find();

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
}
