import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import DeletarTema from './componentes/tema/deletartema/DeletarTema';
import FormTema from './componentes/tema/formtema/FormTema';
import ListaTemas from './componentes/tema/listatemas/ListaTemas';




function App() {
  return (
      <>
          {/* 
              Envolvemos todos os Componentes inseridos no Componente App, 
              com o Componente AuthProvider. 
              Desta forma, todos os Componentes dentro dele, terão acesso 
              aos Estados e Funções guardados na context.**
          */}
          <AuthProvider>
              <BrowserRouter>
                  <Navbar />
                  <div className='min-h-[80vh]'>
                      <Routes>
                          <Route path="/" element={<Login />} />
                          <Route path="/home" element={<Home />} />
                          <Route path="/cadastro" element={<Cadastro />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/temas" element={<ListaTemas />} />
                          <Route path="/cadastrartema" element={<FormTema />} />
                          <Route path="/editartema/:id" element={<FormTema />} />
                          <Route path="/deletartema/:id" element={<DeletarTema />} />
                      </Routes>
                  </div>
                  <Footer />
              </BrowserRouter>
          </AuthProvider>
      </>
  )
}

export default App

//organizar os componentes.