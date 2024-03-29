import React, { Component } from 'react';
import moment from 'moment';
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
    this.startPolling();
  };

  startPolling = () => {
    setTimeout(() => {
      this.getEvents();
      this.startPolling();
    }, 60000);
  };

  getEvents() {
    fetch('/.netlify/functions/events?endpoint=events')
      // fetch('https://faela-be.onrender.com/events')
      .then((response) => response.json())
      .then((data) => {
        let events = data;
        if (events.length > 0) {
          this.setState({
            events: events,
            isLoading: false,
            isEmpty: false,
          });
        } else {
          this.setState({
            isEmpty: true,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.error('This is the error: ', error);
      });
  }

  render() {
    const { events } = this.state;
    let eventsList = events.map(function (event) {
      if (event.description) {
        let descr = event.description;
        descr = descr.slice(descr.lastIndexOf('https:'));
        descr = descr.replace('</u>', '');
        descr = descr.replace('</a>', '');

        return (
          <a
            className="list-group-item"
            href={descr}
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
