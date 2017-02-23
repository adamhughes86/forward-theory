import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
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

          <section className="technology module">
            <h2 className="super-heading">Technology</h2>

            <div className="technology__text">
              <p>Here at Forward Theory we specialise in interesting ideas with the end user at the front of our minds constantly. We pride ourselves in being a Creative, UX driven development agency.</p>

              <p>We work with a variety of platforms that include:</p>

              <ul className="technology__list">
                <li>WordPress</li>
                <li>Craft</li>
                <li>Magento</li>
                <li>Shopify</li>
                <li>Ionic</li>
              </ul>
            </div>
          </section>

          <section className="contact module">
            <h2 className="contact__heading">Interested?</h2>

            <div className="contact__text">
              <p>If you’re looking for a digital partner, someone to work with on a project or even just a chat about an idea please get in touch.</p>

              <a href="mailto:adam@forwardtheory.co.uk" className="contact__cta">Get in touch</a>
            </div>
          </section>

        </main>
      </div>
    );
  }
}

export default App;
