import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import './index.scss';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
