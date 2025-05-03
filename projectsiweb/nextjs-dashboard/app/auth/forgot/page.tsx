'use client';

import { useState } from 'react';
import Image from 'next/image';
import { poppins, fredoka } from '@/app/ui/fonts';
import background from '@/public/bg-forgot.jpg';

export default function ForgotPasswordPage () {
    const [password, setPassword] = useState('');

    const strength = Math.min(
        (password.length > 7 ? 25 : 0) +
        (/[A-Z]/.test(password) ? 25 : 0) +
        (/[0-9]/.test(password) ? 25 : 0) +
        (/[^A-Za-z0-9]/.test(password) ? 25 : 0)
    );

    return (
        <main className='relative min-h-screen flex'>
            <Image
                alt=''
                src={background}
                fill
                className='object-cover -z-10'>
            </Image>

            <div className='mt-28 ml-28'>
                <div className='bg-white shadow-lg rounded-md px-10 py-8 z-10'>
                    <div className='flex flex-col gap-6'>
                        <a className={`${poppins.className} text-center text-black text-5xl font-semibold`}>Reset Password</a>
                        <span className={`${fredoka.className} text-center text-gray-700 text-xl font-medium`}>Enter your username below to reset your password</span>
                        <hr className='border-t-3 border-gray-900'></hr>
                    </div>

                    <div className='flex flex-col flex-grow'>
                        <input
                            type='text'
                            placeholder='Username'
                            className='pr-60 rounded-md text-black mt-8'>
                        </input>

                        <div className='relative'>
                            <input  
                                value={password}
                                type='text'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="pr-72 rounded-md text-black mt-4"
                            />
                            <p className="text-sm text-gray-600 mt-1">Strength : {strength}%</p>
                            <div className="w-full h-2 bg-gray-200 rounded-full">
                                <div
                                className={`h-2 rounded transition-all duration-300 ${strength < 50 ? "bg-red-500" : strength < 75 ? "bg-yellow-500" : "bg-green-500"}`}
                                style={{ width: `${strength}%` }}> 
                                </div>
                            </div>
                        </div>

                        <div className='flex mt-7 justify-center'>
                            <button className={`p-2 px-32 rounded-lg bg-white border-black border-2 shadow-md hover:bg-blue-800 ${poppins.className} text-black font-semibold text-xl hover:text-white focus:outline-none transition-colors`}>
                                Reset Password
                            </button>
                        </div>
                </div>
            </div>
            </div>
        </main>
    )
}