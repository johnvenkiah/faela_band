import Topnav from "./components/topnav/Topnav";
import Home from "./components/home/Home";
import Music from "./components/music/Music";
import Videos from "./components/videos/Videos";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import "./app.scss";


function App() {
  return (
    <div className="app">
      <Topnav/>
      <div className="sections">
        <Home/>
        <Music/>
        <Videos/>
        <About/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
