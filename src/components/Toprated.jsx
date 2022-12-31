import React from 'react'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'
import useScroll from '../hooks/useScroll'
import MiniMediaCard from './MiniMediaCard'
import Scrollicon from './Scrollicon'

export default function Toprated({ error, shows, loading }) {
  const [scroll, scrollRef] = useScroll()
  const topRated = shows.filter((show) => show.rating?.average >= 8.8)
  const minArrow = 'hidden md:block absolute top-16 w-full'

  if (loading) {
    return <Spinner />
  } else if (error || shows) {
    return (
      <>
        {loading && <Spinner />}
        <Link to='/tvshows'>
          <p className='font-graphik uppercase mb-4 font-medium tracking-wide'>
            Top rated
          </p>
        </Link>
        {error ||
          (shows && (
            <>
              {error && <p>{error.message}</p>}
              <div className='relative'>
                <div
                  className='flex overflow-x-scroll overflow-y-hidden scroll-smooth scrollbody'
                  ref={scrollRef}
                >
                  {topRated.map((featured) => (
                    <MiniMediaCard key={featured.id} {...featured} />
                  ))}
                </div>
                <Scrollicon minArrow={minArrow} scroll={scroll} />
              </div>
            </>
          ))}
      </>
    )
  }
  return <p className='mt-20 p-10'>Something went wrong</p>
}
