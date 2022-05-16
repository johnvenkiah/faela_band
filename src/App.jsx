import Topnav from './components/topnav/Topnav';
import Home from './components/home/Home';
import Music from './components/music/Music';
import Videos from './components/videos/Videos';
import Live from './components/live/Live';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import './app.scss';
import { useState } from 'react';
import Menu from './components/menu/Menu';
// import bgImage from './faela_live_1.jpg';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function setDocHeight() {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight / 100}px`
    );
  }

  window.addEventListener('resize', setDocHeight());
  window.addEventListener('orientationchange', setDocHeight());

  setDocHeight();

  return (
    <div className="app">
      <Topnav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <div className="background"></div>
        <Home />
        <Music />
        <Videos />
        <Live />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
