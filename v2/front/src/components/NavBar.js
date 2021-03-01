import React from 'react'
import { NavLink, withRouter } from "react-router-dom";


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
            <NavLink to="/home" activeClassName="active-nav-link">
                {startLinkText}
            </NavLink>            
            <NavLink to="/portfolio" activeClassName="active-nav-link">
                {portfolioLinkText}
            </NavLink> 
            <NavLink to="/about" activeClassName="active-nav-link">
                {aboutLinkText}
            </NavLink>
            <NavLink to="/contact" activeClassName="active-nav-link">
                {contactLinkText}
            </NavLink>
        </nav>
    )
}

const NavBarRouter = withRouter(NavBar)
export default NavBarRouter