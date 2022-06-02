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
      img_url: '/assets/cover_faela_porelmundo.jpg',
      alt_attr: 'Faela Por El Mundo Album Cover',
    },
    {
      id: 'conmigo',
      title: 'Conmigo (2013)',
      img_url: '/assets/cover_faela_conmigo.jpg',
      alt_attr: 'Faela Conmigo Album Cover',
    },
    {
      id: 'camina',
      title: 'Camina (2011)',
      img_url: '/assets/cover_faela_camina.jpg',
      alt_attr: 'Faela Camina Album Cover',
    },
    {
      id: 'faela_faela',
      title: 'Faela (2011)',
      img_url: '/assets/cover_faela_faela.jpg',
      alt_attr: 'Faela Faela Album Cover',
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
      </div>
    </div>
  );
}
