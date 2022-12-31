import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

export default function Spinner() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <MutatingDots
        height='100'
        width='100'
        color='#733a5e'
        secondaryColor='#cc7873'
        radius='12.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        className='mx-auto'
      />
    </div>
  )
}
