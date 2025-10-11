export type MessageType = {
  id: string
  question: string
  answer: string
  created_at: string
}

export type ConversationType = {
  id: string
  messages: MessageType[]
  created_at: string
}

export type ConversationResType = {
  data: ConversationType
  message: string
}

export type MessageResType = {
  conversation_id: string
  data: MessageType
}
