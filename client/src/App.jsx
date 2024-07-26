import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewGame from './pages/NewGame';
import TopPlayers from './pages/TopPlayers';
import Nav from './components/Nav';
import './App.css';
import Questions from './components/Questions';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newgame" element={<NewGame />} />
          <Route path="/topplayers" element={<TopPlayers />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
