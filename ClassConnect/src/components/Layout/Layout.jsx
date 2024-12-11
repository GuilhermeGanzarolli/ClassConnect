import React from 'react'
import { Outlet } from 'react-router'
//CSS
import "./Layout.css"
//Components
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'


const Layout = () => {
  return (
    <>
      <Navbar/>
        <div className='Conteudo'>
          <Outlet/>
        </div>
      <Footer/>
    </>
  )
}

export default Layout