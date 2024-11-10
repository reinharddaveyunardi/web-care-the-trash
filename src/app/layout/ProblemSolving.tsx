import {Colors} from "@/constant/Color";
import React from "react";

export default function ProblemSolving() {
    return (
        <div className="w-full h-auto items-center flex flex-col gap-5">
            <h1 className="text-center text-4xl font-black" style={{color: Colors.green}}>
                Problem Solving
            </h1>
            <div className="w-full h-full flex flex-col gap-5">
                <div className="flex justify-between w-full px-[2%] gap-5">
                    <div className="py-4 px-4 w-[50%] h-auto rounded-md flex flex-col justify-around" style={{backgroundColor: Colors.green}}>
                        <h1 className="font-black text-2xl" style={{color: Colors.cream}}>
                            Problem
                        </h1>
                        <div className="gap-2 flex flex-col">
                            <small style={{color: Colors.cream}}>
                                We found a problem that people are very lazy to recycle their plastic waste, so we made a service that can help people recycle
                                their waste.
                            </small>
                            <small style={{color: Colors.cream}}>
                                Sometimes people still don&#39; t do the recycling, even though I already make the Care The Trash app, so I add a &#34;Point
                                System.&#34; The point can be obtained by recycling their waste to us. Also, the point can be redeemed for a fruit, vegetable,
                                or food. So it can motivate people to recycle their waste.
                            </small>
                        </div>
                    </div>
                    <div className="w-[50%] flex flex-col gap-2">
                        <div style={{backgroundColor: Colors.green}} className="h-[49%] w-[100%] rounded-md px-4 py-4">
                            <h1 className="font-black text-2xl" style={{color: Colors.cream}}>
                                Age
                            </h1>
                            <small style={{color: Colors.cream}}>We decided for age 16-62 years old can be able to use Care The Trash.</small>
                        </div>
                        <div style={{backgroundColor: Colors.green}} className="h-[49%] w-[100%] rounded-md px-4 py-4">
                            <h1 className="font-black text-2xl" style={{color: Colors.cream}}>
                                Mission
                            </h1>
                            <small style={{color: Colors.cream}}>We want to make our earth more healthy!</small>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-[100%] justify-center px-[2%]">
                    <div style={{backgroundColor: Colors.green}} className="py-4 px-4 h-full w-full justify-center flex flex-col rounded-md">
                        <h1 className="font-black text-2xl" style={{color: Colors.cream}}>
                            How can this app work properly?
                        </h1>
                        <div className="flex flex-col gap-2">
                            <ol>
                                <li>
                                    <small style={{color: Colors.cream}}>
                                        We need to make a relationship and work together with the government or waste bank.
                                    </small>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
