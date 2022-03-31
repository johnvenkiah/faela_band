import "./music.scss"

export default function Music() {
  return (
    <div className="music" id="music">
      <h1>Music</h1>
      <ul>
      <li className="active">Por El Mundo (2016)</li>
        <li>Con Miga (2013)</li>
        <li>Camina (2011)</li>
        <li>Faela (2011)</li>
      </ul>
      <div className="container">
        <div className="album">
          <img className="albumCover" src="/assets/cover_faela_porelmundo.jpg" alt="Faela Por El Mundo Album Cover" />
          <p className="p2Album">Por El Mundo (2016)</p>
          <p>Play on</p>
          <div className="playBtnContainer">
          <a className="playBtn" href="https://open.spotify.com/album/284kSBf2m7IuUFRWIruyIe?si=GZfOHn2NSS27Rnk-AGjymg" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-spotify"></i>
            <span> Spotify</span>
          </a>
          <a className="playBtn" href="https://music.apple.com/se/album/por-el-mundo/1149909541?l=en" rel="noreferrer" target="_blank">
          <img className="logoSmall" src="/assets/apple_music_logo.png" alt="Tidal Logo" />
            <span> Apple Music</span>
          </a>
          <a className="playBtn" href="https://tidal.com/browse/album/88309927" rel="noreferrer" target="_blank">
            <img className="logoSmall" src="/assets/tidal_logo.png" alt="Tidal Logo" />
            <span> Tidal</span>
          </a>
          <a className="playBtn" href="https://deezer.page.link/D2KWRqPyVXERbSdD9" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-deezer"></i>
            <span> Deezer</span>
          </a>
          </div>
        </div>
        <div className="album">
          <img className="albumCover" src="/assets/cover_faela_conmigo.jpg" alt="Faela Por El Mundo Album Cover" />
          <p className="p2Album">Conmigo (2013)</p>
          <p>Play on</p>
          <div className="playBtnContainer">
          <a className="playBtn" href="https://open.spotify.com/album/76w4d2atxRlez2xwd3AWXg?si=O3QHNpQrQyqSzMItu56q7A" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-spotify"></i>
            <span> Spotify</span>
          </a>
          <a className="playBtn" href="https://music.apple.com/se/album/conmigo/603066344?l=en" rel="noreferrer" target="_blank">
          <img className="logoSmall" src="/assets/apple_music_logo.png" alt="Tidal Logo" />
            <span> Apple Music</span>
          </a>
          <a className="playBtn" href="https://tidal.com/browse/album/88307663" rel="noreferrer" target="_blank">
            <img className="logoSmall" src="/assets/tidal_logo.png" alt="Tidal Logo" />
            <span> Tidal</span>
          </a>
          <a className="playBtn" href="https://deezer.page.link/yMYJffju3vanGa5ZA" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-deezer"></i>
            <span> Deezer</span>
          </a>
          </div>
        </div>
        <div className="album">
          <img className="albumCover" src="/assets/cover_faela_camina.jpg" alt="Faela Por El Mundo Album Cover" />
          <p className="p2Album">Camina (2011)</p>
          <p>Play on</p>
          <div className="playBtnContainer">
          <a className="playBtn" href="https://open.spotify.com/album/5mBKYplAT3AxYgRaNYAzqT?si=H380_hFVSH2bSR8JHOiHHg" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-spotify"></i>
            <span> Spotify</span>
          </a>
          <a className="playBtn" href="https://music.apple.com/se/album/camina/471586220?l=en" rel="noreferrer" target="_blank">
          <img className="logoSmall" src="/assets/apple_music_logo.png" alt="Tidal Logo" />
            <span> Apple Music</span>
          </a>
          <a className="playBtn" href="https://tidal.com/browse/album/88307356" rel="noreferrer" target="_blank">
            <img className="logoSmall" src="/assets/tidal_logo.png" alt="Tidal Logo" />
            <span> Tidal</span>
          </a>
          <a className="playBtn" href="https://deezer.page.link/VK9MbyHyoX5cwRVL8" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-deezer"></i>
            <span> Deezer</span>
          </a>
          </div>
        </div>
        <div className="album">
          <img className="albumCover" src="/assets/cover_faela_faela.jpg" alt="Faela Por El Mundo Album Cover" />
          <p className="p2Album">Faela (2011)</p>
          <p>Play on</p>
          <div className="playBtnContainer">
          <a className="playBtn" href="https://open.spotify.com/album/2F8NRYaXrYw3Xc84UaTxrM?si=_fShO3J8Q_-qzwa7G2MRog" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-spotify"></i>
            <span> Spotify</span>
          </a>
          <a className="playBtn" href="https://music.apple.com/se/album/faela/451016033?l=en" rel="noreferrer" target="_blank">
          <img className="logoSmall" src="/assets/apple_music_logo.png" alt="Tidal Logo" />
            <span> Apple Music</span>
          </a>
          <a className="playBtn" href="https://tidal.com/browse/album/88307345" rel="noreferrer" target="_blank">
            <img className="logoSmall" src="/assets/tidal_logo.png" alt="Tidal Logo" />
            <span> Tidal</span>
          </a>
          <a className="playBtn" href="https://deezer.page.link/P7YfL3bfw2YoeASb9" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-deezer"></i>
            <span> Deezer</span>
          </a>
          </div>
        </div>
        {/* <div className="iframeContainer">
          <h3>Por El Mundo</h3>
          <iframe className="iframes" title="Faela Por El Mundo" src="https://open.spotify.com/embed/album/284kSBf2m7IuUFRWIruyIe?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div className="iframeContainer">
          <h3>Conmigo</h3>
          <iframe className="iframes" title="Faela Conmigo" src="https://open.spotify.com/embed/album/76w4d2atxRlez2xwd3AWXg?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div className="iframeContainer">
          <h3>Camina</h3>
          <iframe className="iframes" title="Faela Camina" src="https://open.spotify.com/embed/album/5mBKYplAT3AxYgRaNYAzqT?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div className="iframeContainer">
          <h3>Faela</h3>
          <iframe className="iframes" title="Faela Faela" src="https://open.spotify.com/embed/album/2F8NRYaXrYw3Xc84UaTxrM?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div> */}

      </div>
    </div>
  )
}
