// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', '@nuxt/fonts'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'MiddleEarchChat',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'Discover an AI-powered app that answers all your questions about The Lord of the Rings characters, from Frodo and Gandalf to Sauron and beyond. Explore Middle-earth like never before.',
        },
        { property: 'og:title', content: 'MiddleEarchChat' },
        {
          property: 'og:description',
          content:
            'Discover an AI-powered app that answers all your questions about The Lord of the Rings characters, from Frodo and Gandalf to Sauron and beyond. Explore Middle-earth like never before.',
        },
        { property: 'og:type', content: 'website' },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'MiddleEarchChat',
        },
        {
          name: 'twitter:description',
          content:
            'Discover an AI-powered app that answers all your questions about The Lord of the Rings characters, from Frodo and Gandalf to Sauron and beyond. Explore Middle-earth like never before.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
        verbatimModuleSyntax: false,
        strict: true,
        types: ['vite/client'],
      },
    },
  },
  pinia: {
    storesDirs: ['~/stores/**'],
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  css: ['~/assets/css/page_transition.scss', '~/assets/css/styles.css'],
  runtimeConfig: {
    apiUrl: process.env.LOTR_CHARACTERS_API_URL,
  },
})
