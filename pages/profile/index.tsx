import React from 'react'
import { useSession } from "next-auth/react";

const Profile = () => {
    const { data: session } = useSession();

  return (
    <div>
        <div className="p-6 my-4">
        <h1 className="text-xl text-white text-center">
        Hello, {" "}
        <span className="text-white text-2xl uppercase">
        {session?.user?.name}!</span>
        </h1>
      </div>
    </div>
  )
}

export default Profile