import { useRef } from 'react'

export default function useScroll() {
  const scrollRef = useRef()
  const scroll = (direction) => {
    const { current } = scrollRef
    direction === 'left'
      ? (current.scrollLeft -= 1000)
      : (current.scrollLeft += 1000)
  }

  return [scroll, scrollRef]
}
