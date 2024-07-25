import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewGame from './pages/NewGame';
import TopPlayers from './pages/TopPlayers';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newgame" element={<NewGame />} />
          <Route path="/topplayers" element={<TopPlayers />} />
          <Route path="/questions" element={<TopPlayers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
