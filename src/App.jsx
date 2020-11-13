// React
import React from 'react';
import { Component } from 'react';

// React-Router
import { BrowserRouter as Router, NavLink, Route} from 'react-router-dom';

// Components
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ProjectDisplay from './components/ProjectDisplay';
import NavigationLink from './components/NavigationLink';

// Static & Assets
import './App.css';
import {
  /* Icons */
  GithubIcon,
  LinkedInIcon,

  /* Project thumnails */
  ProjThumb_001,
  ProjThumb_002,

  /* Project images */
  ProjImage_001,
  ProjImage_002,
} from './components/assets';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // PROJECTS

      projects: [
        {
            id: 1,
            title: "Pierwszy projekt",
            description: "Opis pierwszego projektu, jakiś dłuższy tnkjasjdkasjk jkkjasdkjasjkdh asjkdhkjh askjdh kj kjsakjdajks dhkjashdkjdkja kjskja dkjhkjj jjjjjjjjjjjj  asdkja jkdasjk kjdkj ajkdjk ajk kakjekst, pragraf i tka dalej i tak dalej.",
            image: ProjImage_001,
            thumbnail: ProjThumb_001,
            github: 'https://github.com/michalmytych/Movie-Rater',
            stack: "React, Django, Python, Docker"
        },
        {
            id: 2,
            title: "Jakiś drugi projekt",
            description: "To jest opis drugiego projektu, też jakiś taki przydługawy opis, jakiś paragraf i tak dalej.",
            image: ProjImage_002,
            thumbnail: ProjThumb_002,
            github: 'https://github.com/michalmytych/Simplest-Twitter-Django-React',
            stack: "React, Django, Python, Docker"
        }
      ]
    }
  }

  toggleBurger = () => {
    const burger_menu = document.getElementById('burger_menu');
    const burger_icon = document.getElementById('burger_icon');
    const fadeOut = async () => {
      await new Promise(resolve => setTimeout(resolve, 900))
      burger_menu.style.display = "none"
    };
    
    if (burger_menu.style.display === "block") {
      burger_menu.classList.add('animate__fadeOut');
      fadeOut();
    }
    else{
      if (burger_menu.classList.contains('animate__fadeOut')){
        burger_menu.classList.remove('animate__fadeOut');
      }
      burger_menu.style.display = "block";
    }
    if (burger_icon.classList.contains('open')){
      burger_icon.classList.remove('open');
    }
    else{
      burger_icon.classList.add('open');
    }
  }

  render() {
    return (
      <Router>

        <nav className="navbar">
          <ul className="nav-list">
            <NavigationLink title="Główna" go_to={'/'}/>
            <NavigationLink title="O mnie" go_to={'/about'}/>
            <NavigationLink title="Portfolio" go_to={'/portfolio'}/>
            <NavigationLink title="Umiejętności" go_to={'/skills'}/>
            <NavigationLink title="Kontakt" go_to={'/contact'}/>
          </ul>
        </nav>

        <div id="burger_menu" className="burger-nav animate__animated animate__fadeIn">
          <div className="nav-ul-wrapper">
              <ul className="burger-nav-list">
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/'}>GŁÓWNA</NavLink></li>
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/about'}>O MNIE</NavLink></li>
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/portfolio'}>PORTFOLIO</NavLink></li>
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/skills'}>UMIEJĘTNOŚCI</NavLink></li>
                <li className="burger-nav-list-el" onClick={this.toggleBurger}><NavLink to={'/contact'}>KONTAKT</NavLink></li>
              </ul>
          </div>
        </div>

        <main>
          <Route 
            exact={true} 
            path='/'>
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
            path='/about' 
            component={About} 
          />

          <Route 
            exact={true} 
            path='/skills' 
            component={Skills} 
          />

          <Route 
            exact={true} 
            path='/contact' 
            component={Contact} 
          />
          
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
