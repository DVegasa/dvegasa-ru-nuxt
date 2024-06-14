const setDefaultLanguage = `
<script type="text/javascript" >

    if (process.client) {
        const browserLocale = window?.navigator?.language ?? '';
        if (['ru', 'ua', 'by', 'kz'].includes(browserLocale.substring(0, 2))) {
            sessionStorage.setItem('lang', 'ru');
        }
        sessionStorage.setItem('lang', 'en');
    }

</script>
`

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        html.head.unshift(setDefaultLanguage)
    })
})
