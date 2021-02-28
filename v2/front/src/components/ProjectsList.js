import React from 'react'
import { StructuredText } from "react-datocms"
import ProjectDetails from './ProjectDetails'
import { loader } from '../common'


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
                        <ul className="projects-list-ul">
                            {this.props._projects.map(project => (
                                <li 
                                    id={project.id}
                                    className="project-list-element"
                                    onClick={() => this.handleProjectClick(project.id)}
                                    key={`project_${project.id}`}>
    
    
                                    
                                    <h2>{project.title}</h2>
                                    <p>
                                        {project.stack && project.stack.length ?
                                        project.stack.map(skill => ( skill.name + " " )) 
                                        : null}
                                    </p>                                   
    
                                </li>
                            ))}
                        </ul>
                    </div> : loader}
            </section>
        )
    }    
}
