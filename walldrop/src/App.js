import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Join from './components/Join';
import Upload from './components/Upload';
import WallpaperDetails from './components/WallpaperDetails';



const App = () => {
    
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/join" element={<Join />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/wallpapers/:id" element={<WallpaperDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
