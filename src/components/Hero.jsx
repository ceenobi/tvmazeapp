import React from 'react'

export default function Hero() {
  return (
    <div className='p-12 bg-gradient-to-r from-huluRed via-huluRedB to-huluDarkB'>
      <div className='mx-auto max-w-6xl xl:max-w-7xl px-2 flex flex-col space-y-4 text-center font-graphik'>
        <h5 className='uppercase font-bold text-zinc-300 mt-16'>
          must see tv shows, now streaming
        </h5>
        <p className='lg:text-xl tracking-wide leading-4 text-zinc-100 font-light lg:w-3/6 mx-auto'>
          View thousands of shows and see details about your favorite tv shows
          and people.
        </p>
        <a href='https://www.tvmaze.com' target='_blank'>
          <button className='uppercase font-medium text-black p-3 bg-white w-[170px] text-sm rounded-md mx-auto'>
            Find out more
          </button>
        </a>
      </div>
    </div>
  )
}
