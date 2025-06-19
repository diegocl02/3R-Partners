// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom'; // Descomenta si ya lo estás usando

function Navbar() {
  const { t, i18n } = useTranslation();
  // const navigate = useNavigate(); // Descomenta si ya lo estás usando

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    // navigate('/login'); // Usa esto si ya tienes React Router
    alert('Redirigiendo a la página de Login...');
  };

  // Determinar el idioma actual para mostrar en el botón
  const currentLanguageText = i18n.language === 'es' ? 'Español' : 'English';

  // Función para obtener la ruta de la imagen SVG de la bandera
  const getFlagSrc = (lang) => {
    if (lang === 'es') {
      return '/flags/es.svg'; // Ruta a la bandera de España
    } else {
      return '/flags/us.svg'; // Ruta a la bandera de Estados Unidos (por defecto para 'en')
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/3R.svg" alt="3R Partners" className="logo-img" />
        </a>

        <div className="navbar-actions">
          <div className="language-dropdown" ref={dropdownRef}>
            <button className="language-toggle-btn" onClick={toggleDropdown}>
              {/* CAMBIO: Usar etiqueta <img> para la bandera SVG */}
              <img
                src={getFlagSrc(i18n.language)}
                alt={`${currentLanguageText} Flag`}
                className="flag-icon"
              />
              {currentLanguageText}
              <span className="arrow-icon">{isDropdownOpen ? ' ▲' : ' ▼'}</span>
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                {/* Renderiza el botón solo para el idioma que NO es el actual */}
                {i18n.language === 'es' && (
                  <button onClick={() => changeLanguage('en')}>
                    {/* CAMBIO: Usar etiqueta <img> para la bandera SVG */}
                    <img src={getFlagSrc('en')} alt="English Flag" className="flag-icon" /> English
                  </button>
                )}
                {i18n.language === 'en' && (
                  <button onClick={() => changeLanguage('es')}>
                    {/* CAMBIO: Usar etiqueta <img> para la bandera SVG */}
                    <img src={getFlagSrc('es')} alt="Español Flag" className="flag-icon" /> Español
                  </button>
                )}
              </div>
            )}
          </div>

          <button className="login-button" onClick={handleLoginClick}>
            {t('loginButton')}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
