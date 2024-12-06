import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de correo */}
        <div className="footer-email">
          <h4>Contacto:</h4>
          <p>Email: <a href="mailto:correo@gmail.com">morajhon1928@gmail.com</a></p>
        </div>

        {/* Sección de redes sociales */}
        <div className="footer-social">
          <h4>¡Síguenos en nuestras redes!</h4>
          <a href="https://www.facebook.com/jhonjairo.moraibarra?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.instagram.com/jhon_97_adc/profilecard/?igsh=MWVmbDU1bGxnaDBqaw==" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        {/* Chatbox */}
        <div className="footer-chatbox">
          <h4>¿Tienes dudas?</h4>
          <textarea 
            className="chatbox-input" 
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
          <button className="chatbox-btn">Enviar</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
