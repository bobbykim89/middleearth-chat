import { chatQueryParams } from '#shared/dto/chat'
import type { ConversationResType } from '#shared/types/index.types'
import { getValidatedQuery } from 'h3'

export default defineEventHandler(async (e) => {
  const config = useRuntimeConfig(e)
  const query = await getValidatedQuery(e, chatQueryParams.parse)
  const apiUrl = query.conversation_id
    ? `${config.apiUrl}/api/chat/conversations/?conversation_id=${query.conversation_id}`
    : `${config.apiUrl}/api/chat/conversations/`
  const res = await $fetch<ConversationResType>(apiUrl, {
    method: 'GET',
  })
  return res
})
