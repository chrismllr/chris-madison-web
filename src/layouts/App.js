import React, { Component } from 'react';
import Header from '../components/Header/Header';
import RsvpForm from '../components/RsvpForm/RsvpForm';
import * as RSVPService from '../services/rsvp.service';
import IntroBg from '../static/intro-bg.jpg';
import './App.css';

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

  render() {
    return (
      <main className="App">
        <Header navItemClicked={this.navItemClicked} />

        <div
          className="Intro"
          style={{ backgroundImage: `url("${IntroBg}")` }}
        ></div>

        <div className="App-content">
          <div id='wedding'></div>

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
