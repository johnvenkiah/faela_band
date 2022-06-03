import './topnav.scss';

export default function Topnav({ openMenu, setOpenMenu }) {
  return (
    <div className={'topnav ' + (openMenu && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="mainLogo">
            <img
              src={process.env.PUBLIC_URL + '/assets/faela_logo_white.png'}
              alt="Faela Logo"
              className="logoImg"
            />
            <img
              src={process.env.PUBLIC_URL + '/assets/faela_logo_white.png'}
              alt="Faela Logo"
              className="logoImgInner"
            />
          </a>
          <div className="menuItem">
            <a href="#music" className="navLink">
              <i className="menuIcon fa-solid fa-headphones"></i>
              <span>Listen</span>
            </a>
          </div>
          <div className="menuItem">
            <a href="#contact" className="navLink">
              <i className="menuIcon fa-solid fa-champagne-glasses"></i>
              <span>Book Us</span>
            </a>
          </div>
        </div>
        <div className="right">
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
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
