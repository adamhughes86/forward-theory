import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technology from './components/Technology/Technology';
import Contact from './components/Contact/Contact';

import './App.scss';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

class App extends Component {

  registerClick() {
    console.log('Contact clicked');

    ReactGA.event({
      category: 'Contact Click',
      action: 'Clicked Link',
      label: 'Header'
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>

        <main className="main">

          <a href="mailto:adam@forwardtheory.co.uk" className="main__cta btn-cta" onClick={this.registerClick}>Get in touch</a>

          <Hero/>

          <Projects/>

          <Technology/>

          <Contact/>

        </main>
      </div>
    );
  }
}

export default App;
