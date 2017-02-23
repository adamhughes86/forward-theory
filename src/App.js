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

            <Project
              title="Weather to ride"
              imageSrc="images/weather-to-ride-01.jpg"
              imageAlt="Weather to ride app in use"
              text="<p>Weather to ride is a Weather app for cyclists who commute. Users are able to set weather conditions they prefer and times they commute and they receive personalised responses.</p><p>The app was built in Ionic as an internal project and is available on the ios app store.</p>"
            />

          </section>

          <Technology/>

          <Contact/>

        </main>
      </div>
    );
  }
}

export default App;
