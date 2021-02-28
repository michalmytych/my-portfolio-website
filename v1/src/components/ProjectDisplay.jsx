// React
import React, { Component } from 'react';

// React-Router
import { withRouter } from 'react-router-dom';

// Static & Assets
import './ProjectDisplay.css';
import { GithubIcon } from './assets';

// Components
import NotFound from './NotFound';

// DatoCMS GraphQL requests
import queries from '../queries';
import requests from '../requests';


class ProjectDisplay extends Component {
    state = {
       project: {},
       image_url: ""
    };

    async componentDidMount() {
        const id = parseInt(this.props.match.params.projectId);
        let result = await requests.doQuery(queries.getProjectInstanceQuery(id));
        if (result.data) {
            this.setState({ 
                project: result.data.project,
                image_url: result.data.project.image.url
            });
        }
    }

    render() {
        return (
            <section className="proj-sect animate__animated animate__fadeIn">
                <div className="gradient-line"></div>
                {this.state.project ?
                <div className="proj-container">
                    <div className="proj-illustr-wrap">
                    {
                        this.state.image_url ?                    
                    <img 
                        className="proj-img"
                        src={this.state.image_url} 
                        alt={"Illustracja projektu."}>
                    </img>
                    :
                    <p><em>Brak illustracji</em></p>
                    }
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