// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['nuxt-icons'],

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.png',
        }
      ]
    }
  },

  css: ['~/assets/styles/index.scss'],

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss:
  //         additionalData: '@use "~/assets/_colors.scss" as *;'
  //       }
  //     }
  //   }
  // }
})
