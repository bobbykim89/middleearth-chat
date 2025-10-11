<script setup lang="ts">
import type { MessageType } from '#shared/types/index.types'

defineProps<MessageType>()
</script>

<template>
  <div>
    <div class="flex justify-end pl-md lg:pl-lg mb-sm">
      <div class="bg-light-4 text-dark-2 rounded-lg p-xs font-bold">
        {{ question }}
      </div>
    </div>
    <div class="flex justify-start pr-md lg:pr-lg mb-md">
      <div class="bg-dark-4 rounded-lg p-xs text-light-1">
        {{ answer }}
      </div>
    </div>
  </div>
</template>
