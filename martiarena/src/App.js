import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a ÍCARO, la mejor página de compra de calzados deportivos.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a Ícaro
        </a>
      </header>
      {/* <body className = "prueba">
        <img className="" alt="" />
        <a
          className = "prueba-link"
          href = "https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Google
        </a>
      </body> */}
    </div>
  );
}

export default App;
