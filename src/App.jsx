import Nav from "./Nav";
import Podcast from './Podcast';
import WirelessMic from './WirelessMic';
import StudioMic from './StudioMic';
import DS2 from './DS2';
import VideoMicro from './VideoMicro';
import Blog from "./Blog";
import Range from "./Range";
import Footer from "./footer";

function App() {
  return (
    <>
     <Nav />
     <Podcast/>
     <WirelessMic/>
     <StudioMic/>
     <DS2/>
     <VideoMicro/>
     <Blog />
     <Range />
     <Footer />
    </>
  );
}

export default App;
