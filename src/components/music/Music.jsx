import { porElMundo, conMigo, camina, faela } from '../musicList/MusicList';
import Album from '../album/Album';
import './music.scss';
import { useState, useEffect } from 'react';
// import { isSupportedEnvironment } from 'node-sass/lib/extensions';
// import Album from '../album/Album';

export default function Music() {
  const [active, setActive] = useState('active');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'por_el_mundo',
      title: 'Por El Mundo (2016)',
    },
    {
      id: 'conmigo',
      title: 'Conmigo (2013)',
    },
    {
      id: 'camina',
      title: 'Camina (2011)',
    },
    {
      id: 'faela_faela',
      title: 'Faela (2011)',
    },
  ];

  useEffect(() => {
    switch (active) {
      case 'por_el_mundo':
        setData(porElMundo);
        break;
      case 'conmigo':
        setData(conMigo);
        break;
      case 'camina':
        setData(camina);
        break;
      case 'faela_faela':
        setData(faela);
        break;
      default:
        setData(porElMundo);
    }
  }, [active]);

  return (
    <div className="music" id="music">
      <h1>Music</h1>
      <div className="container">
        {list.map((item) => (
          <Album
            title={item.title}
            active={active === item.id}
            setActive={setActive}
            id={item.id}
            img_url={process.env.PUBLIC_URL + item.img_url}
            alt_attr={item.alt_attr}
            spotify_url={item.spotify_url}
            apple_url={item.apple_url}
            tidal_url={item.tidal_url}
            deezer_url={item.deezer_url}
          />
        ))}
        <div />
        <div className="container">
          {data.map((d) => (
            <div
              className={active ? 'album active' : 'album'}
              onClick={() => setActive(d.id)}
            >
              <img className="albumCover" src={d.img_url} alt={d.alt_attr} />
              <p className="p2Album">{d.title}</p>
              <p>Play on</p>
              <div className="playBtnContainer">
                <a
                  className="playBtn"
                  href={d.spotify_url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-spotify"></i>
                  <span> Spotify</span>
                </a>
                <a
                  className="playBtn"
                  href={d.apple_url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="logoSmall"
                    src={
                      process.env.PUBLIC_URL + '/assets/apple_music_logo.png'
                    }
                    alt="Apple Logo"
                  />
                  <span> Apple Music</span>
                </a>
                <a
                  className="playBtn"
                  href={d.tidal_url}
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
                  href={d.deezer_url}
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
    </div>
  );
}
