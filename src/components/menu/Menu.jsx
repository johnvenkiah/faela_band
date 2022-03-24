import "./menu.scss"

export default function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={"menu " + (openMenu && "active")}>
        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#music">Music</a>
            </li>
            <li>
                <a href="#videos">Videos</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
