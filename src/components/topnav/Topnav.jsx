import { Link } from 'react-router-dom';
import './topnav.scss';

export default function Topnav({ openMenu, setOpenMenu }) {
  return (
    <div className={'topnav ' + (openMenu && 'active')}>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="mainLogo">
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
          </Link>
          <div className="menuItem">
            <Link to="/music" className="navLink">
              <i className="menuIcon fa-solid fa-headphones"></i>
              <span>Listen</span>
            </Link>
          </div>
          <div className="menuItem">
            <Link to="/contact" className="navLink">
              <i className="menuIcon fa-solid fa-envelope"></i>
              <span>Contact/Press</span>
            </Link>
          </div>
        </div>
        <div className="right">
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
