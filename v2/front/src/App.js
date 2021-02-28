import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Header from './components/Header'
import ProjectsList from './components/ProjectsList'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import * as services from './services'
import * as queries from './queries'


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
    let skills = await services.doQuery(queries.getAllSkills)

    this.setState({
      pages : pages,
      projects : projects,
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
            <Route path="/portfolio">
              <ProjectsList 
                _content={this.state.pages.projects ?? null}
                _projects={this.state.projects} 
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
              <Redirect to="/portfolio" />
            </Route>
          </Switch>
          <Footer _lang={this.state.lang}/>
        </Router>
      </div>
    )
  }  
}

export default App
