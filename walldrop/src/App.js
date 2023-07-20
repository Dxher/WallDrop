import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Join from './components/Join';
import Upload from './components/Upload';
import WallpaperDetails from './components/WallpaperDetails';


const App = () => {
    
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/join" element={<Join />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/wallpapers/:id" element={<WallpaperDetails />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
