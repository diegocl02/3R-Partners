import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next'; // <-- Importa useTranslation

function App() {
  const { t } = useTranslation(); // <-- Inicializa el hook de traducción

  const [showContactLinks, setShowContactLinks] = useState(false);

  const handleLearnMoreClick = (event) => {
    event.preventDefault();
    setShowContactLinks(true);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="videos/background.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video
        </video>
        <div className="content-wrapper">
          <div className="content">
            <h1>{t('welcomeMessage')}</h1> {/* <-- Traduce el título */}
            <p>{t('sloganPart1')}</p>      {/* <-- Traduce el primer párrafo */}
            <p>{t('sloganPart2')}</p>      {/* <-- Traduce el segundo párrafo */}

            {!showContactLinks ? (
              <a href="/learn-more" className="btn-hero" onClick={handleLearnMoreClick}>
                {t('contactUsButton')} {/* <-- Traduce el texto del botón */}
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
    </div>
  );
}

export default App;
