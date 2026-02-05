import "./Descargas.css";

function Descargas() {
  return (
    <div className="descargas-container">
      <h2 className="descargas-title">Centro de Descargas</h2>
      <p className="descargas-text">
        Haz clic en los botones para obtener tus archivos PDF.
      </p>

      <a
        href="https://www.medikt.com.mx/practicas/comandos.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-descarga blue"
      >
        COMANDOS BÁSICOS DE REACT
      </a>

      <a
        href="https://www.medikt.com.mx/practicas/ieee.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-descarga green"
      >
        ISO / ESTANDAR IEEE
      </a>

      <a
        href="https://www.medikt.com.mx/practicas/requerimientos.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-descarga dark"
      >
        REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES
      </a>

      <a
        href="https://www.medikt.com.mx/practicas/sha_256.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-descarga dark"
      >
        CÓDIGO PYTHON ALGORITMO SHA-256
      </a>

      <a
        href="https://DevAlejandroarellano.github.io/PaginaREACT"
        className="btn-descarga dark"
      >
        REGRESAR AL PROYECTO PRINCIPAL
      </a>
    </div>
  );
}

export default Descargas;

