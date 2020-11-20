import React from 'react'

// Styles & assets
import './Footer.css';
import {
    GithubIcon,
    LinkedInIcon
} from './components/assets';


export default function Footer() {
    return (
        <footer className="footer-bar animate__animated animate__fadeIn">
            <div className="footer-links-wrapper">
            <a 
                className="footer-link"
                href="https://github.com/michalmytych" 
                target="_blank"
                rel="noopener noreferrer">
                <img className="github_icon" src={GithubIcon} alt="Ikona Github."></img>
            </a>
            <a 
                className="footer-link"
                href="https://www.linkedin.com/in/micha%C5%82-mytych-16b1431a5/" 
                target="_blank"
                rel="noopener noreferrer">
                <img className="linked_icon" src={LinkedInIcon} alt="Ikona Linked-In."></img>
            </a>
            </div>
      </footer>
    )
}
