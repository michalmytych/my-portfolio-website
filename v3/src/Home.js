import { hideElementWithDelay, revealElementWithDelay } from './helpers.js'

export const Home = 
{
    hideView : function(args = {})     
    {   
        let defaultDelay = args.delay ?? 0
        
        hideElementWithDelay({id: "header", delay: defaultDelay})
        hideElementWithDelay({id: "homeParag", delay: 200 + defaultDelay})
        hideElementWithDelay({id: "myBtn", delay: 400 + defaultDelay})
        hideElementWithDelay({id: "socialLinks", delay: 600 + defaultDelay})
    },

    revealView : function(args = {}) 
    {
        let defaultDelay = args.delay ?? 0

        revealElementWithDelay({id: "header", delay: defaultDelay})
        revealElementWithDelay({id: "homeParag", delay: 200 + defaultDelay})
        revealElementWithDelay({id: "myBtn", delay: 500 + defaultDelay})    
        revealElementWithDelay({id: "socialLinks", delay: 900 + defaultDelay})     
    }
}