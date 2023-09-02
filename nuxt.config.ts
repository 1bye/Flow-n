// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: 'vercel-edge'
  },

  modules: [
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@nuxthq/ui',
    'nuxt-lodash',
    'nuxt-icon'
  ]
})
