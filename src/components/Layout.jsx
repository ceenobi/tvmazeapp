import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className='min-h-container'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
