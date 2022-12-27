import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import validateUrl from "../../../libraries/validateUrl";
//  TODO: install pageres npm package

export default async function visitlink(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // accepts only post requests.
  if (req.method !== "POST") {
    return res
      .status(400)
      .json({ type: "ERR_REQUEST_METHOD", message: "request method allowed" });
  }
  const { link } = req.body;
  if (!validateUrl(link)) {
    return res
      .status(400)
      .json({ type: "ERR_INVALID_URL", message: "input not valid as url" });
  } else {
    // invoke pageres and return screenshots based on client screen size
  }
}
