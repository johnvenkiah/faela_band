/* global gapi */

import React, { Component } from "react";
import moment from "moment";
import { GOOGLE_API_KEY, CALENDAR_ID } from "../../config.js";
import momentDurationFormatSetup from 'moment-duration-format';
import "./calendar.scss";
momentDurationFormatSetup(moment);

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("dd, Do MMMM, h:mm A"),
      events: [],
    //   isBusy: false,
      isEmpty: false,
      isLoading: true
    };
  }

  componentDidMount = () => {
    this.getEvents();
    setInterval(() => {
      this.tick();
    }, 1000);
    setInterval(() => {
      this.getEvents();
    }, 60000);
  };

  getEvents() {
    let that = this;
    function start() {
      gapi.client
        .init({
          apiKey: GOOGLE_API_KEY
        })
        .then(function() {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?orderBy=updated&timeMin=${moment().toISOString()}&timeMax=${moment()
            .add(1, 'y')
              .toISOString()}`
          });
        })
        .then(
          response => {
            let events = response.result.items;
            let sortedEvents = events.sort(function(a, b) {
              return (
                moment(a.start.dateTime).format("YYYYMMDD") -
                moment(b.start.dateTime).format("YYYYMMDD")
              );
            });
            if (events.length > 0) {
              that.setState(
                {
                  events: sortedEvents,
                  isLoading: false,
                  isEmpty: false
                },
                () => {
                  that.setStatus();
                }
              );
            } else {
              that.setState({
                // isBusy: false,
                isEmpty: true,
                isLoading: false
              });
            }
          },
          function(reason) {
            console.log(reason);
          }
        );
    }
    gapi.load("client", start);
  }

  tick = () => {
    let time = moment().format("Do MMMM, h:mm A, YYYY");
    this.setState({
      time: time
    });
  };

  setStatus = () => {
    let now = moment();
    let events = this.state.events;
    for (var e = 0; e < events.length; e++) {
      var eventItem = events[e];
      if (
        moment(now).isBetween(
          moment(eventItem.start.dateTime),
          moment(eventItem.end.dateTime)
        )
      ) {
        this.setState({
          isBusy: true
        });
        return false;
      } else {
        this.setState({
          isBusy: false
        });
      }
    }
  };

  render() {
    const { events } = this.state;

    let eventsList = events.map(function(event) {
      return (
        <a
          className="list-group-item"
          href={event.description}
          target="_blank" rel="noreferrer"
          key={event.id}
        >
            <span className="date">
            {moment(event.start.dateTime).format("D/M-Y")}{" - "}
          </span>
          <span className="location">
          {event.location}
          </span>
        </a>
      );
    });

    let emptyState = (
      <div className="empty">
        <h3>
          No gigs currently in our calendar. We are updating it continuously.
        </h3>
      </div>
    );

    let loadingState = (
      <div className="loading">
          <h4>Loading dates...</h4>
      </div>
    );

    return (
      <div className="container">
        {/* <div
          className={
            this.state.isBusy ? "current-status busy" : "current-status open"
          }
        >
          <h1>{this.state.isBusy ? "BUSY" : "OPEN"}</h1>
        </div> */}
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