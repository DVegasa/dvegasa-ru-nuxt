import { addServerPlugin, createResolver, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'core.yandex-metrica',
  },
  setup() {
    const resolver = createResolver(import.meta.url);
    addServerPlugin(resolver.resolve('./plugin.yandex-metrica-injection/yandex-metrica-injection.ts'));
  },
});
