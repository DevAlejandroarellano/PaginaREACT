import profile from './profile.jpg';
import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Descargas from './Descargas';
import Parcial2 from './Parcial2';

// Importamos las herramientas de Google
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Home() {
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

        {/* Botón funcional de Google */}
        <div style={{ marginTop: '10px' }}>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log("¡Éxito! Este es tu token JWT:", credentialResponse.credential);
              // Aquí puedes manejar el token, por ejemplo, guardarlo en un estado
            }}
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
    // Proveedor de Google con tu Client ID
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