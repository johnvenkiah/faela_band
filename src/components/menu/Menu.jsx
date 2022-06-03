import './menu.scss';
import SmLinks from '../smlinks/SmLinks';

export default function Menu({ openMenu, setOpenMenu }) {
  const menuItems = {
    '#home': 'Home',
    '#music': 'Music',
    '#videos': 'Videos',
    '#live': 'Live',
    '#about': 'About',
    '#contact': 'Contact',
  };
  const menuMarkup = Object.keys(menuItems).map((key) => (
    <li onClick={() => setOpenMenu(false)}>
      <a href={key}>{menuItems[key]}</a>
    </li>
  ));
  return (
    <div className={'menu ' + (openMenu && 'active')}>
      <SmLinks />
      <ul>{menuMarkup}</ul>
    </div>
  );
}
