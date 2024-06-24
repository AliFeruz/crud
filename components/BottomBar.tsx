import Link from 'next/link'
import React from 'react'

const BottomBar = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center 
    bg-gray-400 border-t-2 border-gray-500 py-4 md:hidden'>
      <Link href='/'>
        <span className='text-xs md:text-sm md:font-semibold uppercase hover:border-b'>Profile</span>
      </Link>
      <Link href='/'>
        <span className='text-xs md:text-sm md:font-semibold uppercase hover:border-b'>New Note</span>
      </Link>
      <Link href='/'>
        <span className='text-xs md:text-sm md:font-semibold uppercase hover:border-b'>Info</span>
      </Link>
    </div>
  )
}

export default BottomBar
