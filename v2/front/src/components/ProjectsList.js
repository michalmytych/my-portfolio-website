import React from 'react'
import ReactMarkdown from 'react-markdown'
import { loader } from '../common'


export default function ProjectsList(props) {
    return (
        <section>
            { props._content ?
            <ReactMarkdown>
                {props._content}                
            </ReactMarkdown>            
            : loader }            
            {
                props._projects && props._projects.length ? 
                <div>                    
                    <ul>
                        {props._projects.map(project => (
                            <li key={`project_${project.id}`}>
                                <h2>{project.title}</h2>
                                <div>{project.stack}</div>
                            </li>
                        ))}
                    </ul>
                </div> : loader                
            }
        </section>
    )
}
