import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MediaCard({ id, image, name, genres }) {
  const location = useLocation()
  return (
    <div className={location.pathname === '/search' ? 'mx-auto' : 'mr-4'}>
      <Link to={`/tvshow/${id}`}>
        <div className='w-[80vw] md:w-[230px] lg:w-[300px] h-[350px] lg:h-[420px] relative shadow hover:shadow-2xl-lg'>
          <img
            src={image?.original}
            alt={name}
            loading='lazy'
            className='w-full h-full rounded-lg hover:border-4 border-zinc-700 hover:transition ease-in-out delay-150'
          />
          <div className='absolute bottom-0 left-0 px-4 w-full h-24 bg-slate-900 rounded-b-lg opacity-40 z-0' />
          <div className='absolute bottom-0 left-0 px-4 w-full h-24 z-10 flex flex-col justify-center'>
            <h1 className='font-bold font-graphik tracking-wider text-zinc-200'>
              {name}
            </h1>
            <p className='font-arial font-light tracking-wide text-zinc-100'>
              {genres.join(' · ')}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
