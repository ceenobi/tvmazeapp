import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'
import Sidebar from './Sidebar'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const location = useLocation()

  const bgStyle =
    'fixed top-0 z-30 w-full font-graphik transition ease-in-out delay-100 bg-rose-700'
  const defaultStyle = 'fixed top-0 z-30 w-full font-graphik bg-transparent'
  const hoverStyle =
    'hover:bg-slate-700 p-2 rounded-md transition ease-in-out delay-150'

  const showNav = () => {
     window.scrollY >= 60 ? setShowNavbar(true) : setShowNavbar(false)
  }

  useEffect(() => {
    showNav()
    window.addEventListener('scroll', showNav)
    return () => {
      window.removeEventListener('scroll', showNav)
    }
  })

  return (
    <div className={showNavbar? bgStyle : defaultStyle}>
      <div className='mx-auto max-w-6xl xl:max-w-7xl px-2 h-14 md:h-20 flex items-center font-graphik'>
        <div className='block md:hidden z-30 text-white'>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            direction='left'
            label='Show menu'
          />
        </div>
        <NavLink
          to='/'
          className='text-2xl text-teal-400 font-bold leading-16 grow md:grow-0 z-30'
        >
          TVMAZE
        </NavLink>
        <div className='hidden md:flex grow mx-10 space-x-4 text-zinc-300 font-bold'>
          <NavLink to='/tvshows' className={hoverStyle}>
            TV Shows
          </NavLink>
        </div>
        <div className='flex space-x-4 font- text-zinc-300 font-bold'>
          {location.pathname !== '/search' && (
            <NavLink to='/search' className={hoverStyle}>
              Search
            </NavLink>
          )}
          <a
            href='https://www.tvmaze.com'
            target='_blank'
            className='hidden md:flex uppercase font-bold text-white self-center'
          >
            Find out more
          </a>
        </div>
      </div>
      {isOpen && <Sidebar isOpen={isOpen} setOpen={setOpen} />}
    </div>
  )
}
