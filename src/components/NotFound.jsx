// React
import React from 'react'

// Static & assets
import './NotFound.css';
import { not_found_icon } from './assets';


export default function NotFound() {
    return (
        <section className="not-found-sect">
            <h1 className="err-404-header">
                404 Not Found
            </h1>
            <p className="err-404-parag">
                Niestety nie ma takiego zasobu.
            </p>
            <img 
                className="err-404-icon"
                src={not_found_icon}
                alt='Ikona "nie znaleziono".'>
            </img>
        </section>
    )
}
