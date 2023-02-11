import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Productos from './components/Productos/Productos';
import Categorias from './components/Categorias/Categorias';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/rubro/:categoria' element={<Categorias/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
