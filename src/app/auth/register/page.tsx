'use client';

import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import AuthFormWrapper from "@/components/AuthFormWrapper";
import SocialAuth from "@/components/SocialAuth";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaRedo } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type RegisterFromData = {
    username: string;
    email: string;
    nomorTelp: string;
    password: string;
    confirmPassword: string;
    captcha: string;
};

const RegisterPage = () => {
    const router = useRouter();
    const [captcha, setCaptcha] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<RegisterFromData>();
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const password = watch('password', '');
    const generateCaptcha = useCallback(() => {
        const captchas = ["abcdef", "ghijko", "lmnopq"];
        const randomCaptcha = captchas[Math.floor(Math.random() * captchas.length)];
        setCaptcha(randomCaptcha);
    }, []); 
    // niii captchaaaa

    const strength = Math.min(
        (password.length > 7 ? 25 : 0) +
        (/[A-Z]/.test(password) ? 25 : 0) +
        (/[0-9]/.test(password) ? 25 : 0) +
        (/[^A-Za-z0-9]/.test(password) ? 25 : 0)
    );

    useEffect(() => {
        generateCaptcha();
        reset();
    }, []);

    const onSubmit = (data: RegisterFromData) => {
        toast.success('Register Berhasil!', { theme: 'dark', position: 'top-right' });
        router.push("/home");
    };

    return (
        <AuthFormWrapper title="Register">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
                <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium text-gray-700">
                        Username <span className="text-gray-500 text-xs">(max 8 karakter)</span>
                    </label>
                    <input
                        id="username"
                        {...register('username', {
                            required: "Username tidak boleh kosong",
                            minLength: {
                                value: 3,
                                message: "Username minimal 3 karakter",
                            },
                            maxLength: {
                                value: 8,
                                message: "Username maksimal 8 karakter",
                            },
                        })}
                        className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:outline-none transition-colors
                            ${errors.username ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"}`}
                            placeholder="Masukkan username"
                            />
                            {errors.username && (
                                <p className="text-red-600 text-sm italic mt-1">{errors.username.message}</p>
                            )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', {
                            required:"Email tidak boleh kosong",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email tidak valid",
                            }
                        })}
                        className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                        placeholder="Masukkan email"
                    />
                    {errors.email && (
                        <p className="text-red-600 text-sm italic mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="nomorTelp" className="text-sm font-medium text-gray-700">
                        Nomor Telepon
                    </label>
                    <input
                        id="nomorTelp"
                        type="number"
                        {...register('nomorTelp', { 
                            required: "Nomor telepon wajib diisi",
                            minLength: {
                                value: 10,
                                message: "Nomor telepon minimal 10 angka",
                            },
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Nomor telepon harus berupa angka",
                            }
                        })}
                        className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:outline-none transition-colors
                            ${errors.nomorTelp ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"}`}
                        placeholder="Masukkan nomor telepon"
                    />
                    {errors.nomorTelp && (
                        <p className="text-red-600 text-sm italic mt-1">{errors.nomorTelp.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            {...register('password', {
                                required: 'Password wajib diisi',
                                minLength: {
                                    value: 8,
                                    message: 'Password minimal 8 karakter',
                                }
                            })}
                            className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:outline-none transition-colors
                                ${errors.password ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"}`}
                            placeholder="Masukkan password"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer">
                                {showPassword ? <FaEyeSlash size={24}/> : <FaEye size={24}/>}
                        </span>  
                    </div>
                    {errors.password && (
                        <p className="text-red-600 text-sm italic mt-1">{errors.password.message}</p>
                    )}
                    <p className="text-sm text-gray-600 mt-1">Strength : {strength}%</p>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                        className={`h-2 rounded transition-all duration-300 ${strength < 50 ? "bg-red-500" : strength < 75 ? "bg-yellow-500" : "bg-green-500"}`}
                        style={{ width: `${strength}%` }}> 
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                        Konfirmasi Password
                    </label>
                    <div className="relative">
                        <input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            {...register('confirmPassword', {
                                required: 'Konfirmasi password wajib diisi',
                                validate: value => value === password || 'Konfirmasi password tidak cocok'
                            })}
                            className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:outline-none transition-colors
                                ${errors.confirmPassword ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"}`}
                            placeholder="Masukkan konfirmasi password"
                        />
                        <span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer">
                                {showConfirmPassword ? <FaEyeSlash size={24}/> : <FaEye size={24}/>}
                        </span> 
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-red-600 text-sm italic mt-1">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <div className="flex-items-center space-x-3">
                        <span className="text-sm font-medium text-gray-700">Captcha:</span>
                        <span className="font-mono text-lg font-bold text-gray-800 bg-gray-100 px-3 py-1.5 rounded">
                            {captcha}
                        </span>
                        <FaRedo
                            type="button"
                            onClick={generateCaptcha}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
                                Refresh Captcha
                        </FaRedo>
                    </div>
                    <input
                        type="text"
                        {...register("captcha", {validate: value => value === captcha || "Captcha tidak cocok" })}
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                        placeholder="Masukkan captcha"
                    />
                        {errors.captcha && (
                            <p className="text-red-600 text-sm italic mt-1">{errors.captcha.message}</p>
                        )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200">
                        Register
                </button>
                <SocialAuth />
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                Sudah punya akun?{" "}
                <Link href="/auth/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Login
                </Link>
            </p>
        </AuthFormWrapper>
    );
};

export default RegisterPage;     