import {landing_ru} from "~/modules/landing/i18n/ru";
import {landing_en} from "~/modules/landing/i18n/en";
import {Locales} from "~/modules/i18n/enums";

export default defineI18nConfig(() => {
    return ({
        strategy: 'no_prefix',
        legacy: false,
        defaultLocale: 'ru',
        locale: 'ru',
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
