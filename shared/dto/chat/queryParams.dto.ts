import { z } from 'zod'

export const chatQueryParams = z.object({
  conversation_id: z.string().optional(),
})

export type ChatQueryParams = z.infer<typeof chatQueryParams>
