import { z } from 'zod'

export const chatRequestBodySchema = z.object({
  conversation_id: z.string(),
  question: z.string(),
})

export type ChatRequestBody = z.infer<typeof chatRequestBodySchema>
