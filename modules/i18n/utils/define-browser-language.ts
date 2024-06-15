import {Locales} from "~/modules/i18n/enums";

function defineBrowserLanguage(): Partial<Locales, Locales.auto> {
    try {
        const browserLocale = window?.navigator?.language ?? 'en';
        if (['ru', 'ua', 'by', 'kz'].includes(browserLocale.substring(0, 2))) {
            return Locales.ru;
        } else {
            return Locales.en;
        }
    } catch (e) {
        return Locales.ru;
    }
}
