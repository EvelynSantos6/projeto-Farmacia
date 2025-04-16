import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import FormCategoria from './components/formularioCategorias/FormCategoria';
import ListaCategoria from './components/listaCategorias/ListaCategoria';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import DeletarCategoria from './components/deletarCategoria/DeletarCategoria';

function App() {
  return (
      <>
      <BrowserRouter>
      <ToastContainer />
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/cadastrarCategoria" element={<FormCategoria />} /> 
              <Route path="/editarCategoria/:id" element={<FormCategoria />} /> 
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;

