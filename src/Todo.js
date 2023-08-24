import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import './todo.css';

import logoNegro from './logo-hiit-math-negro2.png';

function Todo() {
  const [showSocialButtons, setShowSocialButtons] = useState(false);
  const [showAboutUsButtons, setShowAboutUsButtons] = useState(false);

  const redesSocialesRef = useRef(null);

  const toggleSocialButtons = () => {
    setShowSocialButtons(!showSocialButtons);

    if (showSocialButtons && redesSocialesRef.current) {
      redesSocialesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAboutUsButtons = () => {
    setShowAboutUsButtons(!showAboutUsButtons);
  };

  return (
    <section className="todo">
      <img src={logoNegro} className="logo" />
      <div className="titulo">
        <h4>By Personal Training</h4>
      </div>
      <div className="cont-formulario">
        <button><Link to="/formulario">Formulario</Link></button>
        <button onClick={toggleAboutUsButtons}><a href="#">Sobre Nosotros</a></button>
        {showAboutUsButtons && (
          <div className="about-us-buttons">
            <button className="btn-nosotros">  <Link to="/servicios">Servicio</Link>  </button>
            <button className="btn-nosotros">  <Link to="/equipo">Equipo</Link> </button>
            <button className="btn-nosotros">  <Link to="/conocenos">Conocenos</Link> </button>
          </div>
        )}
        <button onClick={toggleSocialButtons} className="btn-contacto">Contactanos</button>
        {showSocialButtons && (
          <div className="redes-sociales" ref={redesSocialesRef}>
            <button className="btn-redes"><a href="https://wa.me/34692205356">Whatsapp</a></button>
            <button className="btn-redes"><a href="https://instagram.com/personal_training88">Instagram</a></button>
            <button className="btn-redes"><a href="mailto:hiitmath2023@gmail.com">Gmail</a></button>
          </div>
        )}
      </div>
      <footer>
      </footer>
    </section>
  );
}

export default Todo;
