/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

    mql = window.matchMedia(mediaQueryString)

    mediaQueryString es cualquier media query válida en CSS
*/

const applyMatchMedia = mql => {
    mql.matches ?
        //NO HACER ESTO NUNCA :)
        document.body.style.backgroundColor = 'red'
        :
        //NO HACER ESTO NUNCA :)
        document.body.style.backgroundColor = 'royalblue'
}

mql = matchMedia('(min-width:800px)')

addEventListener('resize', (e) => {
    // if (innerWidth == '800') console.log(innerWidth)
    applyMatchMedia(mql)
})

applyMatchMedia(mql)