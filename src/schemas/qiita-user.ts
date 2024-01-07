import { z } from "zod";

export const qiitaUserSchema = z.object({
  description: z.string().nullable(),
  facebook_id: z.string().nullable(),
  followees_count: z.number(),
  followers_count: z.number(),
  github_login_name: z.string().nullable(),
  id: z.string(),
  items_count: z.number(),
  linkedin_id: z.string().nullable(),
  location: z.string().nullable(),
  name: z.string().nullable(),
  organization: z.string().nullable(),
  permanent_id: z.number(),
  profile_image_url: z.string(),
  team_only: z.boolean(),
  twitter_screen_name: z.string().nullable(),
  website_url: z.string().nullable(),
});

export type QiitaUser = z.infer<typeof qiitaUserSchema>;
