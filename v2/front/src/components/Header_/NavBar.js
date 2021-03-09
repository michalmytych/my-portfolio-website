import React from 'react'
import { NavLink, withRouter } from "react-router-dom"
import { transitRouteAnimation } from '../../common'
import './NavBar.css'


function NavBar(props) {
    var startLinkText = "Główna"
    var portfolioLinkText = "Portfolio"
    var aboutLinkText = "O mnie"
    var contactLinkText = "Kontakt"

    if (props._lang === "ENG") {
        startLinkText = "Home"
        aboutLinkText = "About me"
        contactLinkText = "Contact"
    }
    
    return (
        <nav>
            <div className="nav-link-wrapper">
                <NavLink 
                    to="/home" 
                    onClick={transitRouteAnimation} 
                    className="navLink" activeClassName="active-nav-link">
                    {startLinkText}
                </NavLink>            
                <div className="widening-bottom-border"></div>
            </div>
            <div className="nav-link-wrapper">
                <NavLink 
                    to="/portfolio" 
                    onClick={transitRouteAnimation}
                    className="navLink" activeClassName="active-nav-link">
                    {portfolioLinkText}
                </NavLink> 
                <div className="widening-bottom-border"></div>
            </div>
            <div className="nav-link-wrapper">
                <NavLink 
                    to="/about" 
                    onClick={transitRouteAnimation}
                    className="navLink" activeClassName="active-nav-link">
                    {aboutLinkText}
                </NavLink>
                <div className="widening-bottom-border"></div>
            </div>
            <div className="nav-link-wrapper">
                <NavLink 
                    to="/contact" 
                    onClick={transitRouteAnimation}
                    className="navLink" activeClassName="active-nav-link">
                    {contactLinkText}
                </NavLink>
                <div className="widening-bottom-border"></div>
            </div>
        </nav>
    )
}

const NavBarRouter = withRouter(NavBar)
export default NavBarRouter