import {
  feedbackRequestBodySchema,
  type FeedbackResType,
} from '#shared/dto/chat'
import { readValidatedBody } from 'h3'

export default defineEventHandler(async (e) => {
  const config = useRuntimeConfig(e)
  const { id, feedback } = await readValidatedBody(
    e,
    feedbackRequestBodySchema.parse
  )
  const res = await $fetch<FeedbackResType>(
    `${config.apiUrl}/api/chat/message/${id}/feedback/`,
    {
      method: 'PUT',
      body: {
        feedback,
      },
    }
  )
  return res
})
