import modules from './modules';
import i18n from './i18n';
import eslint from './eslint';
import head from './head';
import css from './css';
import svgo from './svgo';

export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: { inlineSSRStyles: false },
  ...modules,

  app: {
    ...head,
  },

  ...css,

  ...i18n,
  ...eslint,
  ...svgo,
});
