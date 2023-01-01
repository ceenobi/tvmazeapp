import React from 'react'
import Spinner from '../components/Spinner'
import useScroll from '../hooks/useScroll'
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from 'react-icons/io'
import MediaCard from './MediaCard'
import shuffleShow from '../hooks/shuffleShow'

export default function RunningTV({ error, loading, shows }) {
  const [scroll, scrollRef] = useScroll()
  const runningTv = shows.filter((show) => show.status === 'Running')
  const shuffledRunningTv = shuffleShow(runningTv, 30)

  if (loading) {
    return <Spinner />
  } else if (error || shows) {
    return (
      <div className='mb-12'>
        <p className='font-graphik uppercase mb-4 font-medium tracking-wide'>
          ON AIR
        </p>

        {error && <p>{error.message}</p>}
        <div className='relative'>
          <div
            className='flex overflow-x-scroll overflow-y-hidden scroll-smooth scrollbody'
            ref={scrollRef}
          >
            {shuffledRunningTv.map((running) => (
              <MediaCard key={running.id} {...running} />
            ))}
          </div>
          <div className='hidden md:block absolute top-52 w-full'>
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
