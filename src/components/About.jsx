// React
import React, { Component } from 'react';

// React-Router
import { withRouter } from "react-router-dom";

// Static & Assets
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
                    Studiuję <a className="epi-link" href={this.state.epi_link} target="_blank" rel="noopener noreferrer">Elektroniczne Przetwarzanie Informacji</a> na Uniwersytecie Jagiellońskim w Krakowie. 
                    Na początku studiów programowanie stało się jedną z moich najsilniejszych zajawek. Rozwijam się w
                    tym zakresie bezustannie, zarówno poprzez realizowanie programu studiów, jak i na własną rękę.
                    Spośród wszystkich dziedzin programowania najbardziej zainteresowałem się Pythonem i programowaniem
                    backendowych aplikacji webowych, nie są mi jednak obce i technologie frontendowe.
                    Mam ambicje i lubię uczyć się nowych rzeczy. Z chęcią podejmę się nowych wyzwań w branży IT.
                </p>
            </section>
        )
    }
}

export default withRouter(About);
