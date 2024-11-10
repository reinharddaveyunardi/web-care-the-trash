import {Colors} from "@/constant/Color";
import React from "react";

export default function About({mode}: {mode: boolean}) {
    return (
        <div style={{backgroundColor: mode === true ? Colors.darkGreen : Colors.green}} className="w-full h-[200px]">
            <div className="flex flex-col justify-around items-center w-full h-full px-3">
                <h1 style={{color: mode === true ? Colors.darkBg : Colors.cream}} className="font-black text-4xl">
                    About Us
                </h1>
                <small style={{color: mode === true ? Colors.darkBg : Colors.cream}} className="text-center lg:text-start md:text-start">
                    Care The Trash is a mobile app that aims to make waste management simple and green. Our app allows you to easily track and dispose of your
                    trash in an eco-friendly way.
                </small>
            </div>
        </div>
    );
}
