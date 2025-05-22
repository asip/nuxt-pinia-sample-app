// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint', '@nuxt/test-utils',
    '@pinia/nuxt', "pinia-plugin-persistedstate/nuxt",
    'vuetify-nuxt-module'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  imports: {
    dirs: ['stores']
  }
})