import { Home } from './Home.js'
import { Portfolio } from './Portfolio.js'
import { PageCover } from './PageCover.js'
import { LazyLoader } from './LazyLoader.js'

const showWorksBtn = document.getElementById("myBtn")
const closePortfolioBtn = document.getElementById("closePortfolioBtn")

window.onload = () => {    
    LazyLoader.addVideoLazyLoader()    
    PageCover.hide()
    Home.revealView({ delay : PageCover.revealingAnimationDuration - 200 })   

    showWorksBtn.addEventListener('click', event => {
        Home.hideView()
        Portfolio.revealView()
    })

    closePortfolioBtn.addEventListener('click', event => {        
        Portfolio.hideView()
        Home.revealView()        
    })
}

