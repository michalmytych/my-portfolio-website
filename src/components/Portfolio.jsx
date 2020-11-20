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
        console.log(this.props.projects);
        return (
            <section className="portfolio-sect animate__animated animate__fadeIn">

                <Switch>
                    <Route>
                        <h1 className="top-const-margin">Moje portfolio</h1>
                        <div className="gradient-line animate__animated animate__fadeIn"></div>
                      
                        <ul className="portfolio-list">
                            {
                            this.props.projects.length===0
                            ?
                            <p>Brak treści</p>
                            :
                            this.props.projects.map(item => (
                                <li 
                                    key={item.id} 
                                    className="portfolio-list-li">
                                    <Link
                                        key={item.id} 
                                        to={`/portfolio/project=${item.id}`}>
                                        <div className="short-descrpt">
                                            <div className="proj-title-short">
                                                <img 
                                                    alt="Ikona sześcianu."
                                                    className="box-icon"
                                                    src={box_icon}>                                                    
                                                </img>
                                                {item.title}
                                            </div>
                                            <p className="stack-short-enum">{item.stack}</p>
                                        </div>
                                        <img
                                            className="proj-img-ill" 
                                            src={item.image.url} 
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

