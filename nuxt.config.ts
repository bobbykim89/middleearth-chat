// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', '@nuxt/fonts'],
  app: {
    head: {
      title: 'MiddleEarchChat',
      htmlAttrs: {
        lang: 'en',
      },
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
