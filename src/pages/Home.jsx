import React from 'react'
import Hero from '../components/Hero'
import FeaturedTV from '../components/FeaturedTV'
import Toprated from '../components/Toprated'
import usefetchHook from '../hooks/fetchHook'
import Spinner from '../components/Spinner'

export default function Home() {
  const { error, loading, data: shows } = usefetchHook('/shows?page=1')

  return (
    <>
      <Hero />
      <div className='mx-auto max-w-6xl xl:max-w-7xl py-3 px-2 xl:px-4 mt-16'>
        <h1 className='text-black font-graphik uppercase text-2xl font-medium mb-12'>
          TV Shows
        </h1>
        {loading && <Spinner />}
        {error && <p>{error.message}</p>}
        <FeaturedTV shows={shows} />
        <Toprated shows={shows} />
      </div>
    </>
  )
}
