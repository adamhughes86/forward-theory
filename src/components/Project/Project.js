import React, { Component } from 'react';

import './Project.css';

class Project extends Component {
  render() {
    return (

      <article className="project">
        <h3 className="project__title">{this.props.title}</h3>
        <img src={this.props.imageSrc} className="project__image" alt={this.props.imageAlt} />

        <div className="project__description" dangerouslySetInnerHTML={{__html: this.props.text}}>
        </div>

        <a href={this.props.link} target="_blank"><img src="images/app-store-button.svg" alt="Download on the App Store"/></a>
      </article>

    );
  }
}

export default Project;
