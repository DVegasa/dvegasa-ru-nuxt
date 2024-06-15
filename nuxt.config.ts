// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['nuxt-icons', '@nuxtjs/i18n', '@nuxt/eslint'],

  app: {
    head: {
      title: 'Эдуард Халтурин - fullstack разработчик',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, interactive-widget=resizes-content',

      meta: [
        {
          name: 'description',
          content: 'Продуктовый full-stack разработчик. Специализируюсь на Vue + PHP (Laravel)',
        },
      ],

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
        },
      ],

      htmlAttrs: {
        lang: 'ru',
      },
    },
  },

  css: ['~/assets/styles/index.scss'],

  i18n: {
    vueI18n: './modules/i18n/i18n.config.ts',
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
});
