import {addComponentsDir, createResolver, defineNuxtModule, extendPages} from "@nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: 'cat'
    },
    setup() {
        const resolver = createResolver(import.meta.url);
        addComponentsDir({
            path: resolver.resolve('components'),
        });

        extendPages((pages) => {
            pages.unshift({
                name: 'cat.kitty',
                path: '/kitty',
                file: resolver.resolve('pages/PageKitty.vue'),
            })
        })
    },
})
