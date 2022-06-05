import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="left">
        <a
          className="imgContainer"
          href="https://www.youtube.com/watch?v=zOrhSgxerjs"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={process.env.PUBLIC_URL + '/assets/cover_faela_lab.jpg'}
            alt="CD-cover for album Latin Animal Beats"
          />
          <p>Prelisten on YouTube</p>
        </a>
      </div>
      <div className="right">
        <div className="homeRightContainer">
          <h1>Faela's new album</h1>
          <h2>Latin Animal Beats</h2>
          <h3>Out Soon</h3>
          <Link to="/music" className="btnMain">
            <p>Continue to music</p>
            <i className="fa-solid fa-chevron-down"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
