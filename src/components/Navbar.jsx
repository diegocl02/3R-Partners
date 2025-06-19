// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Función para manejar el clic en el botón de Login
  const handleLoginClick = () => {
    // Aquí puedes redirigir al usuario a la página de login
    // O abrir un modal de login
    console.log("Botón de Login clickeado!");
    // Ejemplo de redirección (si usas React Router):
    // navigate('/login');
    // Ejemplo de alerta simple:
    alert('Redirigiendo a la página de Login...');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/3R.svg" alt="3R Partners" className="logo-img" />
        </a>

        {/* Agrupar los botones de Idioma y Login */}
        <div className="navbar-actions"> {/* <-- Nueva clase para agrupar */}
          {/* Sección del Selector de Idioma */}
          <div className="language-switcher">
            <button
              onClick={() => changeLanguage('es')}
              disabled={i18n.language === 'es'}
              className={i18n.language === 'es' ? 'active-lang' : ''}
            >
              Español
            </button>
            <button
              onClick={() => changeLanguage('en')}
              disabled={i18n.language === 'en'}
              className={i18n.language === 'en' ? 'active-lang' : ''}
            >
              English
            </button>
          </div>

          {/* Botón de Login */}
          <button className="login-button" onClick={handleLoginClick}>
            {t('loginButton')} {/* <-- Traducimos el texto del botón de Login */}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
