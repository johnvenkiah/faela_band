import Topnav from './components/topnav/Topnav';
import Home from './components/home/Home';
import Music from './components/music/Music';
import Videos from './components/videos/Videos';
import Live from './components/live/Live';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NotFound from './components/not_found/NotFound';

import './app.scss';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';

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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/live" element={<Live />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
