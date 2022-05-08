import './about.scss';

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="mainContainer">
        <article className="textContainer">
          <section>
            <p className="aboutText">
              Faela has built their fanbase on endless touring, great
              songwriting and explosive live shows. They are one of those bands
              who remind us of the unifying power of music, making audiences
              sing and dance together regardless of any age, ethnicity or
              religion. Now they are booking a release tour for their upcoming
              album ”Latin Animal Beats”.
            </p>
            <p className="aboutText">
              The six musicians with roots in Argentina, England, Brazil, Spain
              and Sweden met in the city of Malmö in the south of Sweden. Each
              member with a unique musical and artistic background. Out of this
              emerged the liveshow and the sound of Faela! A ruthless mixture of
              Cumbia, Jazz, Rock, and just about every latin genre there is.
            </p>
            <p className="aboutText">
              The band was formed in 2007 in Malmö, Sweden. Since then they have
              released 4 albums and 1 EP. They have played nearly 1000 shows on
              festivals and clubs all over Europe and in South America. The ever
              growing fan base show that Faela truly is irresistible!
            </p>
          </section>
          <section>
            <div className="aboutText">
              <h3>Members:</h3>
              <div className="leftCol">
                <p className="singleLine"><strong>Hugo Coronel</strong> - Vocals/Guitar/Trombone/Drums</p>
                <p className="singleLine"><strong>Cristoffer Csanady</strong> - Vocals/Bass</p>
                <p className="singleLine"><strong>Göran Abelli</strong> - Trombone</p>
                <p className="singleLine"><strong>Rasmus Nyvall</strong> - Saxophone</p>
                <p className="singleLine"><strong>Gabriel Hermansson</strong> - Electric Guitar</p>
                <p className="singleLine"><strong>John Venkiah</strong> - Keys</p>
              </div>
              {/* <div className="rightCol">
                <p className="singleLine">- Vocals/Guitar/Trombone/Drums</p>
                <p className="singleLine">- Vocals/Bass</p>
                <p className="singleLine">- Trombone</p>
                <p className="singleLine">- Saxophone</p>
                <p className="singleLine">- Electric Guitar</p>
                <p className="singleLine">- Keys</p>
              </div> */}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
