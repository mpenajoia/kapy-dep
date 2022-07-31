import Content from "./components/Content";
import Participate from "./components/Participate";
import Recent from "./components/Recent";
import TopBar from "./components/TopBar";
import mascot from './img/mascot.png'


function App() {
  return (
    <div className="w-full flex flex-col items-center gap-5 relative pb-20">
      <TopBar />
      <h1 className="text-6xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-b from-[#EFBC71] via-[#F17E6F] to-[#E176FC] leading-tight text-center">Kapybara Token IDO</h1>
      <Content />
      <Participate />
      <div className="w-full lg:w-[1000px] flex flex-col items-center">
        <Recent />
      </div>

      <div className="fixed -z-50 left-0 bottom-0">
        <img className="opacity-40 w-[85%]" src={mascot} alt="KAPY Mascot" />
      </div>
    </div>
  );
}

export default App;
