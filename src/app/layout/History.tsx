import {Colors} from "@/constant/Color";
import React from "react";
import {HistoryData} from "@/data/data";
import {FaDownload} from "react-icons/fa6";

export default function History() {
    return (
        <div className="h-auto justify-center w-full flex flex-col gap-5">
            <div className="items-center flex flex-col gap-2">
                <h1 style={{color: Colors.green}} className="font-black text-4xl">
                    Design
                </h1>
                <small>This is the design of Care The Trash time by time</small>
            </div>
            <div className="flex w-full justify-center">
                <div className="flex justify-center flex-wrap gap-5">
                    {HistoryData.map((item, index) => (
                        <Card
                            key={index}
                            title={item.name}
                            info={item.info}
                            img={item.img}
                            url={item.url}
                            app={item.app}
                            year={item.year}
                            download={item.download}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Card({
    title,
    info,
    img,
    url,
    app,
    year,
    download,
}: {
    title: string;
    info: string;
    img: string;
    url: string;
    app: string;
    year: string;
    download?: string;
}) {
    return (
        <div className="h-[300px] w-[300px] p-2 rounded-md" style={{backgroundColor: Colors.green}}>
            <div>
                <img src={img} alt={title} className="rounded-lg h-[160px] w-full object-cover" />
            </div>
            <div>
                <h1 style={{color: Colors.cream}} className="font-black">
                    {title} - {year}
                </h1>
                <div className="flex flex-col justify-between h-full gap-5">
                    <div className="flex flex-col gap-2">
                        <small style={{color: Colors.cream}}>{info}</small>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <a href={url} className="w-fit px-2 font-bold rounded-sm" style={{backgroundColor: Colors.cream, color: Colors.green}}>
                            See on {app}
                        </a>
                        {download && (
                            <a
                                href={download}
                                download
                                className="w-fit flex items-center gap-2 px-2 font-bold rounded-sm"
                                style={{backgroundColor: Colors.cream, color: Colors.green}}
                            >
                                Download
                                <FaDownload />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
