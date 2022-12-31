import React from 'react'
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io'

export default function Scrollicon({ scroll, maxArrow, minArrow }) {
  return (
    <>
      {maxArrow && (
        <div className={maxArrow}>
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
      )}
      {minArrow && (
        <div className={minArrow}>
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
      )}
    </>
  )
}
