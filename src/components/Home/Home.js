import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Technology from '../Technology/Technology';
import Contact from '../Contact/Contact';

import './Home.css';

class Home extends Component {

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

      <div className="Page">

        <Header/>

        <main className="main">

          <ReactCSSTransitionGroup transitionName="loadButton" transitionAppear={true} transitionAppearTimeout={3800} transitionEnter={false} transitionLeave={false}>
            <a href="mailto:adam@forwardtheory.co.uk" className="main__cta btn-cta" onClick={this.registerClick}>Get in touch</a>
          </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup transitionName="hero" transitionAppear={true} transitionAppearTimeout={1600} transitionEnter={false} transitionLeave={false}>
            <Hero
              title="Crafting meaningful digital experiences"
              text="We are a Liverpool based development studio specialising in small to medium sized websites and apps."
            />
          </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup transitionName="projects" transitionAppear={true} transitionAppearTimeout={2800} transitionEnter={false} transitionLeave={false}>
            <Projects/>
          </ReactCSSTransitionGroup>

          <Technology/>

          <Contact/>

        </main>
      </div>
    );
  }
}

export default Home;
