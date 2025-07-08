

// src/i18n/config.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


// Importa tus traducciones

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Los recursos de traducción
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa la instancia de i18n a react-i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma de respaldo si el detectado no está disponible
    debug: true, // Habilita el modo debug (útil durante el desarrollo)

    interpolation: {
      escapeValue: false // React ya escapa por defecto los valores
    }
  });

export default i18n;
