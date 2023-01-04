import { useEffect, useState, useRef } from 'react'
import HTTP from '../api/fetchApi'

export default function usefetchHook(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [statusCode, setStatusCode] = useState()
  const cache = useRef({})

  useEffect(() => {
    let cancelRequest = false
    if (!url) return
    async function fetchData() {
      try {
        setLoading(true)
        if (cache.current[url]) {
          const result = cache.current[url]
          setData(result)
        } else {
          const results = await HTTP.get(url)
          cache.current[url] = results
          setData(results.data)
          setStatusCode(results.status)
          if (cancelRequest) return
        }
      } catch (error) {
        setError(error)
        if (cancelRequest) return
        // console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return function cleanup() {
      cancelRequest = true
    }
  }, [url])
  return { error, data, loading, statusCode }
}
