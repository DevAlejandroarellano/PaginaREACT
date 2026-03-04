import React from 'react';
import { Link } from 'react-router-dom';
import './Parcial2.css';

function Parcial2() {
  return (
    <div className="parcial2-container">
      [cite_start]<h1>METODOLOGÍAS DE DESARROLLO DE SW</h1> {/* [cite: 1] */}
      
      [cite_start]<h2>¿Qué es una metodología de desarrollo de software?</h2> {/* [cite: 2, 3] */}
      <p>
        Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos que se aplican para diseñar soluciones de software informático. [cite_start]{/* [cite: 4] */}
      </p>
      <p>
        El objetivo de las distintas metodologías es el de intentar organizar los equipos de trabajo para que estos desarrollen las funciones de un programa de la mejor manera posible. [cite_start]{/* [cite: 5] */}
      </p>

      [cite_start]<h2>TIPOS DE METODOLOGÍAS</h2> {/* [cite: 6] */}
      <div className="metodologias-grid">
        [cite_start]<div className="box cascada">CASCADA</div> {/* [cite: 7] */}
        [cite_start]<div className="box modelo-v">MODELO V</div> {/* [cite: 8] */}
        [cite_start]<div className="box agiles">ÁGILES</div> {/* [cite: 9] */}
        [cite_start]<div className="box scrum">SCRUM</div> {/* [cite: 12] */}
        [cite_start]<div className="box kanban">KANBAN</div> {/* [cite: 10] */}
        [cite_start]<div className="box xp">XP</div> {/* [cite: 13] */}
      </div>
      [cite_start]<div className="box hibridas">HÍBRIDAS</div> {/* [cite: 11] */}

      <div className="links-section">
        {/* Pega tu URL dentro de las comillas del href */}
        <a href={/* "URL_TABLERO_AQUI" */ ""} target="_blank" rel="noopener noreferrer">
          [cite_start]LINK A TABLERO DE TRABAJO {/* [cite: 14] */}
        </a>
        <br/><br/>
        <a href={/* "URL_JIRA_AQUI" */ ""} target="_blank" rel="noopener noreferrer">
          [cite_start]---- JIRA {/* [cite: 15] */}
        </a>
      </div>

      <div className="frase-section">
        [cite_start]<p>Escribre la frase que colocaste en el tablero de metodología ágil:</p> {/* [cite: 17, 18] */}
        [cite_start]<p>EJEMPLO: " JUSTO DO IT "</p> {/* [cite: 19] */}
        {/* El PDF dice Juan Pérez Sosa, pero puedes poner tu nombre */}
        [cite_start]<p>Alumno: Juan Pérez Sosa</p> {/* [cite: 20] */}
      </div>

      <br/>
      <Link className="return-link" to="/">
        [cite_start]REGRESAR MENÚ PRINCIPAL {/* [cite: 16] */}
      </Link>
    </div>
  );
}

export default Parcial2;