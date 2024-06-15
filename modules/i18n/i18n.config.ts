import {landing_ru} from "~/modules/landing/i18n/ru";
import {landing_en} from "~/modules/landing/i18n/en";

export default defineI18nConfig(() => {
    return ({
        strategy: 'no_prefix',
        legacy: false,
        defaultLocale: 'ru',
        fallbackLocale: 'ru',
        messages: {
            ru: {
                landing: {...landing_ru},
            },
            en: {
                landing: {...landing_en},
            }
        }
    })
})
