<script setup lang="ts">
import { MclFormGroup, MclInputText } from '@bobbykim/mcl-forms'

const textValRef = ref<string>('')
const emit = defineEmits<{
  (e: 'click-submit', event: Event, text: string): void
  (e: 'click-reset', event: Event): void
}>()

const handleSubmit = (e: Event) => {
  if (textValRef.value) {
    emit('click-submit', e, textValRef.value)
    textValRef.value = ''
  }
}

const handleClear = (e: Event) => {
  emit('click-reset', e)
  textValRef.value = ''
}
</script>

<template>
  <div class="relative bg-dark-4 p-xs rounded-lg w-full mt-xs">
    <form @submit.prevent="handleSubmit">
      <MclFormGroup
        label-for="text-input"
        label="Ask a Question:"
        text-color="warning"
      >
        <div class="flex gap-2xs">
          <MclInputText
            id="text-input"
            v-model="textValRef"
            rounded
            highlight-color="warning"
            class="w-full"
          />
          <button
            type="submit"
            role="button"
            aria-label="submit"
            class="bg-warning rounded-full h-[40px] aspect-square flex justify-center items-center hover:bg-opacity-75 transition-colors duration-300 ease-linear text-light-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="w-sm aspect-square"
              fill="currentColor"
            >
              <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
              <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
              />
            </svg>
          </button>
          <button
            title="Clear Conversation"
            aria-label="clear conversation"
            type="reset"
            class="bg-danger rounded-full h-[40px] aspect-square flex justify-center items-center hover:bg-opacity-75 transition-colors duration-300 ease-linear text-light-3 font-bold text-lg"
            @click="handleClear"
          >
            C
          </button>
        </div>
      </MclFormGroup>
    </form>
  </div>
</template>

<style scoped></style>
