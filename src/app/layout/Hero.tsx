import {Colors} from "@/constant/Color";
import React from "react";
import {FaInstagram} from "react-icons/fa";

export default function Hero({mode}: {mode: boolean}) {
    return (
        <div className="h-screen w-full flex items-center justify-center flex-col">
            <div className="mx-[4%] h-full w-full flex gap-10 flex-col md:flex-row lg:flex-row justify-center md:justify-around lg:justify-around items-center">
                <div>
                    <div className="flex gap-5 flex-col relative justify-center items-center">
                        <img src="/phone.png" className="w-full" alt="Phone Screenshot" />
                        {/* <div className="w-[80%] text-center">
                            <small className="text-center text-xs">This image is a screenshot of the Care The Trash app. And still on development</small>
                        </div> */}
                    </div>
                </div>
                <div className="h-full w-full max-w-[500px] max-h-[400px] py-[3%]">
                    <div className="flex gap-6 flex-col items-center md:items-start lg:items-start justify-start md:justify-between lg:justify-between h-full">
                        <div className="flex flex-col gap-2">
                            <h1
                                className="text-4xl text-center md:text-start lg:text-start font-black"
                                style={{color: mode === true ? Colors.darkGreen : Colors.green}}
                            >
                                Care The Trash
                            </h1>
                            <p className="text-center md:text-start lg:text-start text-md" style={{color: mode === true ? Colors.white : Colors.black}}>
                                Manage trash easily with our modern mobile app.
                            </p>
                        </div>
                        <div className="flex md:flex-col lg:flex-col justify-center md:justify-start lg:justify-start w-full gap-2">
                            <p style={{color: mode === true ? Colors.white : Colors.black}}>Socials: </p>
                            <a
                                className="flex items-center gap-1"
                                href="https://www.instagram.com/carethetrash/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{color: mode === true ? Colors.white : Colors.black}}
                            >
                                <FaInstagram color={mode === true ? Colors.white : Colors.black} />
                                @carethetrash
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
