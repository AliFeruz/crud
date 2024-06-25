import Link from 'next/link'
import React from 'react'
import { UserCircleIcon, PencilSquareIcon, InformationCircleIcon, ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

const BottomBar = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center 
    border-t-2 border-cyan-500 py-4 md:hidden'>
      <Link href={'/profile'}>
        <div className="p-1 rounded-2xl border border-cyan-400">
        <UserCircleIcon fill="fill-cyan-300" className="w-8 h-8 text-cyan-500 fill-cyan-800"/>
        </div>
        </Link>
        <Link href={'/newnote'}>
        <div className="p-1 rounded-2xl border border-cyan-400">
        <PencilSquareIcon fill="fill-cyan-300" className="w-8 h-8 text-cyan-500 fill-cyan-800"/>
        </div>
        </Link>
        <Link href={'/about'}>
        <div className="p-1 rounded-2xl border border-cyan-400">
        <InformationCircleIcon fill="fill-cyan-300" className="w-8 h-8 text-cyan-400 fill-cyan-800"/>
        </div>
        </Link>
    </div>
  )
}

export default BottomBar
