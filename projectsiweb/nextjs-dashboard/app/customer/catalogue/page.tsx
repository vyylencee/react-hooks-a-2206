import { poppins,quicksand, fredoka } from "@/app/ui/fonts";
import Image from 'next/image';
import { BuyButton } from "@/app/ui/button";
import { NavigasiUtama } from "@/app/ui/dashboard/topnav";
import aqua from "@/public/aqua.png";
import tisu from "@/public/tisu.png";
import wipol from "@/public/wipol.png";
import popok from "@/public/popok.png";
import mie from "@/public/mie.png";
import piattos from "@/public/piattos.webp";
import oreo from "@/public/oreo.webp";
import uht from "@/public/uht.png";
import teh from "@/public/tehpucuk.png"

export default function CataloguePage() {
    return (
        <main className="flex min-h-screen flex-col bg-yellow-100 overflow-hidden">
            <NavigasiUtama />
            <div className='mt-40 ml-28 flex'>
                <div className="flex justify-between">
                    <div className="w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-14">
                            <Image
                            alt=""
                            src={aqua}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Aqua 600 ml</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 5.000</span>
                            </div>
                        </div>
                    </div>

                    <div className="justify-normal ml-16 w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-16">
                            <Image
                            alt=""
                            src={mie}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Mie Soto</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 3.500</span>
                            </div>
                        </div>
                    </div>

                    <div className="justify-normal ml-16 w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-16">
                            <Image
                            alt=""
                            src={wipol}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Wipol</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 18.000</span>
                            </div>
                        </div>
                    </div>

                    <div className="justify-normal ml-16 w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-16">
                            <Image
                            alt=""
                            src={popok}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Popok Bayi</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 56.000</span>
                            </div>
                        </div>
                    </div>

                    <div className="justify-normal ml-16 w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-14">
                            <Image
                            alt=""
                            src={tisu}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Tissue Paseo</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 13.500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-7 mb-8 ml-28 flex'>
                <div className="flex justify-between">
                    <div className="w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-14">
                            <Image
                            alt=""
                            src={teh}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="flex-col mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Teh Pucuk Harum</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 6.000</span>
                            </div>
                        </div>
                    </div>

                    <div className="justify-normal ml-16 w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-14">
                            <Image
                            alt=""
                            src={piattos}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="flex-col mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Piattos Rendang 68 g</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 11.000</span>
                            </div>
                        </div>
                    </div>

                    <div className="justify-normal ml-16 w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-14">
                            <Image
                            alt=""
                            src={uht}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Susu UHT 250 ml</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 6.250</span>
                            </div>
                        </div>
                    </div>

                    <div className="justify-normal ml-16 w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-14">
                            <Image
                            alt=""
                            src={oreo}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Oreo Cokelat 119.6 g</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 12.500</span>
                            </div>
                        </div>
                    </div>

                    <div className="justify-normal ml-16 w-56 h-56 rounded-lg bg-white shadow-lg">
                        <div className="mt-4 ml-14">
                            <Image
                            alt=""
                            src={aqua}
                            width={100}
                            height={100}
                            className="rounded-lg">
                            </Image>
                        </div>
                        <div className="mt-5 text-center justify-between">
                            <div>
                                <span className={`${quicksand.className} text-xl text-black`}>Aqua 600 ml</span>
                            </div>
                            <div>
                                <span className={`${quicksand.className} text-lg text-black font-bold`}>Rp 5.000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}