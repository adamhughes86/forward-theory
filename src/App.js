import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import image from './images/weather-to-ride-01.jpg';
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

            <article className="project">
              <h3 className="project__title">Weather to ride</h3>
              <img src={image} className="project__image" alt="Weather to ride app in use" />
              <div className="project__description">
                <p>Weather to ride is a Weather app for cyclists who commute. Users are able to set weather conditions they prefer and times they commute and they receive personalised responses.</p>

                <p>The app was built in Ionic as an internal project and is available on the ios app store.</p>
              </div>
            </article>

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
