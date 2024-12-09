import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
        <nav>
            NavBar
        </nav>
            <Outlet/>
        <footer>
            Footer
        </footer>
    </>
  )
}

export default Layout