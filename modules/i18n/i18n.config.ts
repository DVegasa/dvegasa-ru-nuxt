import {landing_ru} from "~/modules/landing/i18n/ru";
import {landing_en} from "~/modules/landing/i18n/en";
import {defineDefaultLocale} from "~/modules/i18n/utils/defineDefaultLocale";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: defineDefaultLocale(),
    fallbackLocale: 'ru',
    detectBrowserLanguage: {
        useCookie: true,
        cookieCrossOrigin: true,
        cookieKey: 'i18n_redirected'
    },
    messages: {
        ru: {
            landing: {...landing_ru},
        },
        en: {
            landing: {...landing_en},
        }
    }
}))
