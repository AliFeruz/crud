import React from 'react'
import { useSession, signOut } from "next-auth/react";
import RootLayout from '@/components/RootLayout';
import { useRouter } from 'next/router';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

const Profile = () => {
    const { data: session } = useSession();
    const router = useRouter();
    async function logOut(){
      await router.push('/register');
      await signOut()
    }


  return (
    <RootLayout>
    <div className="flex items-center mt-24 justify-center w-full">
      <div className='common-container'>
      <h1 className="text-xl text-center">
       Hello, {" "}
      <span className="text-emerald-700 text-2xl uppercase">
      {session?.user?.name}!</span>
      </h1>
      <button onClick={logOut} className="flex items-center space-x-3">
      <ArrowRightEndOnRectangleIcon className="h-[30px] w-[30px] icon"/>
      </button>
      </div>
    </div>
    </RootLayout>
  )
}

export default Profile