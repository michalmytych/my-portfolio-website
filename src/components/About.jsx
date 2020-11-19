// React
import React, { Component } from 'react';

// React-Router
import { withRouter } from "react-router-dom";

// Static & Assets
import ReactMarkdown from "react-markdown";
import './About.css';



class About extends Component {
    state = {
        epi_link: "https://sylabus.uj.edu.pl/pl/2/1/2/4/126"
    }

    render() {
        return (
            <section className="about-sect animate__animated animate__fadeIn">
                <button 
                className="back-btn"
                onClick={() => (this.props.history.push("/"))}>
                    Wróć
                </button>

                <h1>Coś o mnie</h1>

                <div className="gradient-line animate__animated animate__fadeIn"></div>

                <p id="about_container">
                    <ReactMarkdown source={this.props.content} />
                </p>
            </section>
        )
    }
}

export default withRouter(About);
