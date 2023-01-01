import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from 'react-modal'
import usefetchHook from '../hooks/fetchHook'
import Spinner from '../components/Spinner'
import useScroll from '../hooks/useScroll'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import MiniMediaCard from '../components/MiniMediaCard'
import { AiOutlineClose } from 'react-icons/ai'
import Scrollicon from '../components/Scrollicon'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
const minArrow = 'hidden md:block absolute top-16 w-full'

export default function TVid() {
  const [activeBtn, setActiveBtn] = useState('seasons')
  const [seasons, setSeasons] = useState(true)
  const [casts, setCasts] = useState(false)
  const [episodes, setEpisodes] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const { tvid } = useParams()
  const [scroll, scrollRef] = useScroll()
  const {
    error,
    loading,
    data: show,
  } = usefetchHook(
    `/shows/${tvid}?embed[]=seasons&embed[]=cast&embed[]=episodes`
  )
  const { data: shows } = usefetchHook('/shows?page=1')

  const showSeasons = () => {
    setActiveBtn('seasons')
    setSeasons(true)
    setEpisodes(false)
    setCasts(false)
  }
  const showEpisodes = () => {
    setActiveBtn('episodes')
    setEpisodes(true)
    setSeasons(false)
    setCasts(false)
  }
  const showCasts = () => {
    setActiveBtn('casts')
    setCasts(true)
    setSeasons(false)
    setEpisodes(false)
  }

  useEffect(() => {
    showEpisodes()
    showCasts()
    showSeasons()
  }, [])

  useEffect(() => {
    window.scrollTo({ top: '0', scrollBehavior: 'smooth' })
  }, [tvid])

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [modalIsOpen])

  const isActive =
    'uppercase mb-4 tracking-wide text-zinc-300 bg-huluDark p-2 rounded-md font-medium'
  const notActive = 'uppercase mb-4 tracking-wide font-medium'

  const filterShow = shows?.filter((u) =>
    u ? u.genres[0] : null === show?.genres[0]
  )
  const filterById = filterShow?.filter((u) => u?.id !== show?.id)

  const getSimilarShows = () => {
    const shuffled = [...filterById].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 25)
  }
  const arrayOfSimilarShows = getSimilarShows()

  if (loading) {
    return <Spinner />
  } else if (error || show) {
    return (
      <>
        {error && <p>{error.message}</p>}
        <div className='w-full h-[600px] relative font-graphik'>
          <img
            src={show.image?.original}
            alt={show.name}
            className='w-full h-full md:object-cover'
          />
          <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900 opacity-100' />
          <div className='mx-auto max-w-6xl xl:max-w-7xl px-2 xl:px-4 absolute inset-0 h-full grid md:grid-cols-6 gap-4 justify-center items-center'>
            <div className='col-span-5'>
              <h1 className='uppercase text-3xl tracking-wider text-zinc-300 font-bold leading-16'>
                {show.name}
              </h1>
              <p className='text-sm text-zinc-300 mt-4'>
                {show.genres?.join(' · ')}{' '}
                <span className='font-bold capitalize mx-2'>
                  {show.rating?.average}
                </span>
              </p>
              <div className='md:flex items-center text-xs text-zinc-300'>
                <p
                  className='mt-4'
                  dangerouslySetInnerHTML={{
                    __html: show.summary?.slice(0, 100) + '...',
                  }}
                />
                <p
                  className='uppercase font-bold self-end cursor-pointer'
                  onClick={() => setIsOpen(true)}
                >
                  more
                </p>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setIsOpen(false)}
                  style={customStyles}
                  contentLabel='Example Modal'
                >
                  <div className='w-full md:w-[700px]'>
                    <AiOutlineClose
                      onClick={() => setIsOpen(false)}
                      className='text-black cursor-pointer ml-auto'
                    />
                    <p className='font-bold uppercase text-sm text-black'>
                      {show.name}
                    </p>
                    <p
                      className='text-xs text-black-300 mt-2'
                      dangerouslySetInnerHTML={{
                        __html: show.summary,
                      }}
                    />
                  </div>
                </Modal>
              </div>

              <div className='flex space-x-4 text-sm text-zinc-300 mt-4'>
                <p>
                  <span className='font-bold capitalize'>Premiered:</span>{' '}
                  {show.premiered}
                </p>
                <p>
                  <span className='font-bold capitalize'>status:</span>{' '}
                  {show.status}
                </p>
                <p>
                  {' '}
                  <span className='font-bold capitalize'>type:</span>{' '}
                  {show.type}
                </p>
              </div>
              <div className='flex space-x-4 text-sm text-zinc-300 mt-4'>
                <p>
                  <span className='font-bold capitalize'>network:</span>{' '}
                  {show.network?.name}
                </p>
                <p>
                  <span className='font-bold capitalize'>country:</span>{' '}
                  {show.network?.country?.name}
                </p>
              </div>
              <a href={show.officialSite} target='_blank'>
                <button className='uppercase font-medium text-black py-2 px-3 bg-white w-[150px] text-sm rounded-md mt-4'>
                  visit site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-7xl px-2 xl:px-4 mt-12 font-graphik'>
          <div className='flex space-x-4'>
            <button
              className={`${activeBtn === 'seasons' ? isActive : notActive}`}
              onClick={showSeasons}
            >
              Seasons
            </button>
            <button
              className={`${activeBtn === 'episodes' ? isActive : notActive}`}
              onClick={showEpisodes}
            >
              Episodes
            </button>
            <button
              className={`${activeBtn === 'casts' ? isActive : notActive}`}
              onClick={showCasts}
            >
              Casts
            </button>
          </div>
          <hr className='border-[1px]' />
          {seasons && (
            <div>
              {show._embedded?.seasons?.map((season) => (
                <div
                  key={season.id}
                  className='grid md:grid-cols-8 gap-6 mb-4 mt-10'
                >
                  <div className='col-span-2 lg:col-span-1'>
                    <div className='w-[130px] h-[150px]'>
                      <img
                        src={season.image?.original}
                        className='w-full h-full rounded-xl'
                      />
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <h1 className='text-xl font-graphik tracking-wider text-huluRed mb-2'>
                      Season {season.number}
                    </h1>
                    <p className='text-sm mb-2'>{season.premiereDate}</p>
                    <p
                      className='text-xs'
                      dangerouslySetInnerHTML={{
                        __html: season.summary,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {episodes && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 5 }}
              className='mx-auto mt-10'
            >
              <Masonry gutter='30px'>
                {show._embedded?.episodes?.map((episode) => (
                  <div key={episode.id}>
                    <div className='w-full lg:w-[250px] h-[150px]'>
                      <img
                        src={episode.image?.original}
                        className='w-full h-full rounded-xl'
                      />
                    </div>
                    <p className='uppercase mb-4 tracking-wide font-lighter'>
                      Season {episode.season}{' '}
                      <span className='font-medium mx-2'>
                        Episode {episode.number}
                      </span>
                    </p>
                    <p
                      className='text-xs font-light'
                      dangerouslySetInnerHTML={{
                        __html: episode.summary,
                      }}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
          {casts && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 5 }}
              className='mx-auto mt-10'
            >
              <Masonry gutter='30px'>
                {show._embedded?.cast?.map((c, index) => (
                  <div key={index} className='flex space-x-4'>
                    <div className='w-[120px] h-[100px]'>
                      <img
                        src={c.character?.image?.original}
                        alt={c.character?.name}
                        className='w-full h-full rounded-xl'
                      />
                    </div>
                    <div>
                      <p className='uppercase mb-1 tracking-wide font-medium text-sm'>
                        {c.person?.name}
                      </p>
                      <p className='mb-1 tracking-wide'>
                        as{' '}
                        <span className='mr-1 text-gray-700 text-sm'>
                          {c.character?.name}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
          <hr className='border-[1px] mt-10' />
          {arrayOfSimilarShows.length > 0 ? (
            <>
              <p className='uppercase mb-4 tracking-wide font-medium mt-6'>
                You may also like
              </p>
              <div className='relative'>
                <div
                  className='flex overflow-x-scroll overflow-y-hidden scroll-smooth'
                  ref={scrollRef}
                >
                  {arrayOfSimilarShows.map((drama) => (
                    <MiniMediaCard key={drama.id} {...drama} />
                  ))}
                </div>
                <Scrollicon minArrow={minArrow} scroll={scroll} />
              </div>
            </>
          ) : (
            <p className='mb-4 tracking-wide mt-6 text-sm'>
              We currently have no recommedations for{' '}
              <span className='font-bold uppercase '>{show.name}</span>
            </p>
          )}
        </div>
      </>
    )
  }
  return <p className='mt-20 p-10'>Something went wrong</p>
}
