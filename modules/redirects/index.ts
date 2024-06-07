import {createResolver, defineNuxtModule, extendPages} from "@nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: 'redirects'
    },
    setup() {
        const resolver = createResolver(import.meta.url);
        extendPages((pages) => {
            pages.unshift({
                name: 'cv',
                path: '/cv',
                file: resolver.resolve('pages/PageCv.vue'),
            })
            pages.unshift({
                name: 'xp',
                path: '/xp',
                file: resolver.resolve('pages/PageXp.vue'),
            })
        })
    },
})
