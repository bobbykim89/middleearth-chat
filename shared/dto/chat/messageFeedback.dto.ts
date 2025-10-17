import { z } from 'zod'

const feedbackEnum = z.enum(['GOOD', 'BAD'])

export const feedbackRequestBodySchema = z.object({
  id: z.string(),
  feedback: feedbackEnum,
})

export const feedbackResSchema = z.object({
  feedback: feedbackEnum,
})

export type FeedbackRequestBodyType = z.infer<typeof feedbackRequestBodySchema>
export type FeedbackResType = z.infer<typeof feedbackResSchema>
