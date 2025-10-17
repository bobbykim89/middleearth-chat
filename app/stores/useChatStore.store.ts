import type {
  ConversationResType,
  FeedbackType,
  MessageResType,
  MessageType,
} from '#shared/types/index.types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChatStore = defineStore('chat-store', () => {
  const conversationId = ref<string | null>(null)
  const messages = ref<MessageType[]>([])

  const initializeStore = async () => {
    const cookie = useCookie('conversation_id', {
      maxAge: 1210000,
      sameSite: true,
    })

    if (!cookie.value) {
      const res = await $fetch<ConversationResType>('/api/chat')
      cookie.value = res.data.id
      conversationId.value = res.data.id
      console.log(
        'Initiated new conversation with conversation_id: ',
        conversationId.value
      )
    } else {
      const res = await $fetch<ConversationResType>(
        `/api/chat?conversation_id=${cookie.value}`
      )
      conversationId.value = res.data.id
      messages.value = res.data.messages
      console.log(
        'Loaded conversation with conversation_id: ',
        conversationId.value
      )
    }
  }

  const askQuestion = async (question: string) => {
    if (!conversationId.value) return
    const res = await $fetch<MessageResType>('/api/chat', {
      method: 'POST',
      body: {
        conversation_id: conversationId.value,
        question: question,
      },
    })
    if (!res) return
    messages.value = [...messages.value, res.data]
  }

  const handleFeedbacks = async (id: string, feedback: FeedbackType) => {
    const res = await $fetch(`/api/chat/${id}`, {
      method: 'PUT',
      body: { id, feedback },
    })
    const messageIdx = messages.value.findIndex((item) => item.id === id)
    if (messageIdx !== -1 && messages.value[messageIdx]) {
      messages.value[messageIdx] = {
        ...messages.value[messageIdx],
        feedback: res.feedback,
      }
    }
  }

  const resetConversation = async () => {
    const cookie = useCookie('conversation_id', {
      maxAge: 1210000,
      sameSite: true,
    })
    cookie.value = null
    conversationId.value = null
    messages.value = []

    const res = await $fetch<ConversationResType>('/api/chat')
    cookie.value = res.data.id
    conversationId.value = res.data.id
    console.log(
      'Initiated new conversation with conversation_id: ',
      conversationId.value
    )
  }

  return {
    conversationId,
    messages,
    initializeStore,
    askQuestion,
    handleFeedbacks,
    resetConversation,
  }
})
