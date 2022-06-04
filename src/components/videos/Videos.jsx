import './videos.scss';

export default function Videos() {
  const video_urls = [
    {
      title: 'Perro Fiel',
      url: 'zOrhSgxerjs',
      description: "Faela's new song with footage from Boa Vista, Cap Verde",
    },
    {
      title: 'Samuelito',
      url: 't7GJXdiU2KI',
      description: "A tribute to Faela's old friend in Switzerland",
    },
    {
      title: 'Efige Efige',
      url: 'aTp9XAqkFS0',
      description:
        "Faela's take on a Greek tune by Stelios Kazantzidis from 1980",
    },
    {
      title: 'Live from Hildesheim',
      url: 'Ywgn4aaAXWU?start=633',
      description: 'A live concert streamed from Germany, 2021',
    },
  ];
  return (
    <div className="videos" id="videos">
      <h1>Videos</h1>
      <div className="videoContainer">
        {video_urls.map((item) => (
          <>
            <div className="videoWrapper">
              <h3>{item.title}</h3>
              <div className="textWrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${item.url}?wmode=transparent`}
                  title={`YouTube video - ${item.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  wmode="opaque"
                ></iframe>
                <p>{item.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
