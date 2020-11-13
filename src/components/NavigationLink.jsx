// React
import React from 'react'
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

// Static & assets
import './NavigationLink.css';


const NavigationLink = (props) => {
    return (
        <li 
            className="nav-list-el">
                <NavLink 
                    className="nav-link" 
                    to={props.go_to}>
                    {props.title}
                </NavLink>
        </li>
    )
}

export default withRouter(NavigationLink);