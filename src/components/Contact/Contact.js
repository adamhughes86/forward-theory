import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (

      <section className="contact module">
        <h2 className="contact__heading">Interested?</h2>

        <div className="contact__text">
          <p>If you’re looking for a digital partner, someone to work with on a project or even just a chat about an idea please get in touch.</p>

          <a href="mailto:adam@forwardtheory.co.uk" className="contact__cta">Get in touch</a>
        </div>
      </section>

    );
  }
}

export default Contact;
