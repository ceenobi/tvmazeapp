import React from 'react'
import useScroll from '../hooks/useScroll'
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from 'react-icons/io'
import MiniMediaCard from './MiniMediaCard'
import shuffleShow from '../hooks/shuffleShow'

export default function ComedyTV({ shows }) {
  const [scroll, scrollRef] = useScroll()
  const comedyTv = shows.filter((show) => show.genres[1] === 'Comedy')
  const shuffledComedyTv = shuffleShow(comedyTv, 30)

  return (
    <div className='mb-12'>
      <p className='font-graphik uppercase mb-4 font-medium tracking-wide'>
        comedy
      </p>

      {shuffledComedyTv.length > 0 ? (
        <div className='relative'>
          <div
            className='flex overflow-x-scroll overflow-y-hidden scroll-smooth scrollbody'
            ref={scrollRef}
          >
            {shuffledComedyTv.map((drama) => (
              <MiniMediaCard key={drama.id} {...drama} />
            ))}
          </div>
          <div className='hidden md:block absolute top-16 w-full'>
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
