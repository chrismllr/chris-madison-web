import React, { Component } from 'react';
import Header from '../components/Header/Header';
import RsvpForm from '../components/RsvpForm/RsvpForm';
import * as RSVPService from '../services/rsvp.service';
import IntroBg from '../static/intro-bg.jpg';
import SVGInline from 'react-svg-inline';
import './App.css';

import SaveDate from '../static/save-date-1.svg';
import Olancha from '../static/olancha.jpg';

class App extends Component {

  submitRSVP = (rsvpData) =>
    RSVPService.rsvp(
      rsvpData,
      (json) => console.log('success', json),
      (err) => console.log('error', err)
    );

  navItemClicked = (sectionName) => {
    console.log('nav item clicked', sectionName);
  };

  render () {
    return (
      <main className="App">
        <Header navItemClicked={this.navItemClicked} />

        <div
          className="Intro"
          style={{ backgroundImage: `url("${IntroBg}")` }}
        ></div>

        <div className="App-content">
          <section id='details'>
            <div className='container split-section'>
              <div className='split-section__half'>
                <h2>When?</h2>
                <h6>May 20, 2017</h6>
                <h6>Ceremony at 6 o'clock</h6>
                <h6>Food and Fun until 10</h6>
              </div>
              <div className='split-section__half'>
                <h2>Where?</h2>
                <h6>436 E. Avenida Olancha</h6>
                <h6>Palm Springs, CA</h6>
                <h6>92264</h6>
              </div>
            </div>
          </section>

          <section className='olancha-section'
            style={{ backgroundImage: `url("${Olancha}")` }}>
            <div className="container">
              <SVGInline svg={SaveDate} />
            </div>
          </section>

          <section id='rsvp' className="text-center">
            <div className="container">
              <h1 className="section-header">RSVP</h1>
              <h5 className="section-sub-head">Please respond by April 1, 2017</h5>

              <RsvpForm submitForm={this.submitRSVP} />
            </div>

          </section>
        </div>
      </main>
    );
  }

}

export default App;
