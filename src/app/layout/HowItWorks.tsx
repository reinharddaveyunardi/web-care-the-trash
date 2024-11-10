import {Colors} from "@/constant/Color";
import React from "react";
import {HowItWorksData} from "@/data/data";

export default function HowItWorks() {
    return (
        <div className="h-auto w-full">
            <div className="items-center flex flex-col h-full">
                <h1 className="text-center font-black items-center text-4xl">How It Works?</h1>
                <div className="flex flex-wrap w-full justify-center items-center h-full gap-[20px] px-3">
                    {HowItWorksData.map((item, index) => (
                        <Card title={item.name} info={item.info} img={item.img} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Card({title, info, img}: {title: string; info: string; img: string}) {
    return (
        <div className="border-2 rounded-md w-[400px] h-[120px]" style={{backgroundColor: Colors.white}}>
            <div className="flex justify-around w-full items-center h-full">
                <img src={img} className="w-[40%] aspect-[3/2] object-contain mix-blend-multiply" />
                <div>
                    <h1 className="font-black">{title}</h1>
                    <div className="w-[80px]">
                        <small>{info}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
