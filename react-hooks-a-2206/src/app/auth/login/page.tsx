'use client';

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import AuthFormWrapper from "@/components/AuthFormWrapper";
import SocialAuth from "@/components/SocialAuth";
import Link from "next/link";
import { FaEye, FaEyeSlash,FaRedo } from "react-icons/fa";
import { toast } from "react-toastify";

interface LoginFromData {
    email: string;
    password: string;
    captchaInput: string;
}

interface ErrorObject {
    email?: string;
    password?: string;
    captcha?: string;
}

const LoginPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<LoginFromData>({
        email: "",
        password: "",
        captchaInput: "",
    });

    const [errors, setErrors] = useState<ErrorObject>({});
    const [captcha, setCaptcha] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    
    const generateCaptcha = useCallback(() => {
        const captchas = ["abcdef", "ghijko", "lmnopq"];
        const randomCaptcha = captchas[Math.floor(Math.random() * captchas.length)];
        setCaptcha(randomCaptcha);
    }, []);
    
    useEffect(() => {
        generateCaptcha();
        setErrors({});
    }, [generateCaptcha]);

    const validateForm = (): ErrorObject => {
        const newErrors: ErrorObject = {};

        if (formData.email.trim() === "") {
            newErrors.email = "Email tidak boleh kosong";   
        }
        
        if (formData.password.trim() === "") {
            newErrors.password = "Password tidak boleh kosong";
        }
        
        if (formData.captchaInput !== captcha) {
            newErrors.captcha = "Captcha tidak valid";
        }
        
        if (formData.email !== '2206@gmail.com' || formData.password !== '231712206') {
            newErrors.email = "Email atau password salah";
        }

        return newErrors;
    };

    const [attempts, setAttempts] = useState(3);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev =>({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    const handleLogin = () => {
        if (formData.email === '2206@gmail.com' && formData.password === '231712206') {
            setAttempts(3);
        } else {
            setAttempts(prev => Math.max(prev - 1, 0));

        }
    };

    const handleReset = () => {
        setFormData({ email: "", password: "", captchaInput: "" });
        setErrors({});
        generateCaptcha();
        setAttempts(3);
        toast.success('Kesempatan Login Berhasil DiReset', { theme: 'dark'});
    };
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (attempts === 0) {
            toast.error('Kesempatan Login Habis!', { theme: 'dark'});
            return;
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            handleLogin();
            toast.error(`Login Gagal! Sisa Kesempatan Anda: ${attempts-1} `, { theme: 'dark', position: 'top-right' });
            return;
        }

        toast.success('Login Berhasil!', { theme: 'dark', position: 'top-right' });
        router.push("/home");
    };

    return (
        <AuthFormWrapper title="Login">
        <label className="flex text-sm text-black-600 justify-center">Sisa Kesempatan Anda: {attempts}</label>
            <form onSubmit={handleSubmit} className="space-y-5 w-full">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"}`}
                        placeholder="Masukkan email"
                    />
                    {errors.email && (<p className="text-red-600 text-sm italic mt-1">{errors.email}</p>)}
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}   
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${errors.password ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"}`}
                            placeholder="Masukkan password"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer">
                                {showPassword ? <FaEyeSlash size={24}/> : <FaEye size={24}/>}
                        </span> 
                    </div>
                    {errors.password && (
                        <p className="text-red-600 text-sm italic mt-1">{errors.password}</p>

                    )}
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-600">Ingat saya</span>
                    </label>
                    <Link href="/auth/forgot-password" className="text-blue-600 hover:text-blue-800 font-medium">
                        Forgot password?
                    </Link>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-700">Captcha:</span>
                            <span className="font-mono text-lg font-bold text-gray-800 bg-gray-100 px-3 py-1.5 rounded">
                                {captcha}
                            </span>
                        </div>
                        <FaRedo
                            type="button"
                            onClick={generateCaptcha}
                            className="text-gray-600 hover:text-blue-800 text-sm font-medium"
                        >
                            Refresh Captcha
                        </FaRedo>
                    </div>
                    <input
                        type="text"
                        name="captchaInput"
                        value={formData.captchaInput}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${errors.captcha? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"}`}
                        placeholder="Masukkan captcha"
                    />
                    {errors.captcha && (
                        <p className="text-red-600 text-sm italic mt-1">{errors.captcha}</p>
                    )}
                </div>
           
                <button
                    type="submit"
                    className={`w-full text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 ${
                        attempts === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    Sign In
                </button>

                <button
                    type="reset"
                    onClick={handleReset}
                    className={`w-full text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 ${
                        attempts === 0 ? "bg-green-600 hover:bg-green-700" : "bg-gray-300 cursor-not-allowed"
                    }`}
                >
                    Try Again
                </button>

                <SocialAuth />

                <p className="mt-6 text-center text-sm text-gray-600">
                    Tidak punya akun? {' '}
                    <Link href="/auth/register" className="text-blue-600 hover:text-blue-800 font-semibold">
                        Daftar
                    </Link>
                </p>
            </form>
        </AuthFormWrapper>                  
    );
};

export default LoginPage;