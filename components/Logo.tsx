import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='fixed flex items-center inset-x-0 justify-center z-[100] top-4 md:top-8 w-full'>
        <div className='px-6 py-3'>
        <Link href={'/'}>
        <h1 className='uppercase tracking-wider text-5xl text-fuchsia-400 font-semibold'>Crud</h1>
        </Link>
        
        </div>
    </div>
  )
}

export default Logo
