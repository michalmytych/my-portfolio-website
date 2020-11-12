// React
import React, { Component } from 'react'

// React-Router
import { Switch, Link, Route, withRouter } from 'react-router-dom';

// Static & Assets
import './Portfolio.css';
import { box_icon
} from './assets';


class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio-sect animate__animated animate__fadeIn">
                <button 
                className="back-btn"
                onClick={() => (this.props.history.push("/"))}>
                    Wróć
                </button>

                <Switch>
                    <Route>
                        <div className="gradient-line animate__animated animate__fadeIn"></div>
                      
                        <ul className="portfolio-list">
                            {this.props.projects.map(item => (
                                <li className="portfolio-list-li">
                                    <Link
                                        key={item.id} 
                                        to={`/portfolio/project=${item.id}`}>
                                        <div className="short-descrpt">
                                            <div className="proj-title-short">
                                                <img 
                                                    className="box-icon"
                                                    src={box_icon}>                                                    
                                                </img>
                                                {item.title}
                                            </div>
                                            <p className="stack-short-enum">{item.stack}</p>
                                        </div>
                                        <img
                                            className="proj-img-ill" 
                                            src={item.image} 
                                            alt="Mini illustracja projektu.">
                                        </img>                                                                                  
                                    </Link>
                                </li>
                            ))}
                        </ ul>                   
                    </Route>                    
                </Switch>
            </section>
        )
    }
}

export default withRouter(Portfolio);


/*
                                    <li
                                        className="project-box-elem"
                                        key={item.id}>
                                        <h4>
                                            {item.title}
                                        </h4>
                                        <p className="proj-descrpt-p">
                                            {item.description.slice(0, 40) + "..."}
                                        </p>
*/
