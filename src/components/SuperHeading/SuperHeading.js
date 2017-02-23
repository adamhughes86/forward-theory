import React, { Component } from 'react';
import './SuperHeading.css';

class SuperHeading extends Component {
  render() {
    return (

      <h2 className="super-heading">{this.props.heading}</h2>

    );
  }
}

export default SuperHeading;
