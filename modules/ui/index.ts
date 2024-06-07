import {addComponentsDir, createResolver, defineNuxtModule, extendPages} from "@nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: 'ui'
    },
    setup() {
        const resolver = createResolver(import.meta.url);
    },
})
