// React
import React, { Component } from 'react'

// React-Router
import { withRouter } from 'react-router-dom';

// Static & Assets
import './Home.css';



class Home extends Component {
    render() {
        return (
            <section className="home-sect">
                <p className="dev-name animate__animated animate__fadeInDown">Michał Mytych</p>
                <div className="gradient-line animate__animated animate"></div>
                <h1 className="biggest-header animate__animated animate">Web Developer</h1>
                <p className="guide-text animate__animated animate__fadeInUp">
                    Dowiedz się czegoś <button className="guide-btn" onClick={() => (this.props.history.push("/about"))}>o mnie</button> lub
                    zobacz <button className="guide-btn" onClick={() => (this.props.history.push("/portfolio"))}>moje prace.</button>
                </p>
            </section>
        )
    }
}

export default withRouter(Home);
