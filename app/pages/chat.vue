<script setup lang="ts">
import { useRequestURL } from '#app'
import InputBlock from '@/components/InputBlock.vue'
import { useChatStore } from '@/stores'
import { storeToRefs } from 'pinia'
import ConversationBlock from '~/components/ConversationBlock.vue'

const url = useRequestURL()

useHead({
  title: 'About | MiddleEarthChat',
  meta: [
    { property: 'og:title', content: 'Chat | MiddleEarthChat' },
    { property: 'og:url', content: url.href },
    { property: 'twitter:domain', content: url.host },
    { property: 'twitter:url', content: url.href },
    {
      name: 'twitter:title',
      content: 'Chat | MiddleEarthChat',
    },
  ],
})

const chatStore = useChatStore()
const { messages } = storeToRefs(chatStore)

const handleSubmit = async (e: Event, question: string) => {
  e.preventDefault()
  await chatStore.askQuestion(question)
}
const handleReset = async (e: Event) => {
  e.preventDefault()
  if (
    import.meta.client &&
    window.confirm('Are you sure you want to clear chat history?')
  ) {
    await chatStore.resetConversation()
  }
}
</script>

<template>
  <div class="container px-xs text-light-3 relative">
    <div
      class="py-sm lg:py-md lg:max-w-3/4 xl:max-w-3/5 mx-auto flex flex-col min-h-[80vh] relative"
    >
      <div class="grow">
        <div class="flex justify-start pr-md lg:pr-lg mb-md">
          <div class="bg-dark-4 rounded-lg p-xs text-light-1">
            Ask any question about characters of Lord of the Rings!
          </div>
        </div>
        <ConversationBlock
          v-for="message in messages"
          :key="message.id"
          v-bind="message"
        />
      </div>
      <InputBlock
        class="sticky bottom-0"
        @click-submit="handleSubmit"
        @click-reset="handleReset"
      />
    </div>
  </div>
</template>
