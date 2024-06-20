export default {
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    'nuxt-svgo',

    '~/modules/core.i18n',
    '~/modules/core.redirects',
    '~/modules/core.yandex-metrica',
    '~/modules/core.analytics',
    '~/modules/core.ui',

    '~/modules/feature.landing',
  ],
};
