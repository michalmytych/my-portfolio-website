import React from 'react'
import { StructuredText } from "react-datocms"
import ProjectDetails from './ProjectDetails'
import { loader } from '../../common'


export default class ProjectsList extends React.Component {
    constructor() {
        super();
        this.state = {
            displayProjectDetails : false,
            displayedProjectId    : null
        }
        this.handleProjectClick = this.handleProjectClick.bind(this);
        this._hideDetailsView = this._hideDetailsView.bind(this);
    }

    _hideDetailsView() {
        this.setState({
            displayProjectDetails : false,
            displayedProjectId    : null
        })
    }

    async handleProjectClick(id) {
        this.setState({
            displayProjectDetails : true,
            displayedProjectId    : id
        })
    }
    
    render() {
        return (
            <section>
                {this.state.displayProjectDetails ?
                <ProjectDetails 
                    hideDetailsView={this._hideDetailsView}
                    projectId={this.state.displayedProjectId}
                    _lang={this.props._lang}
                /> 
                : null}                

                {this.props._content ?                                    
                <StructuredText data={this.props._content}/>            
                : loader }            

                {this.props._projects && this.props._projects.length ? 
                    <div>                    
                        <ul>
                            {this.props._projects.map(project => (
                                <li 
                                    id={project.id}
                                    onClick={() => this.handleProjectClick(project.id)}
                                    key={`project_${project.id}`}>
                                    {project.thumbnail ?                                     
                                    <div>
                                        <img 
                                            src={project.thumbnail.url} 
                                            alt={project.thumbnail.alt}></img>                                    
                                        <h3>{project.title}</h3>
                                        <p>
                                            {project.stack && project.stack.length ?
                                            project.stack.map(skill => ( skill.name + " " )) : null}
                                        </p>
                                    </div> : null}
                                </li>
                            ))}
                        </ul>
                    </div> : loader}
            </section>
        )
    }    
}
