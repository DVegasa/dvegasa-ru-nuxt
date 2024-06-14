import type {Locales} from "~/modules/i18n/enums";

export function defineDefaultLocale(): Exclude<Locales, Locales.auto> {
    if (!process.client) {
        return;
    }
    const browserLocale = window?.navigator?.language ?? '';
    console.log('ed__ defineDefaultLocale.ts:5 defineDefaultLocale |', window.navigator?.language);
    if (['ru', 'ua', 'by', 'kz'].includes(browserLocale.substring(0, 2))) {
        return 'ru';
    }
    return 'en';
}
