import './App.css';
import NavBar from './components/NavBar';
import nike from './na.png';
import nb from './nbrc.png';
import ad from './adidasAA5.jpg';
import as from './asics.jpg';
import PagPricipal from './components/PagPricipal';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <PagPricipal/>
        <h1>¡NUEVOS ARRIBOS!</h1>
        <ItemListContainer bodyPhoto={nb} marca="New Balance" modelo="RC Elite" ancho="200" precio="200" />
        <ItemListContainer bodyPhoto={nike} marca="Nike" modelo="Air Zoom Alphafly NEXT%" ancho="197" precio="200"/>
        <ItemListContainer bodyPhoto={ad} marca="Adidas" modelo="Adizero Adios Pro" ancho="225" precio="200"/>
        <ItemListContainer bodyPhoto={as} marca="Asics" modelo="Kayano 26" ancho="225" precio="200"/>
      </body>

    </div>
  );

}

export default App;
