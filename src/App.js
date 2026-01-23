import profile from './profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          Hola mundo en react ....
          Primera aplicacion parcial 1 
        </p>
        <a
          className="App-link"
          href="https://www.dualipa.com/"
          target="blank"
          rel="noopener noreferrer"
        >
          RADICAL 22.
        </a>
      </header>
    </div>
  );
}

export default App;