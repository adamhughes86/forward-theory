import React, { Component } from 'react';
import SuperHeading from '../SuperHeading/SuperHeading';
import Project from '../Project/Project';

import './Projects.css';

class Projects extends Component {
  render() {
    return (

      <section className="projects super-heading-container">
        <SuperHeading heading="Projects" />

        <Project
          title="Weather to ride"
          imageSrc="images/weather-to-ride-01.jpg"
          imageAlt="Weather to ride app in use"
          text='<p>Weather to ride is an essential weather app for cyclists who commute.</p> <p>No longer will you be sat at your desk wondering "Why did I cycle in today?". Gone will be the days where you turn a corner only to be greeted by the headwind from hell.</p> <p>Set your ideal conditions and make your commute a breeze.</p><p>The app was built in Ionic as an internal project and will be available in the ios app store soon.</p>'
        />

      </section>

    );
  }
}

export default Projects;
