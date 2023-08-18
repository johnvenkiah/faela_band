import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="left">
        <a
          className="imgContainer"
          href="https://open.spotify.com/album/0mwzwuxBWgSku8TAt4MDNf?si=dl-ZJOV3T6mRflZa7BC4UQ"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={process.env.PUBLIC_URL + '/assets/cover_faela_lab.jpg'}
            alt="CD-cover for album Latin Animal Beats"
          />
          <p>Buy Now</p>
        </a>
      </div>
      <div className="right">
        <div className="homeRightContainer">
          <h1>Faela's new album</h1>
          <h2>Latin Animal Beats</h2>
          <h3>Out Now</h3>
          <Link to="/music" className="btnMain">
            <p>Continue to music</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
