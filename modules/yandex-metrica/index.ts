import { addServerPlugin, createResolver, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'yandex-metrica',
  },
  setup() {
    const resolver = createResolver(import.meta.url);
    addServerPlugin(resolver.resolve('./plugins/yandex-metrica-injection/yandex-metrica-injection.ts'));
  },
});
