import './about.scss';

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="mainContainer">
        <div className="imageContainer">
          <div className="img">
            <img
              src={process.env.PUBLIC_URL + '/assets/faela_live_bw.jpg'}
              alt=""
            />
          </div>
          <div className="img">
            <img
              src={process.env.PUBLIC_URL + '/assets/faela_live_1.jpg'}
              alt=""
            />
          </div>
        </div>
        <article className="textContainer">
          <section>
            <p className="aboutText">
              Faela built their fanbase on endless touring, great songwriting
              and explosive live shows. They are one of those bands who remind
              us of the unifying power of music, making audiences sing and dance
              together regardless of age, ethnicity or religion.
            </p>
            <p className="aboutText aboutTextTwo">
              The six musicians with roots in Argentina, England, Brazil, Spain
              and Sweden met in Malmö, Sweden - each member with a unique
              musical and artistic background. Out of this emerged the liveshow
              and the sound of Faela! A ruthless mixture of Cumbia, Jazz, Rock,
              and much more.
            </p>
            <p className="aboutText">
              The band formed in 2007 in Malmö, Sweden. Since then they have
              released 4 albums and 1 EP, played nearly 1000 shows at festivals
              and in clubs all over Europe and in South America. The ever
              growing fan base show that Faela truly is irresistible!
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
