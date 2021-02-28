import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import HeroSection from './components/HeroSection';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path='/lj-online-resume/' exact component={Home} />
          <Route path='/lj-online-resume/about' exact component={About} />
          <Route path='/lj-online-resume/projects' exact component={Projects} />
          <Route path='/lj-online-resume/contact' exact component={Contact} />
        </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
