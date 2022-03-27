import "./topnav.scss"

export default function Topnav({ openMenu, setOpenMenu }) {
  return (
    <div className={"topnav " + (openMenu && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#home" className="mainLogo">
                  <img src="assets/faela_logo_white.png" alt="Faela Logo" className="logoImg" />
                  <img src="assets/faela_logo_white.png" alt="Faela Logo" className="logoImgInner" />
                </a>
                <div className="menuItem">
                  <i className="menuIcon fa-solid fa-headphones"></i>
                  <span>Listen</span>
                </div>
                <div className="menuItem">
                  <i className="menuIcon fa-solid fa-champagne-glasses"></i>
                  <span>Book Us</span>
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
