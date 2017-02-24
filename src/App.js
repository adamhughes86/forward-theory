import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technology from './components/Technology/Technology';
import Contact from './components/Contact/Contact';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <main className="main">

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
