import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import ButtonChoice from '../ButtonChoice/ButtonChoice';
import './RsvpForm.css';

class RsvpForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      attending: true,
      name: '',
      plusOne: ''
    }
  }

  onChange = (rf, val) =>
    this.setState({ [rf]: val });

  chooseAttendance = (value) =>
    this.setState({ attending: value });

  submitForm = (e) => {
    e.preventDefault();
    this.props.submitForm(this.state);
  }


  render () {
    return (
      <form onSubmit={this.submitForm}>
        <div className="Rsvp-form-buttons">
          <ButtonChoice
            value={true}
            btnText="Duh!"
            iconName="check"
            className="Rsvp-button-yes"
            activeClass="Rsvp-button-yes-selected"
            selected={this.state.attending}
            onClick={this.chooseAttendance}
          />
          <ButtonChoice
            value={false}
            btnText="Nah!"
            iconName="close"
            className="Rsvp-button-no"
            activeClass="Rsvp-button-no-selected"
            selected={!this.state.attending}
            onClick={this.chooseAttendance}
          />
        </div>

        <div className="Rsvp-form-row">
          <div className="Rsvp-form-input">
            <label htmlFor="full-name">Full Name</label>
            <TextInput
              recordField="name"
              value={this.state.name}
              onChange={this.onChange}
              attrs={{
                placeholder: 'Full name'
              }}
            />
          </div>
          <div className="Rsvp-form-input">
            <label htmlFor="hot-date">Bringing a hot date?</label>
            <TextInput
              recordField="plusOne"
              value={this.state.plusOne}
              onChange={this.onChange}
              attrs={{
                placeholder: 'Their full name'
              }}
            />
          </div>
        </div>

        <div className="Rsvp-form-row">
          <button className='Rsvp-submit-btn btn'>Submit</button>
        </div>
      </form>
    );
  }

}

export default RsvpForm;
