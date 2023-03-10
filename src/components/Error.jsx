import React from 'react'

export default function Error() {
  return (
    <div className='px-4 flex justify-center items-center h-screen'>
      <div>
        <h1 className='font-graphik text-2xl mb-6'>
          Oops! An error occurred while fetching this data.
        </h1>
        <button
          className='border-none rounded-md bg-slate-900 text-zinc-300 w-[150px] p-2'
          onClick={() => location.replace('/')}
        >
          Go home
        </button>
      </div>
    </div>
  )
}
