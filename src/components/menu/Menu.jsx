import "./menu.scss"

export default function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={"menu " + (openMenu && "active")}>
        <ul>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#home">Home</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#music">Music</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#videos">Videos</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#about">About</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
