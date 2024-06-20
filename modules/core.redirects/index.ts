import { createResolver, defineNuxtModule, extendPages } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'core.redirects',
  },
  setup() {
    const resolver = createResolver(import.meta.url);
    extendPages((pages) => {
      pages.unshift({
        name: 'cv',
        path: '/cv',
        file: resolver.resolve('page.cv/PageRedirectsCv.vue'),
      });
      pages.unshift({
        name: 'xp',
        path: '/xp',
        file: resolver.resolve('page.xp/PageRedirectsXp.vue'),
      });
    });
  },
});
