import { createResolver, defineNuxtModule, extendPages } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'feature.landing',
  },
  setup() {
    const resolver = createResolver(import.meta.url);
    extendPages((pages) => {
      pages.unshift({
        name: 'home',
        path: '/',
        file: resolver.resolve('pages/home/PageHome.vue'),
      });
    });
  },
});
