import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {

  const express = require('express');
  const path = require('path');
  const app = express();

  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/lj-online-resume/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.listen(9000);

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={Home} />
        </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;


