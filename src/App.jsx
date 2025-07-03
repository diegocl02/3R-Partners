// src/App.jsx
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';

// 1. Importar componentes de React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 2. Importar el componente de la página de Login
import LoginPage from './components/LoginPage';

function App() {
  const { t } = useTranslation();

  const [showContactLinks, setShowContactLinks] = useState(false);

  const handleLearnMoreClick = (event) => {
    event.preventDefault();
    setShowContactLinks(true);
  };

  return (
    // 3. Envolver toda la aplicación con Router
    <Router>
      <div className="App">
        {/* La Navbar se renderiza en todas las rutas */}
        <Navbar />

        {/* 4. Definir las rutas con Routes y Route */}
        <Routes>
          {/* Ruta para la página principal (Home) */}
          <Route
            path="/"
            element={
              <div className="video-background">
                <video autoPlay loop muted>
                  <source src="videos/background.mp4" type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video
                </video>
                <div className="content-wrapper">
                  <div className="content">
                    <h1>{t('welcomeMessage')}</h1>
                    <p>{t('sloganPart1')}</p>
                    <p>{t('sloganPart2')}</p>

                    {!showContactLinks ? (
                      <a href="/learn-more" className="btn-hero" onClick={handleLearnMoreClick}>
                        {t('contactUsButton')}
                      </a>
                    ) : (
                      <div className="contact-links-container">
                        <a
                          href="https://wa.me/TUNUMERODEWHATSAPP?text=Hola!%20Me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
                          className="contact-link whatsapp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-whatsapp"></i> WhatsApp
                        </a>
                        <a href="mailto:TUCORREO@EJEMPLO.COM" className="contact-link email">
                          <i className="fas fa-envelope"></i> Mail
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            }
          />

          {/* Ruta para la página de Login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Si tuvieras otras páginas, las agregarías aquí, por ejemplo: */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
