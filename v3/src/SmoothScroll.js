import { Portfolio } from './Portfolio'
import { onScrollStop } from './helpers.js'

const projectsList = document.getElementById('projectsList')
const navDots = document.querySelectorAll("[id^=nav_dot_]")


export const SmoothScroll = 
{
  dotClickHandler : function(e) 
  {
    e.preventDefault()    
    const projectElementHeight = projectsList.children[0].offsetHeight    

    // Reset color of all dots and set color of one (which was triggered) as white
    navDots.forEach(nd => { nd.style.backgroundColor = "rgba(255, 255, 255, 0.3)" })
    e.srcElement.style.backgroundColor = "white"
    
    // Get right project and scroll on calculated height of projectsList    
    let projectNumber = parseInt(e.srcElement.dataset.project)
    projectsList.scrollTo({top: projectNumber * projectElementHeight, behavior: "smooth"})

    // Fire change of videPreview src with projectNumber param 
    Portfolio.changeVideoPreviewSource(projectNumber)
  },

  scrollToTop : function()
  {
    // Reset position of scrolled list (fired at Portfolio view unmounting)
    projectsList.scrollTo({top: 0, behavior: "smooth"})
  }
}

export async function registerSmothScrollEventListeners()
{
    const projectElementHeight = projectsList.children[0].offsetHeight
    const firstDot = document.getElementById('nav_dot_1')
    
    // Set color of first dot as white (when Portfolio view mounts)
    firstDot.style.backgroundColor = "white"

    // Add click event handlers to navDots, also add scroll listeners to projectsList
    for (const dot of navDots) {
        dot.addEventListener("click", SmoothScroll.dotClickHandler)
    }
        
    projectsList.addEventListener('scroll', event => {      
      let projectNumber = projectsList.scrollTop / projectElementHeight            
      projectNumber = Math.round(projectNumber + 0.8)

      // Set color of all navDots as grey
      navDots.forEach(nd => {
        nd.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
      })            

      // When scrolling stops, change src attribute on 
      // videoPreview at Portfolio view
      onScrollStop(
        Portfolio.changeVideoPreviewSource(projectNumber)
      )      

      // Set color of navDot corresponding to viewed project as white            
      document.getElementById(`nav_dot_${projectNumber}`).style.backgroundColor = 'white'
    })
}