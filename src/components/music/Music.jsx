import albumData from '../musicList/MusicList';
import './music.scss';

export default function Music({ hideElements, setHideElements }) {
  return (
    <div className="music" id="music">
      <h1>Music</h1>
      <div className="container">
        {albumData.map((item) => (
          <div
            className={'album ' + (hideElements ? hideElements && 'hide' : '')}
            onMouseOver={() => setHideElements(true)}
            onMouseLeave={() => setHideElements(false)}
          >
            <img
              className="albumCover"
              src={process.env.PUBLIC_URL + item.img_url}
              alt={item.alt_attr}
            />
            <p className="p2Album">{item.title}</p>
            <p>Play on</p>
            <div className="playBtnContainer">
              <a
                className="playBtn"
                href={item.spotify_url}
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-spotify"></i>
                <span> Spotify</span>
              </a>
              <a
                className="playBtn"
                href={item.apple_url}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="logoSmall"
                  src={process.env.PUBLIC_URL + '/assets/apple_music_logo.png'}
                  alt="Apple Logo"
                />
                <span> Apple Music</span>
              </a>
              <a
                className="playBtn"
                href={item.tidal_url}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="logoSmall"
                  src={process.env.PUBLIC_URL + '/assets/tidal_logo.png'}
                  alt="Tidal Logo"
                />
                <span> Tidal</span>
              </a>
              <a
                className="playBtn"
                href={item.deezer_url}
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-deezer"></i>
                <span> Deezer</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
