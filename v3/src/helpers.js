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


/*
export function revealElementWithDelay(id, _delay = 1500)
{
    document.getElementById(id).animate([
            {  marginLeft: '8rem', opacity: 0   },
            {  marginLeft: '7rem', opacity: 0.1 },
            {  marginLeft: '3rem', opacity: 0.4 },
            {  marginLeft: '1rem', opacity: 0.6 },
            {  marginLeft:      0, opacity: 1   }
        ], {        
        fill: 'forwards',
        delay: _delay,
        duration: 600
    })
}
*/