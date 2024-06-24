import Link from "next/link";

const NavBar = () => {
    return (
        <div className='fixed right-10 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center z-[100]'>
            <div className='flex flex-col items-center justify-center space-y-4
                rounded-2xl border-2 border-gray-500 h-auto md:py-6 px-4 md:px-6'>
                <Link href={'/'}>
                Profile
                </Link>
                <Link href={'/about'}>
                New Note
                </Link>
                <Link href={'/skills'}>
                Info
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
