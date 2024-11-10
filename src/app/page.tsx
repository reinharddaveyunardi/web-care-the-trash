"use client";
import Hero from "@/app/layout/Hero";
import About from "./layout/About";
import HowItWorks from "./layout/HowItWorks";
import ProblemSolving from "./layout/ProblemSolving";
import History from "./layout/History";
import {useState} from "react";
import {Colors} from "@/constant/Color";
import Footer from "./layout/Footer";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div style={{backgroundColor: darkMode === true ? "#161d20" : Colors.cream}} className="gap-5 flex flex-col">
            <Hero mode={darkMode} />
            <About mode={darkMode} />
            <HowItWorks mode={darkMode} />
            <ProblemSolving />
            <History />
            <Footer />
        </div>
    );
}
