import {Colors} from "@/constant/Color";
import React from "react";

export default function Footer() {
    return (
        <div className="h-[200px] w-full p-4" style={{backgroundColor: Colors.green}}>
            <div>
                <h1 className="text-4xl font-black" style={{color: Colors.cream}}>
                    Care The Trash
                </h1>
            </div>
            <div>
                <small className="font-semibold text-md" style={{color: Colors.cream}}>
                    Made by Team 4
                </small>
                <ul className="pl-2">
                    <li className="text-sm underline" style={{color: Colors.cream}}>
                        <a href="https://reinharddaveyunardi.vercel.app">Reinhard Dave Yunardi</a>
                    </li>
                    <li className="text-sm" style={{color: Colors.cream}}>
                        <a>Chandra Wijaya Yeo</a>
                    </li>
                    <li className="text-sm" style={{color: Colors.cream}}>
                        <a>D&#39;Natale Cordiaz Domenica Panjaitan</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
