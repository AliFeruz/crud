import React from 'react'
import { useSession } from "next-auth/react";
import RootLayout from '@/components/RootLayout';

const Profile = () => {
    const { data: session } = useSession();

  return (
    <RootLayout>
    <div className="flex w-5/6 min-h-screen mt-28 justify-center">
    <h1 className="text-xl text-center">
    Hello, {" "}
    <span className="text-emerald-700 text-2xl uppercase">
    {session?.user?.name}!</span>
    </h1>
      </div>
    </RootLayout>
  )
}

export default Profile