import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    LINK_HOST: z.string().url(),
  },
  client: {
    // NEXT_PUBLIC_GOOGLE_PUBLIC_ID: z.string(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    // NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
    LINK_HOST: process.env.LINK_HOST,
  },
});
