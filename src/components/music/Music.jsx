// import MusicList from "../musicList/MusicList";
import "./music.scss";

export default function Music() {

  // const list = [
  //   {
  //     id: "por_el_mundo",
  //     title: "Por El Mundo (2016)",
  //   },
  //   {
  //     id: "conmigo",
  //     title: "Conmigo (2013)",
  //   },
  //   {
  //     id: "camina",
  //     title: "Camina (2011)",
  //   },
  //   {
  //     id: "faela_faela",
  //     title: "Faela (2011)",
  //   },
  // ];

  return (
    <div className="music" id="music">
      <h1>Music</h1>
      {/* <ul>
        {list.map((item) => (
          <MusicList
            title={item.title}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="container">
        <div className="album">
          <img className="albumCover" src={process.env.PUBLIC_URL + "/assets/cover_faela_porelmundo.jpg"} alt="Faela Por El Mundo Album Cover" />
          <p className="p2Album">Por El Mundo (2016)</p>
          <p>Play on</p>
          <div className="playBtnContainer">
          <a className="playBtn" href="https://open.spotify.com/album/284kSBf2m7IuUFRWIruyIe?si=GZfOHn2NSS27Rnk-AGjymg" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-spotify"></i>
            <span> Spotify</span>
          </a>
          <a className="playBtn" href="https://music.apple.com/se/album/por-el-mundo/1149909541?l=en" rel="noreferrer" target="_blank">
          <img className="logoSmall" src={process.env.PUBLIC_URL + "/assets/apple_music_logo.png"} alt="Tidal Logo" />
            <span> Apple Music</span>
          </a>
          <a className="playBtn" href="https://tidal.com/browse/album/88309927" rel="noreferrer" target="_blank">
            <img className="logoSmall" src={process.env.PUBLIC_URL + "/assets/tidal_logo.png"} alt="Tidal Logo" />
            <span> Tidal</span>
          </a>
          <a className="playBtn" href="https://deezer.page.link/D2KWRqPyVXERbSdD9" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-deezer"></i>
            <span> Deezer</span>
          </a>
          </div>
        </div>
        <div className="album">
          <img className="albumCover" src={process.env.PUBLIC_URL + "/assets/cover_faela_conmigo.jpg"} alt="Faela Conmigo Album Cover" />
          <p className="p2Album">Conmigo (2013)</p>
          <p>Play on</p>
          <div className="playBtnContainer">
          <a className="playBtn" href="https://open.spotify.com/album/76w4d2atxRlez2xwd3AWXg?si=O3QHNpQrQyqSzMItu56q7A" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-spotify"></i>
            <span> Spotify</span>
          </a>
          <a className="playBtn" href="https://music.apple.com/se/album/conmigo/603066344?l=en" rel="noreferrer" target="_blank">
          <img className="logoSmall" src={process.env.PUBLIC_URL + "/assets/apple_music_logo.png"} alt="Apple Music Logo" />
            <span> Apple Music</span>
          </a>
          <a className="playBtn" href="https://tidal.com/browse/album/88307663" rel="noreferrer" target="_blank">
            <img className="logoSmall" src={process.env.PUBLIC_URL + "/assets/tidal_logo.png"} alt="Tidal Logo" />
            <span> Tidal</span>
          </a>
          <a className="playBtn" href="https://deezer.page.link/yMYJffju3vanGa5ZA" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-deezer"></i>
            <span> Deezer</span>
          </a>
          </div>
        </div>
        <div className="album">
          <img className="albumCover" src={process.env.PUBLIC_URL + "/assets/cover_faela_camina.jpg"} alt="Faela Camina Album Cover" />
          <p className="p2Album">Camina (2011)</p>
          <p>Play on</p>
          <div className="playBtnContainer">
          <a className="playBtn" href="https://open.spotify.com/album/5mBKYplAT3AxYgRaNYAzqT?si=H380_hFVSH2bSR8JHOiHHg" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-spotify"></i>
            <span> Spotify</span>
          </a>
          <a className="playBtn" href="https://music.apple.com/se/album/camina/471586220?l=en" rel="noreferrer" target="_blank">
          <img className="logoSmall" src={process.env.PUBLIC_URL + "/assets/apple_music_logo.png"} alt="Apple Music Logo" />
            <span> Apple Music</span>
          </a>
          <a className="playBtn" href="https://tidal.com/browse/album/88307356" rel="noreferrer" target="_blank">
            <img className="logoSmall" src={process.env.PUBLIC_URL + "/assets/tidal_logo.png"} alt="Tidal Logo" />
            <span> Tidal</span>
          </a>
          <a className="playBtn" href="https://deezer.page.link/VK9MbyHyoX5cwRVL8" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-deezer"></i>
            <span> Deezer</span>
          </a>
          </div>
        </div>
        <div className="album">
          <img className="albumCover" src={process.env.PUBLIC_URL + "/assets/cover_faela_faela.jpg"} alt="Faela Faela Album Cover" />
          <p className="p2Album">Faela (2011)</p>
          <p>Play on</p>
          <div className="playBtnContainer">
          <a className="playBtn" href="https://open.spotify.com/album/2F8NRYaXrYw3Xc84UaTxrM?si=_fShO3J8Q_-qzwa7G2MRog" rel="noreferrer" target="_blank">
            <i className="fa-brands fa-spotify"></i>
            <span> Spotify</span>
          </a>
          <a className="playBtn" href="https://music.apple.com/se/album/faela/451016033?l=en" rel="noreferrer" target="_blank">
          <img className="logoSmall" src={process.env.PUBLIC_URL + "/assets/apple_music_logo.png"} alt="Apple Music Logo" />
            <span> Apple Music</span>
          </a>
          <a className="playBtn" href="https://tidal.com/browse/album/88307345" rel="noreferrer" target="_blank">
            <img className="logoSmall" src={process.env.PUBLIC_URL + "/assets/tidal_logo.png"} alt="Tidal Logo" />
            <span> Tidal</span>
          </a>
          <a className="playBtn" href="https://deezer.page.link/P7YfL3bfw2YoeASb9" rel="noreferrer" target="_blank">
          <i className="fa-brands fa-deezer"></i>
            <span> Deezer</span>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}
