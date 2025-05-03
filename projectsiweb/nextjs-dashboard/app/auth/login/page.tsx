'use client';

import { useState } from 'react';
import Image from 'next/image';
import { poppins, fredoka } from '@/app/ui/fonts';
import background from '@/public/bg-login.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const handleLogin = () => {
        if (username.trim() === '') {
            setErrorMessage('Username tidak boleh kosong.');
        }

        if (password.trim() === '') {
            setErrorMessage('Password tidak boleh kosong.');
        }

        if (username === 'admin123' && password === '12345') {
            window.location.href = '/admin';
        } else if  (username === 'user123' && password === '12345'){
            window.location.href = '/';
        } else {
            setErrorMessage('Username atau password salah.');
        }
    }

    const handleRegister = () => {
        window.location.href = '/auth/register';
    }

    const handleResetPassword = () => {
        window.location.href = '/auth/forgot';
    }

    return (
        <main className='relative min-h-screen flex'>
            <div>
                <Image
                    alt=''
                    src={background}
                    fill
                    className='object-cover -z-10'>
                </Image>

                <div className='mt-28 ml-28'>
                    <div className='bg-white shadow-lg rounded-md px-10 py-12 z-10'>
                        <div className='flex flex-col gap-6'>
                            <a className={`${poppins.className} text-center text-black text-5xl font-semibold`}>Sign In</a>
                        </div>

                        <div className='flex flex-col flex-grow '>
                                <input  
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                    className="pr-28 rounded-md text-black mt-16"
                                />
                                    {errorMessage && (
                                        <p className="text-red-600 mt-1">{errorMessage}</p>
                                    )}
                                <div className='relative'>
                                    <input  
                                        value={password}
                                        type={showPassword ? "password" : "text"}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="pr-32 rounded-md text-black mt-4"
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-6 text-gray-600 ">
                                            {showPassword ? <FaEye size={25}/> : <FaEyeSlash size={25}/>}
                                    </span> 
                                    {errorMessage && (
                                        <p className="text-red-600 mt-1">{errorMessage}</p>
                                    )}
                                </div>
                        </div>
                        
                        <div className='flex mt-3 justify-end'>
                            <button onClick={handleResetPassword} className={`${fredoka.className} font-medium text-black hover:text-blue-700 transition-colors`}>Forgot Password?</button>
                        </div>

                        <div className='flex mt-7 justify-center'>
                            <button onClick={handleLogin} className={`p-2 px-32 rounded-lg bg-white border-black border-2 shadow-md hover:bg-green-400 ${poppins.className} text-black font-semibold text-xl hover:text-white focus:outline-none transition-colors`}>
                               Sign In 
                            </button>
                        </div>

                        <div className='flex mt-7 justify-center'>
                            <div className='inline-flex text-black font-medium text-lg'>
                                <a className={`${fredoka.className} text-black font-medium text-lg`}>Didn't have an account?</a>
                                <button onClick={handleRegister} className={`${fredoka.className} ml-2 underline hover:text-blue-700 transition-colors`}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
        </main>
    )
}