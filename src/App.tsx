import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'
import Perfil from './pages/perfil/Perfil'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DeletarPostagem from './componentes/postagens/deletarpostagem/DeletarPostagem'
import FormPostagem from './componentes/postagens/formpostagem/FormPostagem'
import ListaPostagens from './componentes/postagens/listaPostagens/ListaPostagens'
import DeletarTema from './componentes/tema/deletartema/DeletarTema'
import FormTema from './componentes/tema/formtema/FormTema'
import ListaTemas from './componentes/tema/listatemas/ListaTemas'
import Footer from './componentes/footer/Footer'
import Navbar from './componentes/navbar/Navbar'

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
                <ToastContainer />
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
                            <Route path="/postagens" element={<ListaPostagens />} />
                            <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                            <Route path="/editarpostagem/:id" element={<FormPostagem />} />
                            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                            <Route path="/perfil" element={<Perfil />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App