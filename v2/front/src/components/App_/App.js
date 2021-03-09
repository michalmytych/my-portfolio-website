import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { useSpring, animated } from 'react-spring'
import Home from '../Home_/Home'
import Header from '../Header_/Header'
import ProjectsList from '../ProjectsList_/ProjectsList'
import About from '../About_/About'
import Contact from '../Contact_/Contact'
import loader from  '../../assets/icons/loader.svg'
import pageBg from  '../../assets/backgrounds/space3.jpg'
import cloudsB from '../../assets/backgrounds/clouds2.png'
import cloudsA from '../../assets/backgrounds/clouds.png'
import * as services from '../../services'
import * as queries from '../../queries'
import * as utils from '../../utils'
import './App.css'



const PageLoadingCover = () => {
  const a_slideOutCover= useSpring({
    top: '-140vh', 
    from: { top: '-2vh' }, 
    delay: 1000,
    config: {duration: 800} }
  )

  return (
    <animated.div style={a_slideOutCover} id="pageCoverLoader">
      <img className="cover-loader-spinner" 
        src={loader} 
        alt="Loading icon"
        id="pageLoaderSpinner"></img>
    </animated.div>
  )
}

class App extends React.Component {  
  constructor() {
    super();
    this.state = {
      lang      : 'PL',
      pages     : {},
      projects  : [],
      skills    : []
    }
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData(lang = this.state.lang) {
    let pages = await services.doQuery(queries.getPagesContent(lang))
    let projects = await services.doQuery(queries.getAllProjects(lang))
    let skills = utils.extractSkills(projects.data.allProjects)    

    this.setState({
      pages : pages.data.page,
      projects : projects.data.allProjects,
      skills : skills
    })
  }

  async componentDidMount() {
    await this.fetchData(this.state.lang)
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.lang !== prevState.lang) {
      await this.fetchData(this.state.lang)
    }        
  }

  render() {
    return (
      <div className="App">     
        <img src={pageBg} id="_pageBackground"></img>
        <img src={cloudsA} id="_biggerBackgr"></img>
        <img src={cloudsB} id="_smallerBackgr"></img>

        <PageLoadingCover /> 

        <Router>        
          <Header
            _setLang={(l => this.setState({lang : l}))}
            _lang={this.state.lang}
          />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>            
            <Route path="/portfolio">
              <ProjectsList 
                _content={this.state.pages.projects ?? null}
                _projects={this.state.projects} 
                _lang={this.state.lang}
              />
            </Route>
            <Route path="/about">
              <About 
                _content={this.state.pages.about ?? null}
                _skills={this.state.skills}
              />
            </Route>
            <Route path="/contact">
              <Contact _content={this.state.pages.contact ?? null}/>
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }  
}

export default App
