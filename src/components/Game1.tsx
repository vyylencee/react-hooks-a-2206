'use client'

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaCheck, FaLevelUpAlt, FaPlusCircle } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

interface FloatingPoint {
    id: number;
    value: string;
    x: number;
}

const Game1 = () => {
    const [skor, setSkor] = useState<number>(0);
    const [poinPerKlik, setPoinPerKlik] = useState<number>(1);
    const [level, setLevel] = useState<number>(1);
    const [levelPoin, setLevelPoin] = useState<number>(100);
    const [autoKlik, setAutoKlik] = useState<number>(1);
    const [upgradeCostKlik, setUpgradeCostKlik] = useState<number>(10);
    const [upgradeCostAutoKlik, setUpgradeCostAutoKlik] =useState<number>(20);
    const [doublePoinCost, setDoublePoinCost] = useState<number>(50);
    const [multiplyByFiveCost, setMultiplyByFiveCost] =useState<number>(100);
    const [strength, setStrength] = useState<number>(0);
    const [floatingPoints, setFloatingPoints] =useState<FloatingPoint[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSkor((prev) => prev + autoKlik);
        }, 1000);
        return () => clearInterval(interval);
    }, [autoKlik]);

    useEffect(() => {
        if (skor >= levelPoin) {
            setLevel((prev) => prev + 1);
            setPoinPerKlik((prev) => prev + 1);
            setLevelPoin((prev) => prev * 2);
            notifyLevelUp();
        }
    }, [skor, levelPoin]);

    useEffect(() => {
        setStrength((skor / levelPoin) * 100);
    }, [skor, levelPoin]);

    const notifyUpgrade = (type: string) => {
        toast.success(`🎉 Berhasil Upgrade ${type}!`, {
            theme: "dark",
            icon: <FaCheck className="text-green-400" />,
            position: "top-right",
        });
    };

    const notifyLevelUp = () => {
        toast.success(`🎉 Berhasil naik Level ${level + 1}!`, {
            theme: "dark",
            icon: <FaLevelUpAlt className="text-green-400" />,
            position: "top-right",
        });
    };

    const handleClick = () => {
        setSkor((prev) => prev + poinPerKlik);
        const id = Date.now();
        setFloatingPoints((prev) => [
            ...prev,
            {
                id, value: `+${poinPerKlik}`, x: Math.random() * 100 - 50
            },
        ]);
        setTimeout(() => {
            setFloatingPoints((prev) => prev.filter((point) => point.id
                !== id));
        }, 1200);
    };
    const upgradePoinPerKlik = () => {
        if (skor >= upgradeCostKlik) {
            setSkor((prev) => prev - upgradeCostKlik);
            setPoinPerKlik((prev) => prev + 1);
            setUpgradeCostKlik((prev) => Math.floor(prev * 1.5));
            notifyUpgrade("Poin per Klik");
        } else {
            toast.error("❌ Skor Tidak Cukup untuk Upgrade!", {
                theme:
                    "dark", position: "top-right"
            });
        }
    };

    const upgradeAutoKlik = () => {
        if (skor >= upgradeCostAutoKlik) {
            setSkor((prev) => prev - upgradeCostAutoKlik);
            setAutoKlik((prev) => prev * 2);
            setUpgradeCostAutoKlik((prev) => Math.floor(prev * 3));
            notifyUpgrade("Auto Klik");
        } else {
            toast.error("❌ Skor Tidak Cukup untuk Upgrade!", {
                theme: "dark",
                position: "top-right",
            });
        }
    };

    const upgradeDoublePoints = () => {
        if (skor >= doublePoinCost) {
            setSkor((prev) => prev - doublePoinCost);
            setPoinPerKlik((prev) => prev * 4);
            setDoublePoinCost((prev) => prev * 10);
            notifyUpgrade("Double Points");
        } else {
            toast.error("❌ Skor Tidak Cukup untuk Upgrade!", {
                theme: "dark",
                position: "top-right",
            });
        }
    };

    const upgradeMultiplyByFive = () => {
        if (skor >= multiplyByFiveCost) {
            setSkor((prev) => prev - multiplyByFiveCost);
            setPoinPerKlik((prev) => prev * 5);
            setMultiplyByFiveCost((prev) => prev * 100);
            notifyUpgrade("Multiply by 5");
        } else {
            toast.error("❌ Skor Tidak Cukup untuk Upgrade!", {
                theme: "dark",
                position: "top-right",
            });
        }
    };

    return (
        <div className="min-h-screen md:min-h-1/2 w-full md:w-3/4 lg:w
1/2 text-white p-4 md:p-8 m-4 md:m-12">
            <div className="max-w-2xl mx-auto text-center border-2 bg
gradient-to-b from-orange-700 to-amber-500 rounded-3xl p-4 md:p-8 
shadow-2xl bg-amber-800/20 backdrop-blur-sm">
                <div className="mb-4 md:mb-8 border-b-2 border-amber
300 pb-4 md:pb-6">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2 
md:mb-4 text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        Game EEK 💩
                    </h1>
                    <p className="text-sm md:text-lg text-amber-100 
italic">
                        Sentuh untuk Eek 💩 sebanyak mungkin!
                    </p>
                </div>

                <div className="bg-amber-800/30 p-4 md:p-6 rounded-xl 
mb-4 md:mb-8 border-2 border-amber-400 shadow-inner">
                    <p className="text-xl md:text-2xl font-bold mb-2 
md:mb-4 text-amber-100">
                        Skor: <span className="text-yellow-400 font
mono">{skor}</span> |
                        Level: <span className="text-yellow-400 font
mono">{level}</span>
                    </p>
                    <div className="w-full bg-gray-800 rounded-full h-3 
md:h-4 mb-2 md:mb-4 border border-amber-400">
                        <div
                            className="bg-yellow-400 h-3 md:h-4 
rounded-full transition-all duration-500 ease-out"
                            style={{
                                width: `${Math.min(strength, 100)}%`,
                                boxShadow: '0 2px 8px rgba(255, 196, 0, 0.5)'
                            }}
                        />
                    </div>
                </div>
                <div
                    className="relative cursor-pointer mb-6 md:mb-8 
group"
                    onClick={handleClick}
                >
                    <div className="text-6xl sm:text-8xl transition
transform duration-200  
                        hover:scale-110 active:scale-95 animate-bounce 
                        border-4 border-yellow-300 rounded-full p-2 
md:p-4 
                        shadow-[0_0_30px_rgba(255,196,0,0.3)] 
hover:shadow-[0_0_40px_rgba(255,196,0,0.5)]">
                        💩
                    </div>
                    {floatingPoints.map((point) => (
                        <span
                            key={point.id}
                            className="absolute text-yellow-400 font
bold animate-float 
                                text-lg md:text-xl drop-shadow
[0_2px_4px_rgba(0,0,0,0.5)]"
                            style={{ left: `${50 + point.x}%` }}
                        >
                            {point.value}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 
md:gap-4">
                    {[
                        {
                            onClick: upgradePoinPerKlik, text: `Upgrade 
Klik (💩 ${upgradeCostKlik})`, icon: <FaPlusCircle />
                        },
                        {
                            onClick: upgradeAutoKlik, text: `Auto Klik 
(💩 ${upgradeCostAutoKlik})`, icon: <FaUpwork />
                        },
                        {
                            onClick: upgradeDoublePoints, text: `Double 
Poin (💩 ${doublePoinCost})`, disabled: level < 2
                        },
                        {
                            onClick: upgradeMultiplyByFive, text: `x5 
Poin (💩 ${multiplyByFiveCost})`, disabled: level < 5
                        },
                    ].map((button, index) => (
                        <button
                            key={index}
                            className={`p-2 md:p-4 rounded-xl flex 
items-center justify-center gap-1 md:gap-3 transition-all 
                                border-2 border-yellow-400 bg-amber
700/80 hover:bg-amber-600 
                                hover:border-yellow-300 hover:scale
[1.02] active:scale-95shadow-lg hover:shadow-xl 
disabled:opacity-50 disabled:cursor-not-allowed 
                                disabled:border-amber-600 
disabled:shadow-none 
                                ${button.disabled ? 'grayscale' : ''}`}
                            onClick={button.onClick}
                            disabled={button.disabled}
                        >
                            <span className="text-yellow-400 text-lg 
md:text-xl">
                                {button.icon || <FaPlusCircle />}
                            </span>
                            <span className="text-sm md:text-base text
amber-50 font-semibold">{button.text}</span>
                        </button>
                    ))}
                </div>

                <div className="absolute top-0 left-0 w-full h-full 
pointer-events-none">
                    <div className="absolute -top-2 -left-2 w-16 h-16 
md:w-24 md:h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-2 -right-2 w-16 h
16 md:w-24 md:h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                </div>
            </div>
        </div>
    );
}

export default Game1; 