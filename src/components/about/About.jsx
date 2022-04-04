import "./about.scss"

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About</h1>
        <div className="mainContainer">
          <div className="textContainer">
          <p className="aboutText">
            Faela has built their fanbase on endless touring, great songwriting and explosive live
            shows. They are one of those bands who remind us of the unifying power of music, making
            audiences sing and dance together regardless of any age, ethnicity or religion. Now they
            are booking a release tour for their upcoming album ”Latin Animal Beats”.
          </p>
          <p className="aboutText">
            The six musicians with roots in Argentina, England,Brazil, Spain and Sweden met in the city of
            Malmö in the south of Sweden. Each member with a unique musical and artistic background. Out
            of this emerged the liveshow and the sound of Faela! A ruthless mixture of Cumbia, Jazz, Rock,
            and just about every latin genre there is.
          </p>
          <p className="aboutText">
            The band was formed in 2007 in Malmö,Sweden. Since then they have released 4 albums and 1
            EP. They have played nearly 1000 shows on festivals and clubs all over Europe and in South
            America. The ever growing fan base show that Faela truly is irresistible!
          </p>

          <p className="aboutText">
            <h3>Members:</h3>
            <span className="singleLine">Hugo Coronel - Vocals/Guitar/Trombone/Drums</span>
            <span className="singleLine">Cristoffer Csanady - Vocals/Bass</span>
            <span className="singleLine">Göran Abelli - Trombone</span>
            <span className="singleLine">Rasmus Nyvall - Saxophone</span>
            <span className="singleLine">Gabriel Hermansson - Electric Guitar</span>
            <span className="singleLine">John Venkiah - Keys (on occasion)</span>
          </p>
        </div>
      </div>
    </div>
  )
}
