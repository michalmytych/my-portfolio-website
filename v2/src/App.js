import React, { useState } from 'react'
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


function App() {
  const [lang, setLang] = useState('PL')
  const [pages, setPages] = useState({})
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])

  services.doQuery(queries.getPagesContent(lang)).then(res => setPages(res))
  services.doQuery(queries.getAllProjects(lang)).then(res => setProjects(res))
  services.doQuery(queries.getAllSkills).then(res => setSkills(res))

  return (
    <div className="App">
      <Router>        
        <Header
          _setLang={setLang}
          _lang={lang}
        />
        <Switch>
          <Route path="/portfolio">
            <ProjectsList 
              _content={pages.projects ?? null}
              _projects={projects} 
            />
          </Route>
          <Route path="/about">
            <About 
              _content={pages.about ?? null}
              _skills={skills}
            />
          </Route>
          <Route path="/contact">
            <Contact _content={pages.contact ?? null}/>
          </Route>
          <Route exact path="/">
            <Redirect to="/portfolio" />
          </Route>
        </Switch>
        <Footer _lang={lang}/>
      </Router>
    </div>
  );
}

export default App
