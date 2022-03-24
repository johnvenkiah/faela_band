import "./topnav.scss"

export default function Topnav() {
  return (
    <div className="topnav">
        <div className="wrapper">
            <div className="left">
                <a href="#home" className="main-logo">FAELA</a>
                <div className="menuItem">
                  <i className="menu-icon fa-solid fa-headphones"></i>
                  <span>Listen</span>
                </div>
                <div className="menuItem">
                  <i className="menu-icon fa-solid fa-champagne-glasses"></i>
                  <span>Book Us</span>
                </div>
            </div>
            <div className="right">
              <div className="hamburger">
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}
