import { SmoothScroll, registerSmothScrollEventListeners } from './SmoothScroll.js'
import { sleep } from './helpers.js'

// Object representing interface of Portfolio view

const viewRootElement = document.getElementById('portfolio')
const closeViewBtn = document.getElementById("closePortfolioBtn")
const skewedPortfolioBackground = document.getElementById("skewedPortfolioBackground")


const projectsUrls = [
    "https://static.pexels.com/lib/videos/free-videos.mp4",
    "https://vod-progressive.akamaized.net/exp=1619292896~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4552%2F19%2F497764426%2F2257380178.mp4~hmac=efac5d23bd0198a0ce5ad350c85302291aba23e1413c2d908294776f486e5627/vimeo-prod-skyfire-std-us/01/4552/19/497764426/2257380178.mp4?filename=pexels-roman-odintsov-6421804.mp4",
    "https://vod-progressive.akamaized.net/exp=1619292872~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2782%2F14%2F363914815%2F1498002325.mp4~hmac=f4f54bc26060da66e15e867b26f79d8ad3a69545b4e630523fe044649395959c/vimeo-prod-skyfire-std-us/01/2782/14/363914815/1498002325.mp4?filename=video.mp4",
    "https://vod-progressive.akamaized.net/exp=1619282041~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2466%2F13%2F337331520%2F1338193766.mp4~hmac=2954a3679af65051f875f456c035eaf8f99238473068a7a0e15ddbca5bd052e7/vimeo-prod-skyfire-std-us/01/2466/13/337331520/1338193766.mp4?filename=Pexels+Videos+2342562.mp4",    
]

function setupVideoPlayer(projectNumber = 0)
{
    // Construct html of video player and place it in video wrapper element
    const videPlayerWrapper = document.getElementById('projectVisualPreview')
    const videoHtml = `<video data-project="${projectNumber}" autoplay muted loop playsinline id="videoPreview" 
                        src="${projectsUrls[projectNumber]}" type="video/mp4"></video>`
    videPlayerWrapper.innerHTML = videoHtml
}

export const Portfolio = 
{      
    revealView : function ()
        {
            registerSmothScrollEventListeners()

            closeViewBtn.style.display = 'block'
            closeViewBtn.style.opacity = 1            

            viewRootElement.animate([
                    {  left: '60rem', opacity: 0 },            
                    {  left: '-2rem', opacity: 1 }                    
                ], {        
                fill: 'forwards',
                duration: 700
            })
            skewedPortfolioBackground.animate([
                    {  right: '-10rem', opacity: 0 },            
                    {  right: '18rem', opacity: 1 }                    
                ], {        
                fill: 'forwards',
                duration: 900
            })

            // setup video element with first link
            setupVideoPlayer()
        },
        
    hideView : function()
    {
        closeViewBtn.style.opacity = 0
        viewRootElement.animate([
                {  left: '-2rem', opacity: 1 },            
                {  left: '60rem', opacity: 0 }                                    
            ], {        
            fill: 'forwards',
            duration: 700
        })
        viewRootElement.animate([
                {  right: '18rem',  opacity: 1 },            
                {  right: '-10rem', opacity: 0 }                                    
            ], {        
            fill: 'forwards',
            duration: 700
        })

        SmoothScroll.scrollToTop()
    },

    changeVideoPreviewSource : function (projectNumber = 0) 
    {     
        let video = document.getElementById('videoPreview')
        
        /*
        console.log('odpalam')     
        
        video.style.opacity = 0
        video.animate(
            [ { opacity: 1 }, { opacity: 0 } ], 
            { duration: 1500, fill: 'forwards'}
        )        
        sleep(2000)
        */
        video.src = projectsUrls[parseInt(projectNumber)]    
        /*
        video.animate(
            [ { opacity: 0 }, { opacity: 1 } ], 
            { duration: 1500}
        )
        */
        video.play()
        video.dataset.project = projectNumber        
     }
}