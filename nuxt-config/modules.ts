export default {
  modules: [
    'nuxt-icons',
    '@nuxtjs/i18n',
    '@nuxt/eslint',

    '~/modules/core.i18n',
    '~/modules/core.redirects',
    '~/modules/core.yandex-metrica',
    '~/modules/core.analytics',

    '~/modules/feature.ui',
    '~/modules/feature.landing',
  ],
};
