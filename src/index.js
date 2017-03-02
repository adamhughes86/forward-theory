import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-7357301-16');

import Home from './components/Home/Home';
import About from './components/About/About';

import './index.scss';

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" components={Home} />
    <Route path="about" components={About} />
  </Router>
), document.getElementById('root'))
