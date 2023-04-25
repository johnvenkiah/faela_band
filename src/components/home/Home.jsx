import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="smokeScreen"></div>
      <div className="vidContainerHome">
        <iframe
          src="https://www.youtube-nocookie.com/embed/4LGCXLC9Nyg"
          title="FAELA Junio & Julia"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="textContainerHome">
        <h1>
          New Video | Junio & Julia - Live at Moriska Paviljongen, May 20th 2022
        </h1>
        <Link to="/music" className="btnMain">
          <p>Continue to music</p>
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </div>
    </div>
  );
}
