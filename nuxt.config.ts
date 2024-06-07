// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['nuxt-icons'],

  app: {
    head: {
      title: 'Эдуард Халтурин - fullstack разработчик',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, interactive-widget=resizes-content',

      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.png',
        }
      ],
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
