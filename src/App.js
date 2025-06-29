import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu';
import FormAutor from './paginas/FormAutor';
import FormCategoria from './paginas/FormCategoria';
import Home from './paginas/Home';
import ListaAutor from './paginas/ListaAutor';
import ListaCategoria from './paginas/ListaCategoria';
import RotaPrivada from './componentes/RotaPrivada';
import FormLogin from './paginas/FormLogin';


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listacategoria' element={<ListaCategoria />} />
            <Route path='/cadastrocategoria' element={<FormCategoria />} />
            <Route path='/cadastrocategoria/:id' element={<FormCategoria />} />

            <Route path='/listaautor' element={<RotaPrivada> <ListaAutor /> </RotaPrivada> } />
            <Route path='/cadastroautor' element={<FormAutor />} />
            <Route path='/cadastroautor/:id' element={<FormAutor />} />
            
            <Route path='/login' element={<FormLogin />} />

            <Route path='*' element={<Home />} />
          </Routes>
        </div>




      </BrowserRouter>
    </>
  );
}

export default App;
