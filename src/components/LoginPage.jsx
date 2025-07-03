// src/components/LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css';
import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom'; // Descomenta si lo necesitas

function LoginPage() {
  const { t } = useTranslation();
  // const navigate = useNavigate(); // Descomenta si lo necesitas

  // Estados para guardar los valores de los campos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue

    // Aquí puedes añadir tu lógica de autenticación
    // Por ejemplo, enviar 'email' y 'password' a un API
    console.log('Datos enviados:', { email, password });
    alert(`Intentando iniciar sesión con: \nEmail: ${email}\nContraseña: ${password}`);

    // Si la autenticación es exitosa, podrías redirigir al usuario:
    // navigate('/'); // Por ejemplo, a la página de inicio
  };

  return (
    <div className="login-page-container">
      <div className="login-form-card">
        <h2>{t('loginTitle')}</h2>
        <p>{t('loginSubtitle')}</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">{t('emailLabel')}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{t('passwordLabel')}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('passwordPlaceholder')}
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">
            {t('loginButton')}
          </button>
        </form>

        <a href="/forgot-password" className="forgot-password-link">
          {t('forgotPassword')}
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
