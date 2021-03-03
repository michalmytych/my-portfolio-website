async function revealPage() { 
    $('#page_loading_cover')
    .delay(1200)
    .animate({
        top: '-=140vh',
    }, { duration: 800})
    //.css('display', 'none')

    $('#loader')
    .delay(800)
    .animate({
        opacity: '-=1',
    }, { duration: 800})
    //.css('display', 'none')
}

window.onload = function() {
    revealPage().then( () => { $('#page_loading_cover', '#loader').css('display', 'none'); }) 
}