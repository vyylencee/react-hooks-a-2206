'use client';

import clsx from "clsx";
import { poppins } from "./fonts";
import { MagnifyingGlassIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import AboutPage from "../customer/about/page";

export function BuyButton () {
    return (
        <button className="inline-flex items-center text-center justify-center w-20 h-8 rounded-md bg-yellow-300">
            <a className={` ${poppins.className} text-center text-md font-semibold text-black`}>Beli</a>
        </button>
    )
}

export function EditButton () {
    return (
        <button className="inline-flex items-center text-center justify-center w-20 h-8 rounded-md bg-yellow-300">
            <a className={` ${poppins.className} text-center text-md font-semibold text-black`}>Edit</a>
        </button>
    )
}

export function DeleteButton () {
    return (
        <button className="inline-flex items-center text-center justify-center w-20 h-8 rounded-md bg-red-600">
            <a className={` ${poppins.className} text-center text-md font-semibold text-white`}>Hapus</a>
        </button>
    )
}

export function SearchButton () {
    return (
        <button className="inline-flex ml-2 items-center text-center justify-center bg-center w-10 h-10 rounded-lg bg-yellow-400">
            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
        </button>
    )
}

export function BackButton () {
    return (
        <button className="inline-flex ml-14 items-center text-center justify-center">
            <ArrowLeftCircleIcon className="w-10 h-10 text-white justify-center items-center text-center" />
        </button>
    )
}

