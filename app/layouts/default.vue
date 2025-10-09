<script setup lang="ts">
import { HeaderHorizontal } from '@bobbykim/manguito-theme'

const route = useRoute()

const paths = [
  { text: 'Home', path: '/' },
  { text: 'Chat', path: '/chat' },
  { text: 'about', path: '/about' },
]

const isCurrentPage = (path: string): boolean => {
  return path === route.path
}
</script>

<template>
  <div>
    <div>
      <HeaderHorizontal bg-color="dark-3">
        <template #content>
          <div class="flex gap-2 items-center tracking-wider">
            <img
              src="/img/logo-white.webp"
              alt="logo"
              class="aspect-square w-lg"
            />
            <h2 class="h2-sm text-light-1">MiddleEarthChat</h2>
          </div>
        </template>
        <template #content-right>
          <div class="flex gap-4 items-center">
            <NuxtLink
              v-for="(link, idx) in paths"
              :key="idx"
              :to="link.path"
              class="text-light-3 hover:text-light-4 transition-colors duration-300 ease-linear"
              :class="{ 'font-bold': isCurrentPage(link.path) }"
              >{{ link.text }}</NuxtLink
            >
          </div>
        </template>
        <template #mobile-content="{ headerClose }">
          <div class="flex flex-col gap-4 justify-center items-center py-2xs">
            <NuxtLink
              v-for="(link, idx) in paths"
              :key="idx"
              :to="link.path"
              class="text-dark-2 hover:text-dark-4 transition-colors duration-300 ease-linear"
              :class="{ 'font-bold': isCurrentPage(link.path) }"
              @click="headerClose"
              >{{ link.text }}</NuxtLink
            >
          </div>
        </template>
      </HeaderHorizontal>
    </div>
    <div class="bg-dark-3">
      <slot />
    </div>
    <div>Footer</div>
  </div>
</template>

<style scoped></style>
