import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <h1 className='font-graphik text-2xl mb-6'>
          Ooops! an error has occurred
        </h1>
        <Link to='/'>
          <button className='border-none rounded-md bg-slate-900 text-zinc-300 w-[150px] p-2'>
            Go Home
          </button>
        </Link>
      </div>
    </div>
  )
}
