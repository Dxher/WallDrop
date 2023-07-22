import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
  },
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

