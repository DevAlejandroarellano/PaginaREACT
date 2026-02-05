import profile from './profile.jpg';
import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Descargas from "./Descargas";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />

        <h1 className="App-title">Evaluación Parcial 1</h1>
        <h2 className="App-subtitle">
          Alumno: Arellano Renteria Miguel Alejandro
        </h2>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/alexxrenteri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKED IN DE MY PROFILE
        </a>

        <br />

        <Link className="App-link" to="/descargas">
          DOCUMENTACIÓN PARCIAL 1
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/descargas" element={<Descargas />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
