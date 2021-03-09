import React from 'react'
import { StructuredText } from "react-datocms"
import { useSpring, animated } from 'react-spring'
import { loader } from '../../common'
import './Contact.css'


export default function Contact(props) {
    const a_fadeInContactHeader = useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        delay: 1400,
        config: { duration: 1500 }}
    )

    const a_fadeInAboutText = useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        delay: 1500,
        config: { duration: 1500 }}
    )

    
    return (
        <section id="Contact">
            <animated.div style={a_fadeInContactHeader}>
                <h2>Kontakt</h2>
            </animated.div>            
            {props._content ? 
            <animated.div style={a_fadeInAboutText}>
                <div className="struct-text"><StructuredText data={props._content} /></div>
            </animated.div>
            : loader}
        </section>
    )
}
