import castle from './assets/howlsMovingCastle.jpg';
import soot from './assets/soot.png';
import noFace from './assets/noface.png';
import './App.css';
import Navbar from './components/ui/Navbar';
import ProfileCarousel from './components/ui/ProfileCarousel';
import Socials from './components/ui/socials';
import AboutCard from './components/ui/cards/AboutCard';
import EducationCard from './components/ui/cards/EducationCard';
import ProjectCard from './components/ui/cards/ProjectCard';


function App() {
  return (
    <div className="relative" id="home">
      <Navbar />
      
      {/*Background */}
      <div
        className="fixed w-full h-full bg-cover bg-center "
        style={{ backgroundImage: `url(${castle})` }}
      />
      

      {/* Scrollable content */}
      <div className="relative pl-8 pr-8 " >
        <div className="min-h-screen w-full flex ">
          {/* Left side */}
          <div className="flex-1 flex items-center justify-center pr-32">
            <div>
              <h1 className="text-9xl font-bold text-white pb-11 ">hello,👋</h1>
              <h1 className="text-9xl font-bold text-white">i'm patrick</h1>
              <div className='mt-16 ml-16'>
                <Socials />
              </div>
              
            </div>
            
          </div>

          {/* Right side */}
          <div className="p-16">
            <ProfileCarousel />
          </div>
      </div>

        <div className="flex items-center justify-center">
           <img className="w-1/8 h-1/8" src={soot} alt="Soot Sprite"/>
        </div>

        <AboutCard />
        <EducationCard />
        
        <div className="pt-24" id="projects"></div>
        <div className="flex flex-row items-center gap-4 pb-8">
           <h1 className="text-8xl pl-8 font-stone-900">Projects</h1>
           <img className="w-1/8 h-1/8" src={noFace} />
        </div>
       
        <ProjectCard />
    

      </div>
    </div>
  );
}

export default App;
