'use strict'
import React from 'react'
import config from './config'
import spreadsheet from './helpers/spreadsheet'

export class StepTwo extends React.Component {
  constructor () {
    super()
    // this.state = {
    //   attendees: [{
    //     'firstname': '',
    //     'lastname': '',
    //     'fridaydinner': '',
    //     'saturdayceremony': '',
    //     'sundaybrunch': '',
    //   }],
    //   error: null
    // }
  }

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        spreadsheet.load(this.onLoad)
      })
  }

  onLoad = (data, error) => {
    if (data) {
      const attendees = data.attendees;
      this.setState({ attendees })
    } else {
      this.setState({ error })
    }
  }

  handleAttendeeFirstNameChange = idx => evt => {
    const newAttendee = this.state.attendees.map((attendee, sidx) => {
      if (idx !== sidx) return attendee;
      return { ...attendee, firstname: evt.target.value };
    });

    this.setState({ attendees: newAttendee });
  };

  handleAttendeeLastNameChange = idx => evt => {
    const newAttendee = this.state.attendees.map((attendee, sidx) => {
      if (idx !== sidx) return attendee;
      return { ...attendee, lastname: evt.target.value };
    });

    this.setState({ attendees: newAttendee });
  };

  handleAttendeeFridayDinnerChange = idx => evt => {
    const newAttendee = this.state.attendees.map((attendee, sidx) => {
      if (idx !== sidx) return attendee;
      return { ...attendee, fridaydinner: evt.target.value };
    });

    this.setState({ attendees: newAttendee });
  };

  handleAttendeeSaturdayCeremonyChange = idx => evt => {
    const newAttendee = this.state.attendees.map((attendee, sidx) => {
      if (idx !== sidx) return attendee;
      return { ...attendee, saturdayceremony: evt.target.value };
    });

    this.setState({ attendees: newAttendee });
  };

  handleAttendeeSundayBrunchChange = idx => evt => {
    const newAttendee = this.state.attendees.map((attendee, sidx) => {
      if (idx !== sidx) return attendee;
      return { ...attendee, sundaybrunch: evt.target.value };
    });

    this.setState({ attendees: newAttendee });
  };

  render () {
    const { attendees, error } = this.state
    if (error) {
      return <div>{this.state.error}</div>
    }
    return (
      <div>
        {attendees.map((attendee, idx) => (
          <div className="row">
            <div className="col-md-12">
              <div className="attendee">
                <input
                  type="text"
                  placeholder={`Attendee #${idx + 1} first name`}
                  value={attendee.firstname}
                  onChange={this.handleAttendeeFirstNameChange(idx)}
                />
                <input
                  type="text"
                  placeholder={`Attendee #${idx + 1} last name`}
                  value={attendee.lastname}
                  onChange={this.handleAttendeeLastNameChange(idx)}
                />
                <select
                  value={attendee.fridaydinner}
                  onChange={this.handleAttendeeFridayDinnerChange(idx)}
                >
                  <option value="">Friday Dinner</option>
                    <option
                        key={`fridaydinner_yes_${idx + 1}`}
                        value="Yes"
                        label="Yes">Yes
                    </option>
                    <option
                        key={`fridaydinner_no_${idx + 1}`}
                        value="No"
                        label="No">No
                    </option>
                    <option
                        key={`fridaydinner_maybe_${idx + 1}`}
                        value="Maybe"
                        label="Maybe">Maybe
                    </option>
                </select>
                <select
                    value={attendee.saturdayceremony}
                    onChange={this.handleAttendeeSaturdayCeremonyChange(idx)}
                >
                  <option value="">Saturday Ceremony</option>
                  <option
                      key={`saturdayceremony_yes_${idx + 1}`}
                      value="Yes"
                      label="Yes">Yes
                  </option>
                  <option
                      key={`saturdayceremony_no_${idx + 1}`}
                      value="No"
                      label="No">No
                  </option>
                  <option
                      key={`saturdayceremony_maybe_${idx + 1}`}
                      value="Maybe"
                      label="Maybe">Maybe
                  </option>
                </select>
                <select
                    value={attendee.sundaybrunch}
                    onChange={this.handleAttendeeSundayBrunchChange(idx)}
                >
                  <option value="">Sunday Brunch</option>
                  <option
                      key={`sundaybrunch_yes_${idx + 1}`}
                      value="Yes"
                      label="Yes">Yes
                  </option>
                  <option
                      key={`sundaybrunch_no_${idx + 1}`}
                      value="No"
                      label="No">No
                  </option>
                  <option
                      key={`sundaybrunch_maybe_${idx + 1}`}
                      value="Maybe"
                      label="Maybe">Maybe
                  </option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
