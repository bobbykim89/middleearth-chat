import { useChatStore } from '~/stores'

export default defineNuxtPlugin({
  name: 'stores-init',
  async setup(nuxtApp) {
    const chatStore = useChatStore()
    nuxtApp.hook('app:created', async () => {
      await chatStore.initializeStore()
    })
  },
})
