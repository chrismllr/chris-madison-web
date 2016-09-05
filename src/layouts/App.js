import React, { Component } from 'react';
import Header from '../components/Header/Header';
import RsvpForm from '../components/RsvpForm/RsvpForm';
import IntroBg from '../static/intro-bg.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <div className="Intro" style={{ backgroundImage: `url("${IntroBg}")`}}>

        </div>

        <div className="App-content">
          <div id='wedding'></div>

          <section id='rsvp' className="text-center">
            <div className="container">
              <h1 className="section-header">Will you be there?</h1>
              <RsvpForm />
            </div>

          </section>
        </div>
      </main>
    );
  }

}

export default App;
