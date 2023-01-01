import Spinner from './Spinner'
import { Link } from 'react-router-dom'
import useScroll from '../hooks/useScroll'
import MediaCard from './MediaCard'
import Scrollicon from './Scrollicon'
import shuffleShow from '../hooks/shuffleShow'

export default function FeaturedTV({ error, shows, loading }) {
  const [scroll, scrollRef] = useScroll()
  const featuredTv = shows.filter((show) => show.type === 'Reality')
  const shuffleFeaturedTv = shuffleShow(featuredTv, 30)
  const maxArrow = 'hidden md:block absolute top-52 w-full'

  if (loading) {
    return <Spinner />
  } else if (error || shows) {
    return (
      <div className='mb-12'>
        <Link to='/tvshows'>
          <p className='font-graphik uppercase mb-4 font-medium tracking-wide'>
            Featured Tv
          </p>
        </Link>
        {error && <p>{error.message}</p>}
        <div className='relative'>
          <div
            className='flex overflow-x-scroll overflow-y-hidden scroll-smooth scrollbody'
            ref={scrollRef}
          >
            {shuffleFeaturedTv.map((featured) => (
              <MediaCard key={featured.id} {...featured} />
            ))}
          </div>
          <Scrollicon maxArrow={maxArrow} scroll={scroll} />
        </div>
      </div>
    )
  }

  return <p className='mt-20 p-10'>Something went wrong</p>
}
