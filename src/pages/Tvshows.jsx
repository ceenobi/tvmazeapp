import React from 'react'
import RunningTV from '../components/RunningTV'
import ActionTV from '../components/ActionTV'
import ComedyTV from '../components/ComedyTV'
import AnimationTV from '../components/AnimationTV'
import usefetchHook from '../hooks/fetchHook'

export default function Tvshows() {
  const { error, loading, data: shows } = usefetchHook(`/shows?page=1`)
  return (
    <>
      <div className='p-12 bg-gradient-to-r from-huluDark to-huluDarkB font-graphik'>
        <div className='mx-auto max-w-6xl  xl:max-w-7xl px-2 flex flex-col space-y-4 text-center'>
          <h5 className='uppercase font-bold text-zinc-300 mt-16'>
            view our collection
          </h5>
          <p className='lg:text-xl tracking-wide leading-4 text-zinc-100 font-light lg:w-3/6 mx-auto'>
            Everything, everywhere, in one place. There's a show for you.
          </p>
          <a href='https://www.tvmaze.com' target='_blank'>
            <button className='uppercase font-medium text-black p-3 bg-white w-[170px] text-sm rounded-md mx-auto'>
              Find out more
            </button>
          </a>
        </div>
      </div>
      <div className='mx-auto max-w-6xl  xl:max-w-7xl py-3 px-2 mt-16'>
        <h1 className='text-black font-graphik uppercase text-2xl font-medium mb-12'>
          TV Shows
        </h1>
        <RunningTV error={error} loading={loading} shows={shows} />
        <ActionTV error={error} loading={loading} shows={shows} />
        <ComedyTV error={error} loading={loading} shows={shows} />
        <AnimationTV error={error} loading={loading} shows={shows} />
      </div>
    </>
  )
}
