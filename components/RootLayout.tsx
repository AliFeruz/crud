import React, { ReactNode } from 'react'
import { useSession } from 'next-auth/react';
import useMediaQuery from '@/hooks/useMediaQuery';
import Loader from './Loader';
import LoginForm from './forms/LoginForm';
import NavBar from './Navbar';
import BottomBar from './BottomBar';
import Topbar from './Topbar';
import axios from 'axios';


const RootLayout = ({ children }: { children: ReactNode }) => {
  const {data:session, status} = useSession();

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes');
      return response.data;
    } catch (error) {
      console.error("Error fetching notes:", error);
      return [];
    }
  };

  if (status === "loading") {
    return <div className="flex h-screen items-center justify-center">
           <Loader/>
           </div>;
  }

  if(!session) {
    return (
      <main className='min-h-screen w-screen flex items-center justify-center'>
      <LoginForm/>
    </main>
    )
  }


  return (
    <main className='min-h-screen w-full flex relative'>
      {/* <Logo/> */}
      <Topbar fetchNotes={fetchNotes} />
      <NavBar/>
      <BottomBar/>
      {children}
    </main>
  )
}

export default RootLayout