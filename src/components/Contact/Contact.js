import React, { Component } from 'react';
import SuperHeading from '../SuperHeading/SuperHeading';
import './Contact.scss';

class Contact extends Component {
  render() {
    return (

      <section className="contact super-heading-container">
        <SuperHeading heading="Interested?" />

        <div className="contact__text">
          <p>If you’re looking for a digital partner, someone to work with on a project or even just a chat about an idea please get in touch.</p>

          <a href="mailto:adam@forwardtheory.co.uk" className="contact__cta">Get in touch</a>
        </div>
      </section>

    );
  }
}

export default Contact;
