import './album.scss';

export default function Album({
  title,
  active,
  setActive,
  id,
  img_url,
  alt_attr,
  spotify_url,
  apple_url,
  tidal_url,
  deezer_url,
}) {
  return (
    <div
      className={active ? 'album active' : 'album'}
      onClick={() => setActive(id)}
    >
      <img className="albumCover" src={img_url} alt={alt_attr} />
      <p className="p2Album">{title}</p>
      <p>Play on</p>
      <div className="playBtnContainer">
        <a
          className="playBtn"
          href={spotify_url}
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-spotify"></i>
          <span> Spotify</span>
        </a>
        <a
          className="playBtn"
          href={apple_url}
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
          href={tidal_url}
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
          href={deezer_url}
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-deezer"></i>
          <span> Deezer</span>
        </a>
      </div>
    </div>
  );
}
