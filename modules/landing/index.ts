import { createResolver, defineNuxtModule, extendPages } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'landing',
  },
  setup() {
    const resolver = createResolver(import.meta.url);
    extendPages((pages) => {
      pages.unshift({
        name: 'home',
        path: '/',
        file: resolver.resolve('pages/PageHome.vue'),
      });
    });
  },
});
