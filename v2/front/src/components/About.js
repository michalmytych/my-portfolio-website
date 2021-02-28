import React from 'react'
import { StructuredText } from "react-datocms"
import { loader } from '../common'


export default function About(props) {
    console.log(props._skills)
    
    return (
        <section>
            {props._content ?
            <StructuredText data={props._content}/>                            
            : loader}
            {
                props._skills ?
                    props._skills.length ?
                    <div>                    
                        <ul>
                            {props._skills.map(skill => (
                                <li key={`skill_${skill.name}`}>
                                    {skill.name} <small>{skill.count}</small>
                                </li>
                            ))}
                        </ul>
                    </div> : null
                : loader
            }
        </section>
    )
}
