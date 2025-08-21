// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css:[
    '@/assets/style/tailwind.css',
    '@/assets/fonts/PlusJaKartaSans.css',
    '@/assets/icon/iconly.css'
  ],

  vite: {
  plugins: [
    tailwindcss(),
  ],
},

  modules: ['@nuxt/image', '@pinia/nuxt'],
})