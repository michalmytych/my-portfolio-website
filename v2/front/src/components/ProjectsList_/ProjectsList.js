import React from 'react'
import { useSpring, animated } from 'react-spring'
import { StructuredText } from "react-datocms"
import ProjectDetails from './ProjectDetails'
import { limitTextLenght, loader } from '../../common'
import './ProjectsList.css'


const ProjectCard = (props) => {    
    let addedDelay = 200 * props._index
    
    const a_fadeInProjectsList = useSpring({
        opacity: 1, 
        from: { opacity: 0 }, 
        // Increase animation delay according to the index of the card
        delay: 1200 + addedDelay,
        config: { duration: 1500 }}
    )

    return (
        <animated.div style={a_fadeInProjectsList}>
            <li className="project-list-element"
                id={props._project.id}
                onClick={() => props._handleProjectClick(props._project.id)}
                key={`project_${props._project.id}`}>
                {props._project.thumbnail ?                                     
                <div className="grid-stack">
                    <img 
                        src={props._project.thumbnail.url}
                        alt={props._project.thumbnail.alt}></img>       
                    <div className="project-info">
                        <h3>{limitTextLenght(props._project.title, 16)}</h3>
                        <div className="header-underLine"></div>
                        <p className="stackList">
                            {props._project.stack && props._project.stack.length ?
                            props._project.stack.map(skill => ( skill.name + " " )) : null}
                        </p>
                    </div>                             
                </div> : null}
            </li>          
        </animated.div>
    )
}


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
                <div className="struct-text"><StructuredText data={this.props._content}/></div>
                : loader }            

                {
                    this.props._projects && this.props._projects.length ? 
                    <ul className="grid-container">
                        {this.props._projects.map( (project, index) => (
                        <ProjectCard
                            _index={index}
                            _project={project}
                            _handleProjectClick={this.handleProjectClick}
                        />))}
                    </ul>  : loader
                }
            </section>
        )
    }    
}
