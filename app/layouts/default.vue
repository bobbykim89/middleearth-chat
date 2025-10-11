<script setup lang="ts">
import { HeaderHorizontal } from '@bobbykim/manguito-theme'
import {
  MclFooterA,
  type MenuItemType,
  type SocialUrl,
} from '@bobbykim/mcl-footer'

const route = useRoute()
const router = useRouter()
const currentYearRef = ref<number>()

const paths: MenuItemType[] = [
  { title: 'Home', url: '/' },
  { title: 'Chat', url: '/chat' },
  { title: 'About', url: '/about' },
]

const socialUrl: SocialUrl = {
  github: 'https://github.com/bobbykim89',
}

const isCurrentPage = (path: string): boolean => {
  return path === route.path
}
const logoClick = (e: Event, link: string) => {
  e.preventDefault()
  router.push({ path: link })
}
const menuClick = (e: Event, menu: MenuItemType) => {
  e.preventDefault()
  router.push({ path: menu.url })
}

onMounted(() => {
  const currentDate = new Date()
  currentYearRef.value = currentDate.getFullYear()
})
</script>

<template>
  <div>
    <div>
      <HeaderHorizontal bg-color="dark-3">
        <template #content>
          <NuxtLink to="/" class="flex gap-2 items-center tracking-wider">
            <img
              src="/img/logo-white.webp"
              alt="logo"
              class="aspect-square w-lg"
            />
            <h2 class="h2-sm text-light-1">MiddleEarthChat</h2>
          </NuxtLink>
        </template>
        <template #content-right>
          <div class="flex gap-4 items-center">
            <NuxtLink
              v-for="(link, idx) in paths"
              :key="idx"
              :to="link.url"
              class="text-light-3 hover:text-light-4 transition-colors duration-300 ease-linear"
              :class="{ 'font-bold': isCurrentPage(link.url) }"
              >{{ link.title }}</NuxtLink
            >
          </div>
        </template>
        <template #mobile-content="{ headerClose }">
          <div class="flex flex-col gap-4 justify-center items-center py-2xs">
            <NuxtLink
              v-for="(link, idx) in paths"
              :key="idx"
              :to="link.url"
              class="text-dark-2 hover:text-dark-4 transition-colors duration-300 ease-linear"
              :class="{ 'font-bold': isCurrentPage(link.url) }"
              @click="headerClose"
              >{{ link.title }}</NuxtLink
            >
          </div>
        </template>
      </HeaderHorizontal>
    </div>
    <div class="bg-dark-3">
      <slot />
    </div>
    <MclFooterA
      title="MiddleEarthChat"
      logo="/img/logo-white.webp"
      logo-alt="logo icon"
      logo-link="/"
      :logo-as-link="false"
      :menu-item-as-link="false"
      :menu-items="paths"
      :social-links="socialUrl"
      social-icon-color="light-4"
      bg-color="dark-3"
      border-top-color="warning"
      :display-highlight="true"
      highlight-color="warning"
      @logo-click="logoClick"
      @menu-click="menuClick"
    >
      <div class="text-center">
        <small class="text-warning"
          >&copy; MiddleEarthChat {{ currentYearRef }}</small
        >
        <p class="text-light-3 text-xs">
          Not affiliated with Tolkien Estate or Warner Bros.
        </p>
      </div>
    </MclFooterA>
  </div>
</template>

<style scoped></style>
