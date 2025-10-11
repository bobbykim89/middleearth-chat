import { chatRequestBodySchema } from '#shared/dto/chat'
import type { MessageResType } from '#shared/types/index.types'
import { readValidatedBody } from 'h3'

export default defineEventHandler(async (e) => {
  const config = useRuntimeConfig(e)
  const body = await readValidatedBody(e, chatRequestBodySchema.parse)

  const res = await $fetch<MessageResType>(
    `${config.apiUrl}/api/chat/message/`,
    {
      method: 'POST',
      body,
    }
  )

  return res
})
