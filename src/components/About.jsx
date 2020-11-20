// React
import React, { Component } from 'react';

// React-Router
import { withRouter } from "react-router-dom";

// Static & Assets
import ReactMarkdown from "react-markdown";
import './About.css';



class About extends Component {
    render() {
        return (
            <section className="about-sect animate__animated animate__fadeIn">
                <h1 className="top-const-margin">Coś o mnie</h1>

                <div className="gradient-line animate__animated animate__fadeIn"></div>

                <p id="about_container">
                    {
                        this.props.content
                        ?
                        <ReactMarkdown source={this.props.content} />
                        :
                        <span style={{textAlign: 'center'}}>Brak treści.</span>
                    }                    
                </p>
            </section>
        )
    }
}

export default withRouter(About);
