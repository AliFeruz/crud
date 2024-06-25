import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        if(!email || !password){
            setError('All fields are necessary.');
            return;
        }
        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false
            });

            if(res?.error){
                setError('Invalid credentials');
                return;
            }
            if (res?.ok) {
                setEmail('');
                setPassword('');
                router.push('/')
            }
        } catch (error) {
            console.log("Error during the logining: ", error)
        }
        
    }


  return (
    <div className='grid place-items-center h-screen'>
    <div className='p-5 rounded-lg border border-cyan-500 shadow-md shadow-cyan-50'>
    <h1 className='text-2xl text-center font-bold my-4'>Login</h1>
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
    <input type="text" placeholder='Email' value={email}
    className='w-80 bg-cyan-600 h-10 placeholder:uppercase rounded-md 
    placeholder:text-gray-400 placeholder:px-2 my-1'
    onChange={(e) => setEmail(e.target.value)}/>
    <input type="text" placeholder='Password' value={password}
    className='w-80 bg-cyan-600 h-10 placeholder:uppercase rounded-md 
    placeholder:text-gray-400 placeholder:px-2 my-1'
    onChange={(e) => setPassword(e.target.value)}/>
    <button className='text-cyan-100 p-2 uppercase border border-cyan-400 mt-1 rounded-md 
    w-full bg-cyan-600' type='submit'>Login</button>
    {error && (
    <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 
    rounded-lg mt-2'>
    {error}
    </div>
    )}
    <Link href={'/register'} className='text-sm mt-3 text-cyan-600 text-right'>
    Don&apos;t have an account <span className='underline ml-2 uppercase text-cyan-400 underline-offset-4'>Register</span>
    </Link>
    </form>
    </div>
    </div>
  )
}

export default LoginForm