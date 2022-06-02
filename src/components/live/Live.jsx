import './live.scss';
import Calendar from '../calendar/Calendar';

export default function Live() {
  return (
    <div className="live" id="live">
      <h1>Live</h1>
      <div className="mainContainer">
        <h2>Catch Faela live! Click on the date for info or tickets.</h2>
        <div className="gigContainer">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
