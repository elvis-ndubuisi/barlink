import { nanoid } from "nanoid";
import { env } from "@/env.mjs";

const base_url = env.LINK_HOST;

export function generateShortkey(custom_url?: string) {
  const short_key =
    custom_url && custom_url.length > 3 ? custom_url : nanoid(8);

  return { short_link: base_url + short_key.toString(), short_key };
}
