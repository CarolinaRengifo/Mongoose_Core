import { useState } from 'react'
import Cancion from './components/Cancion.jsx';
import Playlist from './components/Playlist.jsx';
import Header from './components/Header.jsx';
import Addcancion from './components/Addcancion.jsx';
import Addplaylist from './components/Addplaylist.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Cancion />} />
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/add-song" element={<Addcancion />} />
        <Route path="/add-playlist" element={<Addplaylist />} />
      </Routes>
    </Router>
  );
}

export default App;