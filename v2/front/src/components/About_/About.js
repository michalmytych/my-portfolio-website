import React, { useEffect } from 'react'
import { StructuredText } from "react-datocms"
import { useSpring, animated } from 'react-spring'
import { loader } from '../../common'
import './About.css'


export default function About(props) {    
    const a_fadeInAboutHeader = useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        delay: 1400,
        config: { duration: 1500 }
    })

    const a_fadeInAboutText = useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        delay: 1500,
        config: { duration: 1500 }
    })

    const a_fadeInAboutSkills = useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        delay: 1700,
        config: { duration: 1500 }
    })

    useEffect(() => {
        document.title = `HttpMike Dev - About`

        const __skillsList = document.getElementById("__skillsList")
        let i = 0
        if (!__skillsList) return
        let len = __skillsList.childElementCount
        let _len = len
        for (i=0;i<len;i++) {
            let d = document.querySelector(`#__skillsList li:nth-child(${i+1})`)
            if (!d) return
            _len=_len-1
            d.style.transform = `scale(${0.5+(_len)*0.1})`
            d.style.backgroundColor = `rgba(0, 0, 0, ${1-0.18*i})`
            //d.style.backgroundColor = `rgb(${25*i+1}, ${25*i+15}, ${25*i+49})`
        }
    });

    return (
        <section id="About">
            <animated.div style={a_fadeInAboutHeader}>
                <h2>O mnie</h2>
            </animated.div>            
            
            <div className="about-wrapper">
                {props._content ?
                <animated.div 
                    style={a_fadeInAboutText}
                    className="struct-text">
                        <StructuredText data={props._content}/>
                </animated.div>
                : loader}
                {
                    props._skills ?
                        props._skills.length ?
                        <animated.div style={a_fadeInAboutSkills}>
                            <div id="skillsList">                    
                                <ul id="__skillsList">
                                    {props._skills.map(skill => (
                                        <li className="skill"
                                            key={`skill_${skill.name}`}>
                                            {skill.name} <div className="skill-count">{skill.count}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </animated.div>  : null
                    : loader
                }
            </div>
        </section>
    )
}
