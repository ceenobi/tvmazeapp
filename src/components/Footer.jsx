import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaPinterestSquare,
} from 'react-icons/fa'

export default function Footer() {
  const links = [
    {
      name: <FaFacebookF size='1.5rem' />,
      href: 'facebook.com',
      id: 1,
    },
    {
      name: <FaTwitter size='1.5rem' />,
      href: 'twitter.com',
      id: 2,
    },
    {
      name: <FaInstagramSquare size='1.5rem' />,
      href: 'instagram.com',
      id: 3,
    },
    {
      name: <FaPinterestSquare size='1.5rem' />,
      href: 'pinterest.com',
      id: 4,
    },
  ]

  const infos = [
    { name: 'cookies settings', id: 1 },
    { name: 'privacy policy', id: 2 },
    { name: 'returns', id: 3 },
    { name: 'features', id: 4 },
  ]
  return (
    <div className='bg-slate-100  py-6 mt-10'>
      <div className='mx-auto max-w-6xl px-2 flex flex-col justify-center h-full font-graphik'>
        <div className='flex space-x-4 mb-6'>
          {links.map((item) => (
            <div key={item.id} className='flex space-x-4'>
              <a
                href={`https://${item.href}`}
                target='_blank'
                className='uppercase font-normal text-sm  text-black hover:text-huluRed'
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className='md:flex justify-between items-center'>
          <h1 className='mb-4 md:mb-0'>© TVmaze.com</h1>
          <div className='md:flex justify-end items-center md:space-x-4'>
            {infos.map((it) => (
              <p
                className='uppercase font-normal text-xs mb-2 tracking-wider text-gray-700 hover:text-huluRed'
                key={it.id}
              >
                {it.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
