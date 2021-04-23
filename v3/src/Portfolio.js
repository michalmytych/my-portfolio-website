// Object representing interface of Portfolio view

import { sleep } from "./helpers"

const viewRootElement = document.getElementById('portfolio')
const closeViewBtn = document.getElementById("closePortfolioBtn")
const skewedPortfolioBackground = document.getElementById("skewedPortfolioBackground")


export const Portfolio = 
{      
    revealView : function ()
        {
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
    }
}