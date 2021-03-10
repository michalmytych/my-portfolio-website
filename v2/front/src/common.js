import { $ }  from 'react-jquery-plugin'
import loadingIcon from './assets/icons/loader.svg'

export const loader = <div className="loader"><img alt="Ikona ładowania" src={loadingIcon}></img></div>


export const limitTextLenght = (text, limit) => {
    if (!text || typeof text !== 'string' || typeof limit !== 'number') return
    if (text.length > limit) return text.slice(0, limit) + '...'
    return text
}

export const transitRouteAnimation = () => {    
    $('#pageCoverLoader')    
    .animate({
        top: "+=140vh",
    }, {
        duration: 300,
        easing: 'swing'
    })
    .delay(600)
    .animate({
        top: "-=140vh",
    }, {
        duration: 500,
        easing: 'swing'
    })
}

export const fadeInProjectDetails = (reverse = false) => {    
    let detailsWrapperOpacity = "+=1"
    let detailsWrapperRight = "0vw"
    let projectDetailsOpacity = "+=1"

    if (reverse) {
        detailsWrapperOpacity = "-=1"
        detailsWrapperRight = "-60vw"
        projectDetailsOpacity = "-=1"
    }

    $('.ProjectDetails')    
    .animate({
        opacity: projectDetailsOpacity,
    }, {
        duration: 1000,
        easing: 'swing'
    })   
    
    $('.detailsWrapper')
    .animate({
        opacity: detailsWrapperOpacity,
        right: detailsWrapperRight,
    }, {
        duration: 1000,
        easing: 'swing'
    })  
}