// React
import React, { Component } from 'react'

// React-Router
import { withRouter } from 'react-router-dom'

// Static & Assets
import ReactMarkdown from "react-markdown";
import './Skills.css';



class Skills extends Component {
    render() {
        return (
            <section className="skills-sect animate__animated animate__fadeIn">
                <h1 className="top-const-margin">Moje umiejętności</h1>

                <div className="gradient-line animate__animated animate__fadeIn"></div>
                <p id="skills_container">
                    {
                        this.props.content
                        ?
                        <ReactMarkdown source={this.props.content} />
                        :
                        <p>Brak treści.</p>
                    }
                </p>
                <ul className="skills-list">
                    {
                    this.props.skills
                    ?
                    this.props.skills.map(item => (
                            <li 
                                className="skills-list-elem"
                                key={item.id}>                                
                                <img
                                    className="skill-icon"
                                    src={item.icon.url} 
                                    alt="Ikona technologii.">
                                </img>
                                <h4 className="skill-label">{item.name}</h4>
                            </li>
                    ))
                    :
                    null
                }
                </ ul>
            </section>
        )
    }
}

export default withRouter(Skills);
