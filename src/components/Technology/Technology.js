import React, { Component } from 'react';
import SuperHeading from '../SuperHeading/SuperHeading';

class Technology extends Component {
  render() {
    return (

      <section className="technology super-heading-container">
        <SuperHeading heading="Technology" />

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

    );
  }
}

export default Technology;
