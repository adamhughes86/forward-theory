import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  render() {
    return (

      <article className="project">
        <h3 className="project__title">Weather to ride</h3>
        <img src="./images/weather-to-ride-01.jpg" className="project__image" alt="Weather to ride app in use" />

        <div className="project__description">
          <p>Weather to ride is a Weather app for cyclists who commute. Users are able to set weather conditions they prefer and times they commute and they receive personalised responses.</p>

          <p>The app was built in Ionic as an internal project and is available on the ios app store.</p>
        </div>
      </article>

    );
  }
}

export default Project;
