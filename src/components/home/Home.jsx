import "./home.scss"

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src={process.env.PUBLIC_URL + "/assets/cover_faela_lab.jpg"} alt="CD-cover for album Latin Animal Beats" />
        </div>
      </div>
      <div className="right">
        <div className="homeRightContainer">
          <h1>Faela's new album</h1>
          <h2>Latin Animal Beats</h2>
          <h3>Out Summer 2022</h3>
            <a className="btnMain" href="#music">
            <p>
                Continue to music
            </p>
            <i className="fa-solid fa-chevron-down"></i>
            </a>
        </div>
      </div>
    </div>
  )
}
