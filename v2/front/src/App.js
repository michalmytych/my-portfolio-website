import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
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

    /**
     * Tu będzie algorytm który wyekstrachuje z projektów użyte w 
     * nich technologie i zliczy jak często zostały użyte
     * Output algorytmu będzie zapisany jako this.state.skills
     * Następnie przekazany przez propsy do komponentu About
     * W komponencie about technologie będą wyświetlane wedle
     * częstotliwości użycia.
     */

    //console.log(pages)
    //console.log(projects)
    console.log(projects.data.allProjects)
    console.log(skills)

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
              <Redirect to="/portfolio" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }  
}

export default App
