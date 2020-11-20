// React
import React from 'react';
import { Component } from 'react';

// React-Router
import { BrowserRouter as Router, NavLink, Route, Redirect } from 'react-router-dom';

// Components
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ProjectDisplay from './components/ProjectDisplay';
import NavigationLink from './components/NavigationLink';
import BackButton from './components/BackButton';

// Static & Assets
import './App.css';
import {
  GithubIcon,
  LinkedInIcon
} from './components/assets';

// DatoCMS GraphQL requests
import queries from './queries';
import requests from './requests';

// Burger toggling animation
import burger from './burger';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      skills: [],
      pages: {}
    }
  }

  async getProjectsList() {
    let results = await requests.doQuery(queries.GET_ALL_PROJECTS_QUERY);

    if (results.data) {
      let data = results.data;
      this.setState({ projects:  data.allProjects});
    }
  }

  async getPagesContent() {
    let results = await requests.doQuery(queries.GET_PAGES_TEXT_CONTENT_QUERY);

    if (results.data) {
      let data = results.data;
      this.setState({ pages:  data.page});
    }
  }

  async getSkillsList() {
    let results = await requests.doQuery(queries.GET_ALL_SKILLS_QUERY);

    if (results.data) {
      let data = results.data;
      this.setState({ skills:  data.allSkills});
    }
  }

  toggleBurger = () => {
    burger.toggleBurgerMenu();
  }

  componentDidMount() {
    this.getPagesContent();
    this.getProjectsList();
    this.getSkillsList();
  }

  render() {
    return (
      <Router>

        <nav className="navbar">
          <ul className="nav-list">
            <NavigationLink title="Główna" go_to={'/home'}/>
            <NavigationLink title="O mnie" go_to={'/about'}/>
            <NavigationLink title="Portfolio" go_to={'/portfolio'}/>
            <NavigationLink title="Umiejętności" go_to={'/skills'}/>
            <NavigationLink title="Kontakt" go_to={'/contact'}/>
          </ul>
        </nav>

        <div id="burger_menu" className="burger-nav animate__animated animate__fadeIn">
          <div className="nav-ul-wrapper">
              <ul className="burger-nav-list">
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/home'}>GŁÓWNA</NavLink></li>
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/about'}>O MNIE</NavLink></li>
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/portfolio'}>PORTFOLIO</NavLink></li>
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/skills'}>UMIEJĘTNOŚCI</NavLink></li>
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/contact'}>KONTAKT</NavLink></li>
              </ul>
          </div>
        </div>

        <main>
          <BackButton />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route 
            exact={true} 
            path='/home'>
            <Home />
            <footer className="footer-bar animate__animated animate__fadeIn">
              <div className="footer-links-wrapper">
                <a 
                  className="footer-link"
                  href="https://github.com/michalmytych" 
                  target="_blank"
                  rel="noopener noreferrer">
                    <img className="github_icon" src={GithubIcon} alt="Ikona Github."></img>
                </a>
                <a 
                  className="footer-link"
                  href="https://www.linkedin.com/in/micha%C5%82-mytych-16b1431a5/" 
                  target="_blank"
                  rel="noopener noreferrer">
                    <img className="linked_icon" src={LinkedInIcon} alt="Ikona Linked-In."></img>
                </a>
              </div>
            </footer>
          </Route>

          <Route 
            exact={true} 
            path='/about'> 
            <About content={this.state.pages.about}/>
          </Route>

          <Route 
            exact={true} 
            path='/skills'> 
            <Skills 
              content={this.state.pages.skills}
              skills={this.state.skills}/>
          </Route>

          <Route 
            exact={true} 
            path='/contact'>
            <Contact content={this.state.pages.contact}/>
          </Route>
          
          <Route 
            exact={true} 
            path='/portfolio'>
            <Portfolio projects={this.state.projects}/>
          </Route> 

          <Route 
            exact={true} 
            path='/portfolio/project=:projectId'>
            <ProjectDisplay projects={this.state.projects}/>
          </Route> 

        </main>

        <div id="burger_toggler" className="hamburger" onClick={this.toggleBurger}>
          <div id="burger_icon" className="hamburger__icon">
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
          </div>
        </div>
      </Router >
    );
  }
}
