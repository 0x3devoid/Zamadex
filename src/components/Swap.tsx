"use client";

import Image from "next/image";
import { Wallet, ChevronDown, ArrowUpDown } from "lucide-react";

export default function SwapBox() {
    return (
        <>
            <div
                className=" bg-[#fff] lg:w-[500px] sm:w-[400px] w-full rounded-2xl m-auto  p-2 relative font-['Roboto']"
            >
                {/* SELL */}
                <div className="border border-gray-200 rounded-2xl p-4">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-sm text-gray-400">Sell</p>

                        <div className="flex justify-around items-center space-x-2 text-gray-400">
                            <Wallet className="w-4 h-4" />
                            <p className="font-bold">0</p>

                            <div className="border border-gray-200 rounded py-1 px-2 text-[12px] font-bold cursor-pointer">
                                <span>50%</span>
                            </div>
                            <div className="border border-gray-200 rounded py-1 px-2 text-[12px] font-bold cursor-pointer">
                                <span>Max</span>
                            </div>
                        </div>
                    </div>

                    {/* Input */}
                    <div className="flex justify-between items-center mt-5">
                        <div className="flex justify-between items-center space-x-3 border border-gray-200 bg-gray-200 rounded-2xl p-2 cursor-pointer">
                            <Image
                                src="/images/usdt1.png"
                                alt=""
                                width={25}
                                height={20}
                                className="rounded-full"
                            />
                            <h3 className="font-bold text-sm">USDT</h3>
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                        </div>

                        <input
                            type="number"
                            placeholder="0"
                            step="any"
                            className="text-right bg-transparent placeholder-gray-800 text-lg font-bold outline-none w-1/2"
                        />

                    </div>

                    {/* Value */}
                    <div className="flex justify-end mt-3">
                        <p className="font-bold text-gray-400">$0</p>
                    </div>
                </div>

                {/* Swap Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                    <button className="bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100 transition">
                        <ArrowUpDown className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* BUY */}
                <div className="border border-gray-200 rounded-2xl p-4 mt-5">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-sm text-gray-400">Buy</p>

                        <div className="flex justify-around items-center space-x-2 text-gray-400">
                            <Wallet className="w-4 h-4" />
                            <p className="font-bold">0</p>


                        </div>
                    </div>

                    {/* Input */}
                    <div className="flex justify-between items-center mt-5">
                        <div className="flex justify-between items-center space-x-3 border border-gray-200 bg-gray-200 rounded-2xl p-2 cursor-pointer">
                            <Image
                                src="/images/zamalogo.avif"
                                alt=""
                                width={25}
                                height={20}
                                className="rounded-full"
                            />
                            <h3 className="font-bold text-sm">ZAMA</h3>
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                        </div>
                        <input
                            type="number"
                            placeholder="0"
                            step="any"
                            className="text-right bg-transparent placeholder-gray-800 text-lg font-bold outline-none w-1/2"
                        />

                    </div>

                    {/* Value */}
                    <div className="flex justify-end mt-3">
                        <p className="font-bold text-gray-400">$0</p>
                    </div>
                </div>


            </div>

            <div className="flex justify-center items-center font-['Roboto'] mb-[50px]">
                <button className="lg:w-[500px] sm:w-[400px] w-full bg-[#f8a007] border border-[#FCB53B] text-black cursor-pointer font-bold text-xl py-4 px-6 rounded-2xl hover:bg-[#FCB53B] transition-colors">CONNECT WALLET</button>
            </div>

        </>
    );
}
