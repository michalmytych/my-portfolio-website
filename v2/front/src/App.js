import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import ProjectsList from './components/ProjectsList'
import About from './components/About'
import Contact from './components/Contact'
import * as services from './services'
import * as queries from './queries'
import * as utils from './utils'


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

    //console.log(pages)
    //console.log(projects)
    //console.log(projects.data.allProjects)
    //console.log(skills)

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
