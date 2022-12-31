import React from 'react'
import { Link } from 'react-router-dom'

export default function MiniMediaCard({ id, image, name, genres }) {
  return (
    <div>
      <div className='mr-4 mb-2'>
        <Link to={`/tvshow/${id}`}>
          <div className='w-[275px] lg:w-[300px] h-[170px]'>
            <img
              src={image.original}
              alt={name}
              className='w-full h-full rounded-xl shadow hover:shadow-2xl-lg hover:border-4 border-zinc-600 hover:transition ease-in-out delay-150 object-inherit'
            />
          </div>
        </Link>
      </div>
      <div className='px-2 w-full h-24 '>
        <Link to={`/tvshow/${id}`}>
          <>
            <p className='font-bold font-graphik tracking-wider text-slate-900 text-sm'>
              {name}
            </p>
            <p className='font-arial font-light tracking-wide text-slate-700 text-sm'>
              {genres.join(' · ')}
            </p>
          </>
        </Link>
      </div>
    </div>
  )
}
