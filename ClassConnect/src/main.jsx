import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//React Router
import {BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import App from './App.jsx'

//Layout
import Layout from './components/Layout/Layout.jsx'

//Pages
import Home from './pages/Home/Home.jsx'
import PainelAlunos from './pages/PainelAlunos/PainelAlunos.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='/painel-alunos' element={<PainelAlunos/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
