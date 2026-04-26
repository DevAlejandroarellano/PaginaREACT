import profile from './profile.jpg';
import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Descargas from './Descargas';
import Parcial2 from './Parcial2';
import { useState } from 'react';

// Importamos las herramientas de Google
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';

// Decodifica el JWT de Google para obtener el nombre del usuario
function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

function Home() {
  const [usuario, setUsuario] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    const datos = parseJwt(credentialResponse.credential);
    setUsuario(datos);
  };

  const handleLogout = () => {
    googleLogout();
    setUsuario(null);
  };

  // ── Pantalla post-login ──
  if (usuario) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={profile} className="App-logo" alt="logo" />

          <h2 className="App-subtitle">
            Bienvenido(a), {usuario.given_name || usuario.name}
          </h2>

          <h1 className="App-title">EVALUACIÓN PARCIAL 3</h1>

          <br />

          {/* Botón 1: Descarga PDF */}
          <a
            className="App-link"
            href={process.env.PUBLIC_URL + "/ers- coffe-percy.pdf"}
            download="ers- coffe-percy.pdf"
          >
            DESCARGAR DOCUMENTO DEL PROYECTO
          </a>

          <br />

          {/* Botón 2: Tablero Jira */}
          <a
            className="App-link"
            href="https://coffepercy.atlassian.net/jira/software/projects/CPS/boards/2"
            target="_blank"
            rel="noopener noreferrer"
          >
            TABLERO JIRA DEL PROYECTO
          </a>

          <br />

          {/* Botón 3: Cerrar sesión */}
          <button
            onClick={handleLogout}
            style={{
              marginTop: '10px',
              padding: '10px 24px',
              backgroundColor: 'transparent',
              border: '2px solid #61dafb',
              color: '#61dafb',
              borderRadius: '4px',
              fontSize: '14px',
              cursor: 'pointer',
              letterSpacing: '1px',
            }}
          >
            CERRAR SESIÓN PARCIAL 3
          </button>
        </header>
      </div>
    );
  }

  // ── Pantalla inicial (sin login) ──
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />

        <h1 className="App-title">Evaluación Parcial 3</h1>
        <h2 className="App-subtitle">
          Alumno(a): Arellano Renteria Miguel Alejandro
        </h2>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/alexxrenteri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKED IN DE MI PROFILE
        </a>

        <br />

        <Link className="App-link" to="/descargas">
          DOCUMENTACION PARCIAL 1
        </Link>

        <br />

        <Link className="App-link" to="/parcial2">
          DOCUMENTACION PARCIAL 2
        </Link>

        <br />

        {/* Botón de Google */}
        <div style={{ marginTop: '10px' }}>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
              console.log('El inicio de sesión falló');
            }}
            theme="outline"
            size="large"
            text="signin_with"
            shape="rectangular"
          />
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId="920545762747-u8dq12cauodkuek2n4p84hvqnrsj6co9.apps.googleusercontent.com">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/parcial2" element={<Parcial2 />} />
        </Routes>
      </HashRouter>
    </GoogleOAuthProvider>
  );
}

export default App;