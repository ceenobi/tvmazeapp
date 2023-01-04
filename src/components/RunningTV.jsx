import React from 'react'
import useScroll from '../hooks/useScroll'
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from 'react-icons/io'
import MediaCard from './MediaCard'
import shuffleShow from '../hooks/shuffleShow'

export default function RunningTV({ shows }) {
  const [scroll, scrollRef] = useScroll()
  const runningTv = shows.filter((show) => show.status === 'Running')
  const shuffledRunningTv = shuffleShow(runningTv, 30)

  return (
    <div className='mb-12'>
      <p className='font-graphik uppercase mb-4 font-medium tracking-wide'>
        ON AIR
      </p>
      {shuffledRunningTv?.length > 0 ? (
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
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  )
}
