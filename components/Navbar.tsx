import Link from "next/link";
import { signOut } from 'next-auth/react';
import { InformationCircleIcon, ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import ThemeBtn from "./ThemeBtn";

const NavBar = () => {
    const router = useRouter();

    async function logOut(){
        await router.push('/register');
        await signOut()
      }

    return (
        <div className='fixed right-4 bottom-7 transform hidden md:flex flex-col 
        items-center justify-around p-0.5 space-y-2 z-[100]'>
        <div className='p-1 bg-slate-200 dark:bg-fuchsia-950 bg-opacity-35 rounded-2xl border border-gray-400'> 
        <ThemeBtn/>
        
        {/* <button onClick={logOut}>
        <div className="p-1">
        <ArrowLeftEndOnRectangleIcon className="w-8 h-8 icon"/>
        </div>
        </button> */}
        </div>
        <Link href={'/about'}>
        <div className="p-1 bg-slate-200 bg-opacity-25 dark:bg-fuchsia-950 rounded-2xl border border-gray-400">
        <InformationCircleIcon className="w-8 h-8 icon"/>
        </div>
        </Link>
        </div>
    );
};

export default NavBar;
