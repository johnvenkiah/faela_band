import "./topnav.scss"

export default function Topnav({ openMenu, setOpenMenu }) {
  return (
    <div className={"topnav " + (openMenu && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#home" className="mainLogo">
                  <img src={process.env.PUBLIC_URL + "/assets/faela_logo_white.png"} alt="Faela Logo" className="logoImg" />
                  <img src={process.env.PUBLIC_URL + "/assets/faela_logo_white.png"} alt="Faela Logo" className="logoImgInner" />
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
              <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}
