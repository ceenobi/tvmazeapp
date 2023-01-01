import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar({ isOpen, setOpen }) {
  return (
    <div className='w-full h-screen bg-neutral-900 z-20 fixed top-0 left-0 transition duration-300 ease-in-out font-graphik'>
      <div className='my-20 mx-2 text-zinc-300 uppercase text-lg'>
        <NavLink to='/search' onClick={() => setOpen(!isOpen)}>
          <p className='mb-4 font-medium'>Search</p>
        </NavLink>
        <NavLink to='/tvshows' onClick={() => setOpen(!isOpen)}>
          <p className='mb-4 font-medium'>TV Shows</p>
        </NavLink>
        <a
          href='https://www.tvmaze.com'
          target='_blank'
          className='uppercase font-bold text-white text-xl'
        >
          Find out more
        </a>
      </div>
    </div>
  )
}
