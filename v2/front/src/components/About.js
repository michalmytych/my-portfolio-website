import React from 'react'
import ReactMarkdown from 'react-markdown'
import { loader } from '../common'


export default function About(props) {
    return (
        <section>
            {props._content ?
            <ReactMarkdown>
                {props._content}
            </ReactMarkdown>
            : loader}
            {
                props._skills && props._skills.length ?
                <div>                    
                    <ul>
                        {props._skills.map(skill => (
                            <li key={`skill_${skill.id}`}>{skill.name}</li>
                        ))}
                    </ul>
                </div> : loader
            }
        </section>
    )
}
