import { z } from "zod";

export const zennArticlesSchema = z.object({
  articles: z.array(
    z.object({
      id: z.number(),
      post_type: z.string(),
      title: z.string(),
      slug: z.string(),
      comments_count: z.number(),
      liked_count: z.number(),
      body_letters_count: z.number(),
      article_type: z.string(),
      emoji: z.string(),
      is_suspending_private: z.boolean(),
      published_at: z.string(),
      body_updated_at: z.string(),
      source_repo_updated_at: z.string().nullable(),
      pinned: z.boolean(),
      path: z.string(),
      user: z.any(),
      publication: z.any().nullable(),
    }),
  ),
  next_page: z.number(),
});

export type ZennArticles = z.infer<typeof zennArticlesSchema>;
