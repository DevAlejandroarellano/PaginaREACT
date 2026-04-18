import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Parcial2.css';

function Parcial2() {
  const [modalData, setModalData] = useState(null);

  const abrirModal = (titulo, rutaImagen) => {
    setModalData({ titulo, rutaImagen });
  };

  const cerrarModal = () => {
    setModalData(null);
  };

  return (
    <div className="parcial2-container">
      <h1 className="main-title">METODOLOGÍAS DE DESARROLLO DE SW</h1>
      
      <h2 className="sub-title">¿Qué es una metodología de desarrollo de software?</h2>
      <p className="description">
        Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos que se aplican para diseñar soluciones de software informático. El objetivo de las distintas metodologías es el de intentar organizar los equipos de trabajo para que estos desarrollen las funciones de un programa de la mejor manera posible.
      </p>

      <h2 className="section-title">TIPOS DE METODOLOGÍAS</h2>
      
      <hr className="divider" />

      <div className="metodologias-container">
        <div className="metodologias-row">
          <div 
            className="box cascada" 
            onClick={() => abrirModal('Cascada', '/practicas/1_cascada.png')}
          >
            CASCADA
          </div>
          <div 
            className="box modelo-v" 
            onClick={() => abrirModal('Modelo V', '/practicas/2_modelo_v.png')}
          >
            MODELO V
          </div>
          <div 
            className="box agiles" 
            onClick={() => abrirModal('Ágiles', '/practicas/3_agiles.png')}
          >
            ÁGILES
          </div>
          <div 
            className="box scrum" 
            onClick={() => abrirModal('Scrum', '/practicas/4_scrum.png')}
          >
            SCRUM
          </div>
        </div>
        <div className="metodologias-row">
          <div 
            className="box kanban" 
            onClick={() => abrirModal('Kanban', '/practicas/5_kanvan.png')}
          >
            KANBAN
          </div>
          <div 
            className="box xp" 
            onClick={() => abrirModal('XP', '/practicas/6_xp.png')}
          >
            XP
          </div>
          <div 
            className="box hibridas" 
            onClick={() => abrirModal('Híbridas', '/practicas/7_hibridas_modernas.png')}
          >
            HÍBRIDAS
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="tablero-section">
        <h3 className="tablero-title">LINK A TABLERO DE TRABAJO</h3>
        <a href="https://ingreyeslara.atlassian.net/jira/software/projects/CP/boards/169?sprintStarted=true&atlOrigin=eyJpIjoiOGE2YThjNzc5YTU5NDUwMGE2ZTUzY2I5MjI3YmNlYTMiLCJwIjoiaiJ9" target="_blank" rel="noopener noreferrer" className="outlined-button">
          ---- JIRA ----
        </a>
      </div>

      <hr className="divider" />

      <div className="footer-section">
        <Link to="/" className="outlined-button return-btn">
          <a href="https://DevAlejandroarellano.github.io/PaginaREACT" target="_blank" rel="noopener noreferrer" className="outlined-button">
          ---- REGRESAR MENÚ PRINCIPAL ----
        </a>

        </Link>

        <p className="frase-estatica">" Hakuna matata "</p>
        
        <p className="alumno-nombre">Alumno: Arellano Renteria Miguel Alejandro</p> 
      </div>

      {modalData && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-title">Vista de {modalData.titulo}</h4>
              <button className="modal-close" onClick={cerrarModal}>✕</button>
            </div>
            <div className="modal-body">
              <img 
                /* Aquí añadimos process.env.PUBLIC_URL para forzar la ruta correcta */
                src={process.env.PUBLIC_URL + modalData.rutaImagen} 
                alt={`Imagen de ${modalData.titulo}`} 
                className="modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Parcial2;