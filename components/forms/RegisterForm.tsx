import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        if(!name || !email || !password){
            setError('All fields are necessary.');
            return;
        }
        
        try {
            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            if(res.ok){
                setName('');
                setEmail('');
                setPassword('');
                router.push('/')
            } else {
                if (res.status === 400){
                    setError('Email address already registered.');
                    setName('');
                    setEmail('');
                    setPassword('')
                }
            }
        } catch (error) {
            console.log("Error during the registration: ", error)
        }
    }


  return (
    <div className='grid place-items-center h-screen'>
    <div className='p-5 rounded-lg border border-cyan-500 shadow-md shadow-cyan-50'>
    <h1 className='text-2xl text-center font-bold my-4'>Register</h1>
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
    <input type="text" placeholder='full name' value={name}
    className='w-80 bg-cyan-600 h-10 placeholder:uppercase rounded-md 
    placeholder:text-gray-400 placeholder:px-2 my-1'
    onChange={(e) => setName(e.target.value)}/>
    <input type="text" placeholder='Email' 
    className='w-80 bg-cyan-600 h-10 placeholder:uppercase rounded-md 
    placeholder:text-gray-400 placeholder:px-2 my-1' value={email}
    onChange={(e) => setEmail(e.target.value)}/>
    <input type="text" placeholder='Password' 
    className='w-80 bg-cyan-600 h-10 placeholder:uppercase rounded-md 
    placeholder:text-gray-400 placeholder:px-2 my-1' value={password}
    onChange={(e) => setPassword(e.target.value)}/>
    <button className='text-cyan-100 p-2 uppercase border border-cyan-400 mt-1 rounded-md 
    w-full bg-cyan-600'
    type='submit'>Register</button>
    {error && (
    <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 
    rounded-lg mt-2'>
    {error}
    </div>
    )}
    <Link href={'/'} className='text-sm mt-3 text-cyan-600 text-right'>
    Already have an account <span className='underline ml-2 uppercase text-cyan-400 underline-offset-4'>Login</span>
    </Link>
    </form>
    </div>
    </div>
  )
}

export default RegisterForm