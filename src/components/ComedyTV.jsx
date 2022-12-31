import React from 'react'
import Spinner from './Spinner'
import useScroll from '../hooks/useScroll'
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from 'react-icons/io'
import MiniMediaCard from './MiniMediaCard'

export default function ComedyTV({ error, loading, shows }) {
  const comedyTv = shows.filter((show) => show.genres[1] === 'Comedy')
  const [scroll, scrollRef] = useScroll()

  if (loading) {
    return <Spinner />
  } else if (error || shows) {
    return (
      <div className='mb-12'>
        <p className='font-graphik uppercase mb-4 font-bold tracking-wide font-lighter'>
          comedy
        </p>

        {error && <p>{error.message}</p>}
        <div className='relative'>
          <div
            className='flex overflow-x-scroll overflow-y-hidden scroll-smooth'
            ref={scrollRef}
          >
            {comedyTv.map((drama) => (
              <MiniMediaCard key={drama.id} {...drama} />
            ))}
          </div>
          <div className='hidden md:block absolute top-24 w-full'>
            <div className='flex justify-between items-center'>
              <IoMdArrowDropleftCircle
                className='text-white cursor-pointer'
                size='3.2rem'
                onClick={() => scroll('left')}
              />
              <IoMdArrowDroprightCircle
                className='text-white cursor-pointer'
                size='3.2rem'
                onClick={() => scroll('right')}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <p className='mt-20 p-10'>Something went wrong</p>
}