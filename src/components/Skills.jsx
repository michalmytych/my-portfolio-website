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
                <button 
                className="back-btn"
                onClick={() => (this.props.history.push("/"))}>
                    Wróć
                </button>

                <h1>Moje umiejętności</h1>

                <div className="gradient-line animate__animated animate__fadeIn"></div>
                <p id="skills_container">
                    <ReactMarkdown source={this.props.content} />
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
