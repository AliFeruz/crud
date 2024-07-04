import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import ThemeBtn from './ThemeBtn';
import { ArrowLeftEndOnRectangleIcon, EllipsisVerticalIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const router = useRouter();


    async function logOut(){
      await router.push('/register');
      await signOut()
    }


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={toggleMenu} className="p-2 mx-1 flex items-center">
        <p className='md:block text-base hidden uppercase icon'>Profile</p>
        {/* <EllipsisVerticalIcon className="w-8 h-8 icon" /> */}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 p-3 h-80 w-60 bg-gray-200 dark:bg-slate-700 border rounded-xl shadow-lg">
        <div className='p-4 mb-2 flex flex-col items-center'>
        <p className="text-sm icon text-center">Hello, </p>
        <span className="text-emerald-600 mb-1 text-xl">
        {session?.user?.name}!</span>
        <p className='text-xs icon font-thin'>{session?.user?.email}</p>
        </div>
       <div className='flex flex-col px-10 mt-2'>
       <ThemeBtn/>
        <Link href={'/about'}>
        <div className="p-1.5 flex items-center">
        <InformationCircleIcon className="w-8 h-8 icon"/>
        <p className='icon ml-5'>Info</p>
        </div>
        </Link>
        <button onClick={logOut}>
        <div className="p-1.5 flex items-center">
        <ArrowLeftEndOnRectangleIcon className="w-8 h-8 icon"/>
        <p className='icon ml-5'>Log Out</p>
        </div>
        </button> 
       </div>
        </div>
      )}
    </div>
  )
}

export default Profile
