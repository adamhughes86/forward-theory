import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Contact from '../Contact/Contact';

class PrivacyPolicy extends Component {

  registerClick() {
    console.log('Contact clicked');

    ReactGA.event({
      category: 'Contact Click',
      action: 'Clicked Link',
      label: 'Header'
    });
  }

  render() {
    return (

      <div className="Page">

        <Header/>

        <main className="main">

          <a href="mailto:adam@forwardtheory.co.uk" className="main__cta btn-cta" onClick={this.registerClick}>Get in touch</a>

          <Hero
            title="Weather To Ride: Privacy Policy"
            text="Important information about your data"
          />
      
          <section className="Body">
            <p className="date"><strong>Effective date: 7th March 2017</strong></p>
            <h2>Information we collect</h2>
            <ul>
              <li>The user enters a location so that we can generate a weather report for that location.</li>
              <li>The users preferred cycling information, including; minimum temperature, maximum wind, and whether they wish to avoid rain.</li>
              <li>The times the user commutes.</li>
            </ul>
            <p>These are all manually entered by the user and are stored on the device. This data is not stored elsewhere.</p>
            <p>By using Weather To Ride you are agreeing for this information to be stored on your device and used with relevant third parties</p>

            <h2>How we use the information</h2>
            <p>The information stored on the device is used to generate weather reports and tailored responses to the weather conditions.</p>
            <p>Google Maps is used with the location in order to generate a longitude and latitude.</p>
            <p>The Dark Sky API is used to generate the weather report and the longitude and latitude data is passed to that.</p>
          </section>

          <Contact/>

        </main>
      </div>
    );
  }
}

export default PrivacyPolicy;
