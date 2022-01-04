if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register( new URL('sw.js', import.meta.url)).then((registration) => {
            console.log('success:', registration.scope)
        }, (err) => {
            console.error('STH went wrong', err)
        })
    })
}
