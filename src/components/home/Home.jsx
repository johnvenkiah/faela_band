import "./home.scss"

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/cover_faela_lab.jpg" alt="CD-cover for album Latin Animal Beats" />
        </div>
      </div>
      <div className="right">
        <div className="homeRightContainer">
          <h1>Faela's new album </h1>
          <h2>Latin Animal Beats</h2>
          <h3>Out this summer</h3>
          </div>
      </div>
    </div>
  )
}
