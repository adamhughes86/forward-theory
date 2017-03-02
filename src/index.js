import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-7357301-16', { debug: true });

import Home from './components/Home/Home';
import About from './components/About/About';

import './index.scss';

function logPageView() {
  console.log('Log: ', window.location.pathname);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
ReactDOM.render((
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path="/" components={Home} />
    <Route path="about" components={About} />
  </Router>
), document.getElementById('root'))
