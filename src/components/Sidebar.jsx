import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar({ isOpen, setOpen }) {
  return (
    <div className='w-full md:w-96 h-full bg-slate-900 z-20 fixed top-0 left-0 font-graphik'>
      <div className='p-6 fixed top-16 left-0 h-auto max-w-[100%] text-zinc-300'>
        <NavLink to='/tvshows' onClick={() => setOpen(!isOpen)}>
          <p className='mb-4'>TV Shows</p>
        </NavLink>
        <a
          href='https://www.tvmaze.com'
          target='_blank'
          className='uppercase font-bold text-white'
        >
          Find out more
        </a>
      </div>
    </div>
  )
}
