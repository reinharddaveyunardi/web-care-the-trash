import {Colors} from "@/constant/Color";
import React from "react";
import {HowItWorksData} from "@/data/data";

export default function HowItWorks({mode}: {mode: boolean}) {
    return (
        <div style={{backgroundColor: mode === true ? Colors.darkGreen : Colors.cream}} className="h-auto w-full">
            <div className="items-center flex flex-col h-full">
                <h1 style={{color: mode === true ? Colors.darkBg : Colors.green}} className="text-center font-black items-center text-4xl">
                    How It Works?
                </h1>
                <div className="flex flex-wrap w-full justify-center items-center h-full gap-[20px] px-3">
                    {HowItWorksData.map((item, index) => (
                        <Card title={item.name} info={item.info} img={item.img} key={index} mode={mode} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Card({title, info, img, mode}: {title: string; info: string; img: string; mode: boolean}) {
    return (
        <div className="border-2 rounded-md w-[400px] h-[120px]" style={{backgroundColor: Colors.white}}>
            <div className="flex justify-around w-full items-center h-full">
                <img src={img} className="w-[40%] aspect-[3/2] object-contain mix-blend-multiply" />
                <div>
                    <h1 style={{color: mode === true ? Colors.darkBg : Colors.green}} className="font-black">
                        {title}
                    </h1>
                    <div className="w-[80px]">
                        <small>{info}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
