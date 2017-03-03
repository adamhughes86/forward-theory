import React, { Component } from 'react';
import ReactGA from 'react-ga';
import SuperHeading from '../SuperHeading/SuperHeading';

import './Contact.css';

class Contact extends Component {

  registerClick() {
    console.log('Contact clicked');

    ReactGA.event({
      category: 'Contact Click',
      action: 'Clicked Link',
      label: 'Footer'
    });
  }

  render() {
    return (

      <section className="contact super-heading-container">
        <SuperHeading heading="Interested?" />

        <div className="contact__text">
          <p>If you’re looking for a digital partner, someone to work with on a project or even just a chat about an idea please get in touch.</p>

          <a href="mailto:adam@forwardtheory.co.uk" className="contact__cta btn-cta" onClick={this.registerClick}>Get in touch</a>
        </div>
      </section>

    );
  }
}

export default Contact;
