import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Technology from '../Technology/Technology';
import Contact from '../Contact/Contact';

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

          <a href="mailto:adam@forwardtheory.co.uk" className="main__cta btn-cta" onClick={this.registerClick}>Get in touch</a>

          <h2>About</h2>

        </main>
      </div>
    );
  }
}

export default Home;
