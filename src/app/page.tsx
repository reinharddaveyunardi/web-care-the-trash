"use client";
import Hero from "@/app/layout/Hero";
import About from "./layout/About";
import HowItWorks from "./layout/HowItWorks";
import ProblemSolving from "./layout/ProblemSolving";
import History from "./layout/History";
import Footer from "./layout/Footer";

export default function Home() {
    return (
        <div className="gap-5 flex flex-col">
            <Hero />
            <About />
            <HowItWorks />
            <ProblemSolving />
            <History />
            <Footer />
        </div>
    );
}
