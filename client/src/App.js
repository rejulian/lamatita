import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Productos from './components/Productos/Productos';
import Categorias from './components/Categorias/Categorias';
import ProductoBuscado from './components/ProductoBuscado/ProductoBuscado';
import Editar from './components/Editar/Editar';
import Buscar from './components/Editar/Buscar';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/rubro/:categoria' element={<Categorias/>}/>
          <Route path='/productos/busqueda/:articulo' element={<ProductoBuscado/>}/>
          <Route path='/buscarArticulo' element={<Buscar/>}/>
          <Route path='/editar/:codigo' element={<Editar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
