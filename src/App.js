import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import Technology from './components/Technology/Technology';
import Contact from './components/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <main className="main">

          <Hero/>

          <section className="projects module">
            <h2 className="super-heading">Projects</h2>

            <Project/>

          </section>

          <Technology/>

          <Contact/>

        </main>
      </div>
    );
  }
}

export default App;
