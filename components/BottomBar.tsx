import Link from 'next/link'
import React from 'react'
import { UserCircleIcon, PencilSquareIcon, InformationCircleIcon, ArrowLeftEndOnRectangleIcon, HomeIcon } from "@heroicons/react/24/outline";
import ThemeBtn from './ThemeBtn';

const BottomBar = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center bg-cyan-200 bg-opacity-75
    border-t-2 border-emerald-400 dark:border-fuchsia-300 rounded-t-md py-2.5 md:hidden dark:bg-fuchsia-950 dark:bg-opacity-35'>
        <Link href={'/newnote'}>
        <div className="p-2 rounded-2xl border border-icon">
        <HomeIcon  className="w-8 h-8 icon"/>
        </div>
        </Link>
        <Link href={'/newnote'}>
        <div className="p-2 rounded-2xl border border-icon">
        <PencilSquareIcon  className="w-8 h-8 icon"/>
        </div>
        </Link>
        <Link href={'/profile'}>
        <div className="p-2 rounded-2xl border border-icon">
        <UserCircleIcon className="w-8 h-8 icon"/>
        </div>
        </Link>
        <Link href={'/about'}>
        <div className="p-2 rounded-2xl border border-icon">
        <InformationCircleIcon  className="w-8 h-8 icon"/>
        </div>
        </Link>
        <div className="p-2 rounded-2xl border border-icon">
          <ThemeBtn/>
        </div>
    </div>
  )
}

export default BottomBar
