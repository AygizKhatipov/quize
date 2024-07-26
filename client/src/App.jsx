import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewGame from './pages/NewGame';
import Error from './pages/Error';
import TopPlayers from './pages/TopPlayers';
import Nav from './components/Nav';
import './App.css';
import Questions from './components/Questions';
import React, { useState } from 'react'


function App() {
  const [users, setUsers]= useState(null)
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newgame" element={<NewGame />} />
          <Route path="/topplayers" element={<TopPlayers users={users} setUsers={setUsers} />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
