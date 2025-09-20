import castle from './assets/howlsMovingCastle.jpg';
import './App.css';
import Navbar from './components/ui/navbar';
import ProfileCarousel from './components/ui/profileCarousel';

function App() {
  return (
    <div className="relative" id="home">
      <Navbar />
      
      {/*Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${castle})` }}
      />
      

      {/* Scrollable content */}
      <div className="relative pl-16 pr-16" >
        <div className="min-h-screen w-full flex">
          {/* Left side */}
          <div className="flex-1 flex items-center justify-center ">
            <h1 className="text-9xl font-bold text-white">hi i'm patrick</h1>
          </div>

          {/* Right side */}
          <div className="flex-1 flex items-center justify-center  ">
            <ProfileCarousel />
          </div>
      </div>

        <div className="min-h-1/2 flex items-center justify-center" id='aboutMe'>
          <h1 className="text-9xl font-bold text-white">About Me</h1>
        </div>

      </div>
    </div>
  );
}

export default App;
