/* global gapi */

import React, { Component } from 'react';
import moment from 'moment';
import { GOOGLE_API_KEY, CALENDAR_ID } from '../../config.js';
import momentDurationFormatSetup from 'moment-duration-format';
import './calendar.scss';
momentDurationFormatSetup(moment);

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('dd, Do MMMM, h:mm A'),
      events: [],
      isEmpty: false,
      isLoading: true,
    };
  }

  componentDidMount = () => {
    this.getEvents();
    setInterval(() => {
      this.getEvents();
    }, 60000);
  };

  getEvents() {
    let that = this;
    function start() {
      gapi.client
        .init({
          apiKey: GOOGLE_API_KEY,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?singleEvents=True&orderBy=startTime&timeMin=${moment().toISOString()}&timeMax=${moment()
              .add(1, 'y')
              .toISOString()}`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            if (events.length > 0) {
              that.setState({
                events: events,
                isLoading: false,
                isEmpty: false,
              });
            } else {
              that.setState({
                isEmpty: true,
                isLoading: false,
              });
            }
          },
          function (reason) {
            console.log(reason);
          }
        );
    }
    gapi.load('client', start);
  }

  render() {
    const { events } = this.state;

    let eventsList = events.map(function (event) {
      if (event.description) {
        return (
          <a
            className="list-group-item"
            href={event.description}
            target="_blank"
            rel="noreferrer"
            key={event.id}
          >
            <span className="date">
              {moment(event.start.dateTime).format('D/M-Y')}
              {' - '}
            </span>
            <span className="location">{event.location}</span>
          </a>
        );
      } else {
        return (
          <p className="list-group-item" key={event.id}>
            <span className="date">
              {moment(event.start.dateTime).format('D/M-Y')}
              {' - '}
            </span>
            <span className="location">{event.location}</span>
          </p>
        );
      }
    });

    let emptyState = (
      <div className="empty">
        <h3>No gigs currently in our calendar.</h3>
        <p>
          We are updating it continuously, so it may currently be under
          maintenance. Please contact us if you have any queries!
        </p>
      </div>
    );

    let loadingState = (
      <div className="loading">
        <h4>Loading dates...</h4>
      </div>
    );

    return (
      <div className="container">
        <div className="concerts">
          <div className="list-group">
            {this.state.isLoading && loadingState}
            {events.length > 0 && eventsList}
            {this.state.isEmpty && emptyState}
          </div>
        </div>
      </div>
    );
  }
}
