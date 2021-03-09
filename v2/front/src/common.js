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