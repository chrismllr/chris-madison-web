import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import ButtonChoice from '../ButtonChoice/ButtonChoice';
import './RsvpForm.css';

export class RsvpForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      willAttend: null,
      fullName: '',
      hotDateName: ''
    }
  }

  onChange = (rf, val) => {
    this.setState({ [rf]: val });
  };

  chooseAttendance = (value) => {
    this.setState({ willAttend: value });
  };

  render () {
    return (
      <div>
        <div className="Rsvp-form-buttons">
          <ButtonChoice
            value="yes"
            btnText="Duh!"
            className="Rsvp-button-yes"
            activeClass="Rsvp-button-yes-selected"
            selected={this.state.willAttend === 'yes'}
            onClick={this.chooseAttendance}
          />
          <ButtonChoice
            value="no"
            btnText="Nah!"
            className="Rsvp-button-no"
            activeClass="Rsvp-button-no-selected"
            selected={this.state.willAttend === 'no'}
            onClick={this.chooseAttendance}
          />
        </div>

        <div className="Rsvp-form-row">
          <div className="Rsvp-form-input">
            <label htmlFor="full-name">Full Name</label>
            <TextInput
              recordField="fullName"
              value={this.state.fullName}
              onChange={this.onChange}
              attrs={{
                placeholder: 'Full name'
              }}
            />
          </div>
          <div className="Rsvp-form-input">
            <label htmlFor="hot-date">Bringing a hot date?</label>
            <TextInput
              recordField="hotDateName"
              value={this.state.hotDateName}
              onChange={this.onChange}
              attrs={{
                placeholder: 'Their full name'
              }}
            />
          </div>
        </div>
      </div>
    );

  }

}
export default RsvpForm;
