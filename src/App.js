import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();

  return (
    <>
      <Router basename="/">
        <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;


