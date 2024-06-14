import {addServerPlugin, createResolver, defineNuxtModule} from "@nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: 'i18n'
    },
    setup() {
        // const resolver = createResolver(import.meta.url)
        // addServerPlugin(resolver.resolve('./plugins/define-default-language/define-default-language.ts'))
    },
})
