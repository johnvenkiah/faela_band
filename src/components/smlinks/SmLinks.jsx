import './smlinks.scss';

export default function SmLinks({ openMenu, setOpenMenu }) {
  const smLinkData = [
    {
      url: 'https://www.facebook.com/faelaband',
      ariaLabel: 'Faela on Facebook',
      icon: 'fa-facebook',
    },
    {
      url: 'https://www.instagram.com/faelaband/',
      ariaLabel: 'Faela on Instagram',
      icon: 'fa-instagram',
    },
    {
      url: 'https://open.spotify.com/artist/3C8mjeTAUNwr1PY9BkKyRc?si=nsEpZvkdQz-q2UOTATXAlQ',
      ariaLabel: 'Faela on Spotify',
      icon: 'fa-spotify',
    },
    {
      url: 'https://www.youtube.com/channel/UCs-Bc_VtGlnQJLEahko6YdQ',
      ariaLabel: 'Faela on YouTube',
      icon: 'fa-youtube',
    },
  ];

  const smMarkUp = smLinkData.map((item, i) => (
    <div key={i} className="smIconWrapper">
      <a
        href={item.url}
        ariaLabel={item.ariaLabel}
        target="_blank"
        rel="noreferrer"
        className="navLink"
      >
        <i className={'menuIcon fa-brands ' + item.icon}></i>
      </a>
    </div>
  ));

  return <div className="smLinks">{smMarkUp}</div>;
}
