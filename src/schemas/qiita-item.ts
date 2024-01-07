import { z } from "zod";
import { qiitaUserSchema } from "./qiita-user";
import { qiitaTaggingsSchema } from "./qiita-tagging";
import { qiitaTeamMembershipSchema } from "./qiita-team-membership";
import { qiitaGroupSchema } from "./qiita-group";

export const qiitaItemSchema = z.object({
  rendered_body: z.string(),
  body: z.string(),
  coediting: z.boolean(),
  comments_count: z.number(),
  created_at: z.string(),
  group: qiitaGroupSchema.nullable(),
  id: z.string(),
  likes_count: z.number(),
  private: z.boolean(),
  reactions_count: z.number(),
  stocks_count: z.number(),
  tags: qiitaTaggingsSchema,
  title: z.string(),
  updated_at: z.string(),
  url: z.string(),
  user: qiitaUserSchema,
  page_views_count: z.number().nullable(),
  team_membership: qiitaTeamMembershipSchema.nullable(),
  organization_url_name: z.string().nullable(),
  slide: z.boolean(),
});

export const qiitaItemsSchema = z.array(qiitaItemSchema);
export type QiitaItem = z.infer<typeof qiitaItemSchema>;
