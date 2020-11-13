// React
import React, { Component } from 'react';

// React-Router
import { withRouter } from 'react-router-dom';

// Static & Assets
import './ProjectDisplay.css';
import { GithubIcon } from './assets';

// Components
import NotFound from './NotFound';


class ProjectDisplay extends Component {
    state = {
       project: {}
    };

    componentDidMount() {
        let projects = this.props.projects;
        let projectId = parseInt(this.props.match.params.projectId);
        let PROJECT = projects.filter(
            function(proj) {
                return (proj.id === projectId)
            }
        )
        this.setState({
            project: PROJECT[0]
        })
    }

    render() {
        return (
            <section className="proj-sect animate__animated animate__fadeIn">
                <button 
                    className="back-btn"
                    onClick={() => (this.props.history.push("/portfolio"))}>
                    Wróć
                </button>
                <div className="gradient-line"></div>
                {this.state.project ?
                <div className="proj-container">
                    <div className="proj-illustr-wrap">
                        <img 
                            className="proj-img"
                            src={this.state.project.image} 
                            alt={"Illustracja projektu."}>
                        </img>
                    </div>
                    <div className="proj-decrpt-wrap">
                        <h2>{this.state.project.title}</h2>
                        <p className="proj-decrpt">
                            {this.state.project.description}
                        </p>
                        <h4 className="skills-list-label">Wykorzystane technologie:</h4>
                        <p className="stack-list">
                            {this.state.project.stack}
                        </p>
                        <figure className="github-link-figure">
                            <a href={this.state.project.github}>
                                <img 
                                    className="smaller-github-ico" 
                                    src={GithubIcon} 
                                    alt="Illustracja projektu."></img>Zobacz kod</a>
                        </figure>
                    </div>
                </div>
                :
                <NotFound />
                }   
            </section>
        )
    }
}

export default withRouter(ProjectDisplay);