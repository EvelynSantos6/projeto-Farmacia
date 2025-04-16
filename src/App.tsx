import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ListaCategoria from './components/listaCategorias/listaCategoria';
import FormCategoria from './components/formularioCategorias/FormCategoria';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/cadastrar" element={<FormCategoria />} /> 
              <Route path="/editarCategorias" element={<FormCategoria />} /> 
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;

