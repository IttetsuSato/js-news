import { z } from "zod";

export const qiitaGroupSchema = z.object({
  created_at: z.string(),
  description: z.string(),
  id: z.string(),
  name: z.string(),
  private: z.boolean(),
  updated_at: z.string(),
  url_name: z.string(),
});

export const qiitaGroupsSchema = z.array(qiitaGroupSchema);
export type QiitaGroup = z.infer<typeof qiitaGroupSchema>;
