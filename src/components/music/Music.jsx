import React, { useRef } from 'react';
import albumData from '../musicList/MusicList';
import './music.scss';

export default function Music({ hideElements, setHideElements }) {
  const containerRef = useRef(null);

  const scrollToAlbum = (index) => {
    const container = containerRef.current;
    const album = container.querySelectorAll('.album')[index];

    if (album) {
      const containerRect = container.getBoundingClientRect();
      const albumRect = album.getBoundingClientRect();
      const yOffset =
        albumRect.top -
        containerRect.top -
        containerRect.height / 2 +
        albumRect.height / 2;
      window.scrollTo({
        top: window.scrollY + yOffset,
        behavior: 'smooth',
      });
      console.log(window.scrollY + yOffset);
    }
  };

  return (
    <div className="music" id="music">
      <h1>Music</h1>
      <div
        className="container"
        onScroll={() => setHideElements(false)}
        ref={containerRef}
      >
        {albumData.map((item, i) => (
          <div key={i} className="album" onClick={() => scrollToAlbum(i)}>
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
