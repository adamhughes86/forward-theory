import React, { Component } from 'react';

import './Hero.css';

class Hero extends Component {
  render() {
    return (

      <section className="hero">
        <h2 className="hero__heading">{this.props.title}</h2>
        <p className="hero__text">{this.props.text}</p>
      </section>

    );
  }
}

export default Hero;
