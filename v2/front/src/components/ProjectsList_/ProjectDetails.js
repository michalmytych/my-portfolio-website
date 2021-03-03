import React, { Fragment, useState, useEffect } from 'react'
import { StructuredText } from "react-datocms"
import { loader } from '../../common'
import { formatISODateToLang } from '../../utils'
import * as services from '../../services'
import * as queries from '../../queries'


export default function ProjectDetails(props) {    
    const [project, setProject] = useState(null);
    
    useEffect(() => {
        if (!props.projectId || project) return
        services.doQuery(queries.getProjectInstance(props._lang, props.projectId))
        .then(p => {
            if (!p.data || !p.data.project) console.error(`Project details: Bad data recieved`)
            setProject(p.data.project)
        })
    })
    
    return (
        <Fragment>
            <div 
                onClick={props.hideDetailsView}>                
            </div>
            <div>
                {<div>
                    <div onClick={props.hideDetailsView}></div>
                    {project ?
                        <Fragment>
                            {project.title ? <h2>{project.title}</h2> : null}                 
                            {project.createdAt ? 
                            <em>{formatISODateToLang(project.createdAt, props._lang)}</em> : null}
                            {project.description ? 
                                <StructuredText data={project.description}/>
                             : null}
                            <p>
                                {project.stack && project.stack.length ?
                                project.stack.map(skill => ( skill.name + " " )) 
                                : null}
                            </p>
                            {project.image ?
                            <img alt={project.image.alt} src={project.image.url}></img>
                            : loader}                            
                        </Fragment>
                    : loader}
                </div>}            
            </div>
        </Fragment>
    )
}
