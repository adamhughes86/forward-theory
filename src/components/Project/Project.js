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
      </article>

    );
  }
}

export default Project;
