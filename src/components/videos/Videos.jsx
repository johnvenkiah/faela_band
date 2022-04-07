import "./videos.scss"

export default function Videos() {
  return (
    <div className="videos" id="videos">
      <h1>Videos</h1>
      <div className="videoContainer">
      <iframe src="https://www.youtube.com/embed/zOrhSgxerjs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe src="https://www.youtube.com/embed/t7GJXdiU2KI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe src="https://www.youtube.com/embed/aTp9XAqkFS0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe src="https://www.youtube.com/embed/Ywgn4aaAXWU?start=642" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}
