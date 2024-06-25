import Link from "next/link";
import { signOut } from 'next-auth/react';
import { UserCircleIcon, PencilSquareIcon, InformationCircleIcon, ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const NavBar = () => {
    const router = useRouter();

    async function logOut(){
        await router.push('/register');
        await signOut()
      }

    return (
        <div className='fixed right-10 top-1/2 transform opacity-100 -translate-y-1/2 hidden md:flex flex-col items-center z-[100]'>
            <div className='flex flex-col items-center justify-center space-y-4
                rounded-2xl border border-fuchsia-300 bg-cyan-950 opacity-75 h-auto p-2.5'>
                <Link href={'/profile'}>
                <div className="p-1 rounded-2xl border border-fuchsia-200">
                <UserCircleIcon fill="fill-cyan-300" className="w-16 h-16 text-fuchsia-100 fill-cyan-700"/>
                </div>
                </Link>
                <Link href={'/newnote'}>
                <div className="p-1 rounded-2xl border border-fuchsia-200">
                <PencilSquareIcon fill="fill-cyan-300" className="w-16 h-16 text-fuchsia-100 fill-cyan-700"/>
                </div>
                </Link>
                <Link href={'/about'}>
                <div className="p-1 rounded-2xl border border-fuchsia-200">
                <InformationCircleIcon fill="fill-cyan-300" className="w-16 h-16 text-fuchsia-100 fill-cyan-700"/>
                </div>
                </Link>
                <button onClick={logOut}>
                <div className="p-1 rounded-2xl border border-fuchsia-200">
                <ArrowLeftEndOnRectangleIcon fill="fill-cyan-300" className="w-14 h-14 text-fuchsia-100 fill-cyan-700"/>
                </div>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
