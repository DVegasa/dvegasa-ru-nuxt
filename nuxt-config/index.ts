import modules from './modules';
import i18n from './i18n';
import eslint from './eslint';
import head from './head';
import css from './css';

export const index = defineNuxtConfig({
  devtools: { enabled: true },

  ...modules,

  app: {
    ...head,
  },

  ...css,

  ...i18n,
  ...eslint,
});
