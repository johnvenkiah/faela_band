const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
const GOOGLE_CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.PROJECT_NUMBER;
const GOOGLE_CALENDAR_ID = process.env.CALENDAR_ID;
const PORT = process.env.PORT;

app.get('/api/calendar/events', async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://faela-band.com');
  const allowedOrigins = [
    'http://localhost:3002',
    'http://localhost:3001',
    'http://localhost:3000',
    'https://faela-band.com',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
  }

  try {
    const jwtClient = new google.auth.JWT(
      GOOGLE_CLIENT_EMAIL,
      null,
      GOOGLE_PRIVATE_KEY,
      SCOPES
    );

    const calendar = google.calendar({
      version: 'v3',
      project: GOOGLE_PROJECT_NUMBER,
      auth: jwtClient,
    });
    const { data } = await calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });
    data.items ? res.json(data.items) : res.json('No upcoming events found.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

if (process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
}
module.exports = app;
