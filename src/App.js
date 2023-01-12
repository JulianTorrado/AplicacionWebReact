import logo from './logo.svg';
import './App.css';
import ListaProductos from './componentes/ListaProductos';

function App() {
  return (
    <div className="App">
      <div className='container text-center'>
        <h1 className='m-3'>Lista de compras</h1>
      </div>
      <div className='container'>
        <ListaProductos/>
      </div>
        
    </div>
  );
}

export default App;
