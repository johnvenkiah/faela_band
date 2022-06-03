import './smlinks.scss';

export default function SmLinks({ openMenu, setOpenMenu }) {
  return (
    <div className="smLinks">
      <div className="smIconWrapper">
        <a
          href="https://www.facebook.com/faelaband"
          target="_blank"
          rel="noreferrer"
          className="navLink"
        >
          <i className="menuIcon fa-brands fa-facebook"></i>
        </a>
      </div>
      <div className="smIconWrapper">
        <a
          href="https://www.instagram.com/faelaband/"
          target="_blank"
          rel="noreferrer"
          className="navLink"
        >
          <i className="menuIcon fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="smIconWrapper">
        <a
          href="https://open.spotify.com/artist/3C8mjeTAUNwr1PY9BkKyRc?si=nsEpZvkdQz-q2UOTATXAlQ"
          className="navLink"
          target="_blank"
          rel="noreferrer"
        >
          <i className="menuIcon fa-brands fa-spotify"></i>
        </a>
      </div>
      <div className="smIconWrapper">
        <a
          href="https://www.youtube.com/channel/UCs-Bc_VtGlnQJLEahko6YdQ"
          target="_blank"
          rel="noreferrer"
          className="navLink"
        >
          <i className="menuIcon fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}
