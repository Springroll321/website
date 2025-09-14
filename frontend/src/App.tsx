import castle from './assets/howlsMovingCastle.jpg';
import './App.css';

function App() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${castle})`,
      }}
      
    ></div>
  );
}

export default App;