import React, { Component } from 'react';
import SuperHeading from '../SuperHeading/SuperHeading';
import Project from '../Project/Project';
import './Projects.scss';

class Projects extends Component {
  render() {
    return (

      <section className="projects super-heading-container">
        <SuperHeading heading="Projects" />

        <Project
          title="Weather to ride"
          imageSrc="images/weather-to-ride-01.jpg"
          imageAlt="Weather to ride app in use"
          text="<p>Weather to ride is a Weather app for cyclists who commute. Users are able to set weather conditions they prefer and times they commute and they receive personalised responses.</p><p>The app was built in Ionic as an internal project and is available on the ios app store.</p>"
        />

      </section>

    );
  }
}

export default Projects;
