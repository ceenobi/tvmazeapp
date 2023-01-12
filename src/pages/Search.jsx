import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import MediaCard from '../components/MediaCard'
import HTTP from '../api/config'

export default function Search() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filterResult, setFilterResult] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getSearch = setTimeout(async () => {
      setLoading(true)
      try {
        const results = await HTTP.get(`/search/shows?q=${query}`)
        setFilterResult(results.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
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

  loading ? <Spinner /> : null

  return (
    <div className='mx-auto max-w-6xl xl:max-w-7xl px-2 xl:px-4 mt-6 md:mt-20 font-graphik'>
      <div className='relative mt-20 md:mt-32 '>
        <input
          className='w-full py-2  text-gray-700 leading-tight focus:outline-none text-[16px] border-b border-black'
          type='search'
          placeholder='Search TV'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && (
          <AiOutlineClose
            className='cursor-pointer absolute inset-y-0 right-0'
            onClick={() => setQuery('')}
          />
        )}
        {query.length > 0 && filterResult <= 0 && (
          <p>Sorry we couldn't find what you were looking for.</p>
        )}
      </div>
      {error ||
        (filterResult && (
          <>
            {error && <p>{error.message}</p>}
            {filterResult.length > 0 && (
              <div className='flex items-center justify-between mt-4'>
                <p className='uppercase text-sm text-gray-700'>
                  {`${filterResult.length} results found for ${query}`}
                </p>
              </div>
            )}
            {filterResult && (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 3, 1200: 4 }}
                className='mt-10 mx-auto'
              >
                <Masonry gutter='30px'>
                  {filterResult.map((res) => (
                    <MediaCard key={res.show.id} {...res.show} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </>
        ))}
    </div>
  )
}
