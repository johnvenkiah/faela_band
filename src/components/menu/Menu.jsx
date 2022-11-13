import { Link } from 'react-router-dom';
import SmLinks from '../smlinks/SmLinks';
import './menu.scss';

export default function Menu({ openMenu, setOpenMenu }) {
  const menuItems = {
    '/': 'Home',
    '/music': 'Music',
    '/videos': 'Videos',
    '/live': 'Live',
    '/about': 'About',
    '/contact': 'Contact/Press',
  };

  const menuMarkup = Object.keys(menuItems).map((nr) => (
    <li key={nr.toString()} onClick={() => setOpenMenu(false)}>
      <Link to={nr}>{menuItems[nr]}</Link>
    </li>
  ));

  return (
    <div className={'menu ' + (openMenu && 'active')}>
      <SmLinks />
      <ul>{menuMarkup}</ul>
    </div>
  );
}
