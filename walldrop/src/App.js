import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Join from './components/Join';
import Upload from './components/Upload';
import WallpaperDetails from './components/WallpaperDetails';
import NotFound from './components/NotFound';
import FAQ from './components/FAQ';
import LanguageSwitcher from './components/LanguageSwitcher';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
  },
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Set the fallback language
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  return (
    <Router>
      <LanguageSwitcher />
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/join" element={<Join />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/wallpapers/:id" element={<WallpaperDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
