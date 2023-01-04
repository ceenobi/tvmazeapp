import React, { useEffect, useState } from 'react'
import usefetchHook from '../hooks/fetchHook'
import Spinner from '../components/Spinner'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import MediaCard from '../components/MediaCard'

export default function Search() {
  const [query, setQuery] = useState('')
  const {
    error,
    loading,
    data: results,
  } = usefetchHook(`/search/shows?q=${query}`)
  const navigate = useNavigate()

  useEffect(() => {
    const getSearch = setTimeout(() => {
      if (query && query.length > 0) {
        setQuery(query)
      }
    }, 2000)
    return () => clearTimeout(getSearch)
  }, [query])

  useEffect(() => {
    const params = new URLSearchParams()
    if (query) {
      params.append('name', query)
    } else {
      params.delete('name')
    }
    navigate({ search: params.toString() })
  }, [query, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }
  return (
    <div className='mx-auto max-w-6xl xl:max-w-7xl px-2 xl:px-4 mt-6 md:mt-20 font-graphik'>
      <div className='relative mt-20 md:mt-32 '>
        <input
          className='w-full py-2  text-gray-700 leading-tight focus:outline-none text-[16px] border-b border-black'
          id='search'
          type='text'
          placeholder='Search TV'
          value={query}
          onChange={handleSubmit}
        />
        {query.length > 0 && (
          <AiOutlineClose
            className='cursor-pointer absolute inset-y-0 right-0'
            onClick={() => setQuery('')}
          />
        )}
        {query.length > 0 && results <= 0 && (
          <p>Sorry we couldn't find what you were looking for.'</p>
        )}
      </div>
      {loading && <Spinner />}
      {error ||
        (results && (
          <div>
            {error && <p>{error.message}</p>}
            {results.length > 0 && (
              <div className='flex items-center justify-between mt-4'>
                <p className='uppercase text-sm text-gray-700'>
                  {`${results.length} results found for ${query}`}
                </p>
              </div>
            )}
            {results && (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 3, 1200: 4 }}
                className='mt-10 mx-auto'
              >
                <Masonry gutter='30px'>
                  {results.map((res) => (
                    <MediaCard key={res.show.id} {...res.show} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        ))}
    </div>
  )
}
