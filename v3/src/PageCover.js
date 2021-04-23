const coverElement = document.getElementById("reveal_element_top")
const revealingAnimationDuration = 2500

export const PageCover = 
{    
    revealingAnimationDuration : revealingAnimationDuration,
    
    hide : async function() 
    {
        coverElement.style.display = 'block'
        coverElement.animate([
                { top: '-18rem', left: '-45rem', opacity: 1},
                { top: '-40rem', left: '-65rem', opacity: 0.7},
                { top: '-65rem', left: '-90rem', opacity: 0}
            ], {
                delay: revealingAnimationDuration * 0.8,
                duration: revealingAnimationDuration * 0.2
        })
        await new Promise(r => setTimeout(r, revealingAnimationDuration))
        coverElement.style.display = 'none'
    }
}