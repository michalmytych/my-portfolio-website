const pochylony = document.getElementById('pochylony');
const aboutBgCover = document.getElementById('about_bg_cover');
const navLinks = document.querySelectorAll('.nav-link');


window.onload = function() {
    $("#about_bg_cover")
    .css('display', 'block')
    .animate({
        opacity: '+=1',
    }, {
        delay: 600,
        duration: 1200,
        easing: 'swing'
    })

    $("#pochylony")
    .css('display', 'block')
    .animate({    
        opacity: '+=1',
        left: '-=80vw'
    }, {
        delay: 600,
        duration: 1200
    })


    navLinks.forEach(link => link.addEventListener('click', e => {
        
        $("#about_bg_cover").animate({
            opacity: '-=1',
        }, {
            duration: 600,
            easing: 'swing'
        })
        .css('display', 'none')

        $("#pochylony")
        .animate({    
            opacity: '-=1',
            left: '+=80vw'
        }, {
            duration: 800,
        })
        .css('display', 'none')
    }))
}