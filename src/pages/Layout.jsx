import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Toaster/>
      <Outlet/>
    </div>
  )
}

export default Layout
