const cover = document.getElementById("reveal_element_top")
const portfolioSection = document.getElementById('portfolio')
const showWorksBtn = document.getElementById("myBtn")
const closePortfolioBtn = document.getElementById("closePortfolioBtn")
const portfolioVideo = document.getElementById("portfolioVideo")
const portfolioBlurCover = document.getElementById("portfolioVideoCover") 

async function enableCover()
{
    cover.style.display = 'block'
}

async function removeCoverFromLayout(delay)
{
    await new Promise(r => setTimeout(r, delay));
    cover.style.display = 'none'
}

function revealLayout()
{
    let animationDuration = 2500
    
    enableCover()

    cover.animate([
            { top: '-18rem', left: '-45rem', opacity: 1},
            { top: '-40rem', left: '-65rem', opacity: 0.7},
            { top: '-65rem', left: '-90rem', opacity: 0}
        ], {
        delay: animationDuration * 0.8,
        duration: animationDuration * 0.2
    })

    removeCoverFromLayout(animationDuration)
}

function revealElementWithDelay(id, _delay = 1500)
{
    const element = document.getElementById(id)

    element.animate([
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

function hideHomeView() 
{
    const element = document.getElementById('home_content')
    element.animate([
            {  marginLeft:      0, opacity: 1   },
            {  marginLeft: '1rem', opacity: 0.6 },    
            {  marginLeft: '3rem', opacity: 0.4 },
            {  marginLeft: '7rem', opacity: 0.1 },            
            {  marginLeft: '8rem', opacity: 0   }                    
        ], {        
        fill: 'forwards',
        delay: 200,
        duration: 600
    })
}

function revealHomeView() 
{
    const element = document.getElementById('home_content')
    element.animate([
            {  paddingLeft: '8rem', opacity: 0   },                    
            {  paddingLeft: '7rem', opacity: 0.1 },            
            {  paddingLeft: '3rem', opacity: 0.4 },
            {  paddingLeft: '1rem', opacity: 0.6 },    
            {  paddingLeft:      0, opacity: 1   }
        ], {        
        fill: 'forwards',
        delay: 200,
        duration: 600
    })
}

function revealPortfolioView()
{
    closePortfolioBtn.style.display = 'block'
    closePortfolioBtn.style.opacity = 1
    portfolioSection.animate([
            {  left: '60rem', opacity: 0 },            
            {  left: '-2rem', opacity: 1 }                    
        ], {        
        fill: 'forwards',
        duration: 700
    })
    portfolioVideo.style.left = '50rem'
    portfolioVideo.animate([
            {  opacity: 0 },          
            {  opacity: 1 }                    
        ], {        
        delay: 900,
        fill: 'forwards',
        duration: 2200
    })
    portfolioBlurCover.animate([
            {  opacity: 0 },          
            {  opacity: 1 }                    
        ], {        
        delay: 1800,
        fill: 'forwards',
        duration: 1200
    })
}

function hidePortfolioView()
{
    closePortfolioBtn.style.display = 'none'
    portfolioSection.animate([
            {  left: '-2rem', opacity: 1 },            
            {  left: '60rem', opacity: 0 }                                    
        ], {        
        fill: 'forwards',
        duration: 700
    })
    portfolioVideo.animate([
        {  left: '50rem', opacity: 0 },          
        {  left: '90rem', opacity: 1 }                    
    ], {        
    duration: 800
})
}


window.onload = () => {    
    revealLayout()
    revealElementWithDelay("header", 2000)
    revealElementWithDelay("homeParag", 2200)
    revealElementWithDelay("myBtn", 2800)

    showWorksBtn.addEventListener('click', event = () => {
        hideHomeView();
        revealPortfolioView();
    })

    closePortfolioBtn.addEventListener('click', event = () => {
        hidePortfolioView();
        revealHomeView();
    })
}

