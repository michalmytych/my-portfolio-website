import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { transitRouteAnimation } from '../../common'
import './Home.css'


function Home() {
    const a_fadeInHomeSection = useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        delay: 1000,
        config: { duration: 1700 }}
    )
    
    const a_fadeInHomeCapt= useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        delay: 1200,
        config: { duration: 1700 }}
    )

    const a_fadeInHomeBtn= useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        delay: 1500,
        config: { duration: 1700 }}
    )

    return (
        <div id="Home">
            <animated.div style={a_fadeInHomeSection}>
                <Link to={'/home'}>
                    <h1>Http Mike Dev</h1>
                </Link>
            </animated.div>   
            <animated.div style={a_fadeInHomeCapt}>
                <h3>It is a long established fact that a reader will be 
                    distracted by the readable content of a page when looking at its layout. </h3>                
            </animated.div>     
            <animated.div style={a_fadeInHomeBtn}>
                <Link to={'/portfolio'}>
                    <div
                        onClick={transitRouteAnimation}  
                        id="seeWorksBtn">Zobacz moje prace</div>
                </Link>
            </animated.div>                                
        </div>
    )
}

const HomeRouter = withRouter(Home)
export default HomeRouter