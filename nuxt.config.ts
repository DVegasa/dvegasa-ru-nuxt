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
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap',
        }
      ],
    }
  },

  css: ['~/assets/styles/index.scss'],
})
