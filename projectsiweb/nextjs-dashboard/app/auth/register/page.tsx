'use client';

import { useState } from 'react';
import Image from 'next/image';
import { poppins, fredoka } from '@/app/ui/fonts';
import background from '@/public/bg-register.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = () => {
        if (username.trim() === '') {
            setErrorMessage('Username tidak boleh kosong.');
            return;
        }

        if (password.trim() === '') {
            setErrorMessage('Password tidak boleh kosong.');
            return;
        }

        if (confirmPassword.trim() === '') {
            setErrorMessage('Konfirmasi password tidak boleh kosong.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Password dan konfirmasi password tidak cocok.');
            return;
        }
    }

    const strength = Math.min(
        (password.length > 7 ? 25 : 0) +
        (/[A-Z]/.test(password) ? 25 : 0) +
        (/[0-9]/.test(password) ? 25 : 0) +
        (/[^A-Za-z0-9]/.test(password) ? 25 : 0)
    );

    const handleLogin = () => {
        window.location.href = '/auth/login';
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

            <div className='mt-14 ml-28'>
                <div className='bg-white shadow-lg rounded-md px-10 py-8 z-10'>
                    <div className='flex flex-col gap-6'>
                        <a className={`${poppins.className} text-center text-black text-5xl font-semibold`}>Sign Up</a>
                    </div>

                    <div className='flex flex-col flex-grow'>
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'
                            minLength={8}
                            className='pr-28 rounded-md text-black mt-16'
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
                                className="pr-36 rounded-md text-black mt-4"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-6 text-gray-600 ">
                                    {showPassword ? <FaEye size={25}/> : <FaEyeSlash size={25}/>}
                            </span> 
                            <p className="text-sm text-gray-600 mt-1">Strength : {strength}%</p>
                            <div className="w-full h-2 bg-gray-200 rounded-full">
                                <div
                                className={`h-2 rounded transition-all duration-300 ${strength < 50 ? "bg-red-500" : strength < 75 ? "bg-yellow-500" : "bg-green-500"}`}
                                style={{ width: `${strength}%` }}> 
                                </div>
                            </div>
                            {errorMessage && (
                                <p className="text-red-600 mt-1">{errorMessage}</p>
                            )}
                        </div>

                        <div className='relative'>
                            <input  
                                value={confirmPassword}
                                type={showConfirmPassword ? "password" : "text"}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                className="pr-36 rounded-md text-black mt-4"
                            />
                            <span
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-6 text-gray-600 ">
                                    {showConfirmPassword ? <FaEye size={25}/> : <FaEyeSlash size={25}/>}
                            </span> 
                            {errorMessage && (
                                <p className="text-red-600 mt-1">{errorMessage}</p>
                            )}
                        </div>

                        <div className='flex mt-3 justify-end'>
                            <button onClick={handleResetPassword} className={`${fredoka.className} font-medium text-black hover:text-blue-700 transition-colors`}>Forgot Password?</button>
                        </div>

                        <div className='flex mt-7 justify-center'>
                            <button onClick={handleRegister} className={`p-2 px-32 rounded-lg bg-white border-black border-2 shadow-md hover:bg-green-400 ${poppins.className} text-black font-semibold text-xl hover:text-white focus:outline-none transition-colors`}>
                               Sign Up 
                            </button>
                        </div>

                        <div className='flex mt-7 justify-center'>
                            <div className='inline-flex text-black font-medium text-lg'>
                                <a className={`${fredoka.className} text-black font-medium text-lg`}>Already have an account?</a>
                                <button onClick={handleLogin} className={`${fredoka.className} ml-2 underline hover:text-blue-700 transition-colors`}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}