import { z } from "zod";

export const qiitaTeamMembershipSchema = z.object({
  description: z.string(),
  email: z.string(),
  id: z.string(),
  last_accessed_at: z.string(),
  name: z.string(),
});

export const qiitaTeamMembershipsSchema = z.array(qiitaTeamMembershipSchema);
export type QiitaTeamMembership = z.infer<typeof qiitaTeamMembershipSchema>;
