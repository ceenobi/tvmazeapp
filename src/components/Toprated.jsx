import React from 'react'
import { Link } from 'react-router-dom'
import useScroll from '../hooks/useScroll'
import MiniMediaCard from './MiniMediaCard'
import Scrollicon from './Scrollicon'
import shuffleShow from '../hooks/shuffleShow'

export default function Toprated({ shows }) {
  const [scroll, scrollRef] = useScroll()
  const topRated = shows.filter((show) => show.rating?.average >= 8)
  const shuffleTopRated = shuffleShow(topRated, 30)
  const minArrow = 'hidden md:block absolute top-16 w-full'

  return (
    <>
      <Link to='/tvshows'>
        <p className='font-graphik uppercase mb-4 font-medium tracking-wide'>
          Top rated
        </p>
      </Link>
      {shuffleTopRated.length > 0 ? (
        <div className='relative'>
          <div
            className='flex overflow-x-scroll overflow-y-hidden scroll-smooth scrollbody'
            ref={scrollRef}
          >
            {shuffleTopRated?.map((featured) => (
              <MiniMediaCard key={featured.id} {...featured} />
            ))}
          </div>
          <Scrollicon minArrow={minArrow} scroll={scroll} />
        </div>
      ) : (
        <p>Something went wrong</p>
      )}
    </>
  )
}
