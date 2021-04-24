export async function sleep(duration)
{
    await new Promise(r => setTimeout(r, duration));
}

export function hideElementWithDelay(args)
{
    if (!args.id) { 
        console.error('at hideElementWithDelay() : id of element to hide not provided')
        return
    }
    document.getElementById(args.id).animate([
            {  marginLeft:      0, opacity: 1   },
            {  marginLeft: '1rem', opacity: 0.6 },
            {  marginLeft: '3rem', opacity: 0.4 },
            {  marginLeft: '7rem', opacity: 0.1 },
            {  marginLeft: '8rem', opacity: 0   }
        ], {        
        fill: 'forwards',
        delay: args.delay ?? 100,
        duration: args.duration ?? 600
    })
}

export function revealElementWithDelay(args)
{
    if (!args.id) { 
        console.error('at revealElementWithDelay() : id of element to reveal not provided')
        return
    }
    document.getElementById(args.id).animate([
            {  marginLeft: '8rem', opacity: 0   },
            {  marginLeft: '7rem', opacity: 0.1 },
            {  marginLeft: '3rem', opacity: 0.4 },
            {  marginLeft: '1rem', opacity: 0.6 },
            {  marginLeft:      0, opacity: 1   }
        ], {        
        fill: 'forwards',
        delay: args.delay,
        duration: args.duration ?? 600
    })
}


export function roundedToFixed(_float, _digits = 1){
    /**
     *      "If you use Math.round(5.01) you will get 5 instead of 5.0.
     *      If you use toFixed you run into rounding issues.
     *      If you want the best of both worlds combine the two"
     *                     SO user Jasper de Vries , Oct 2 '12 at 21:04 :D
     */
    var rounded = Math.pow(10, _digits);
    return (Math.round(_float * rounded) / rounded).toFixed(_digits);
}


/** 
 * @param function callback 
 */
export function onScrollStop(callback) {
    var isScrolling;

    window.addEventListener('scroll', function ( event ) {
        window.clearTimeout( isScrolling );
        isScrolling = setTimeout(function() {
            callback()
        }, 66);
    }, false);
}
