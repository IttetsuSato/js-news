import { z } from "zod";

export const qiitaTaggingSchema = z.object({
  name: z.string(),
  versions: z.array(z.string()),
});

export const qiitaTaggingsSchema = z.array(qiitaTaggingSchema);
export type QiitaTag = z.infer<typeof qiitaTaggingSchema>;
