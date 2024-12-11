import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/painel-alunos' end>Alunos</NavLink>
        <NavLink to='/painel-professores' end>Professores</NavLink>
        <NavLink to='/painel-classes' end>Classes</NavLink>
    </nav>
  )
}

export default Navbar