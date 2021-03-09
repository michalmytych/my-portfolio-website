import React, { Fragment, useState, useEffect } from 'react'
import { StructuredText } from "react-datocms"
import { loader } from '../../common'
import { formatISODateToLang } from '../../utils'
import * as services from '../../services'
import * as queries from '../../queries'
import './ProjectDetails.css'


export default function ProjectDetails(props) {    
    const [project, setProject] = useState(null)
    
    useEffect(() => {
        if (!props.projectId || project) return
        services.doQuery(queries.getProjectInstance(props._lang, props.projectId))
        .then(res => {
            if (!res.data || !res.data.project) console.error(`Project details: Bad data recieved`)
            setProject(res.data.project)
        })
    })
    
    return (
        <div className="ProjectDetails">
            <div class="bg-content-cover"></div>
            <div className="detailsWrapper">
                <div id="cross"></div>    
                <div 
                    onClick={props.hideDetailsView}>                
                </div>
                <div>
                    {<div>
                        <div onClick={props.hideDetailsView}></div>
                        {project ?
                            <Fragment>
                                {project.title ? <h2>{project.title}</h2> : null}     
                                <div className="header-underLine"></div>            
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
            </div>
        </div>
    )
}
