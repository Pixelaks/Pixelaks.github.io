import { Routes, Route } from 'react-router-dom';
import TechHome from './components/TechHome';
import Main from './components/Main'; // This is your existing games list
import GameDetails from './components/GameDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* The new landing page */}
        <Route exact path="/" element={<TechHome />} />
        
        {/* Your current website content moved here */}
        <Route path="/games" element={<Main />} />
        
        {/* Details page stays the same */}
        <Route path="/game-details/:id" element={<GameDetails />} />
      </Routes>
    </div>
  );
}
