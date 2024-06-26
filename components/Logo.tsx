import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='fixed flex items-center inset-x-0 justify-between z-[100] top-4 md:top-8 w-5/6'>
        <div className='px-4 py-1 border ml-20 border-emerald-400 rounded-full bg-cyan-200/50'>
        <Link href={'/'}>
        <h1 className='logo'>Crud</h1>
        </Link>
        </div>
        <div className='flex space-x-4'>
        <Link href={'/'}>
        <h1 className=''>Add</h1>
        </Link>
        <Link href={'/'}>
        <h1 className=''>Add</h1>
        </Link>
        <Link href={'/'}>
        <h1 className=''>Add</h1>
        </Link>
        </div>
    </div>
  )
}

export default Logo
