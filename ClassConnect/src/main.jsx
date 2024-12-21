import { createRoot } from 'react-dom/client'

//React Router
import {BrowserRouter, Routes, Route} from 'react-router'

//CSS
import './index.css'
import './assets/Fonts/Fonts.css'

//Layout
import Layout from './components/Layout/Layout.jsx'

//Pages
import Home from './pages/Home/Home.jsx'
import PainelAlunos from './pages/PainelAlunos/PainelAlunos.jsx'
import Classes from './pages/PainelClasse/Classes.jsx'
import PainelProfessores from './pages/PainelProfessores/PainelProfessores.jsx'
import PainelDoAluno from './pages/PainelDoAluno/PainelDoAluno.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='/painel-alunos' element={<PainelAlunos/>}/>
        <Route path='/painel-aluno/:id' element={<PainelDoAluno/>}/>
        <Route path='/painel-classes' element={<Classes/>}/>
        <Route path='/painel-professores' element={<PainelProfessores/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
