"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

import {
  Sun,
  Moon,
  LinkIcon,
  BrainCircuit,
  ShieldCheck,
  Factory,
  Warehouse,
  UtensilsCrossed,
  Wrench,
  ActivitySquare,
  RefreshCw,
  Cpu,
  WifiOff,
  ScanLine,
} from "lucide-react";

export default function Home() {
  const heroTextRef = useRef(null);



  
  return (
    <div>
      <header className="p-2  dark:bg-slate-900  z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Artisan Edge Logo"
              width={100}
              height={100}
              className="h-16 md:h-28 w-auto filter brightness-0 invert"
            />
          </div>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex justify-end gap-18 pr-20 ">
          {[
            { href: "#features", label: "Features" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white group font-semibold text-lg tracking-wide"
            >
              {/* Underscore as default */}
              <span className="block group-hover:invisible transition duration-300">
                _____
              </span>
              {/* Actual text fades in on hover */}
              <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition duration-300">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Fixed Video Background */}
        <div className="fixed inset-0 z-[-1]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/robo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-slate-950/50" />
        </div>

        {/* Content Over Video */}
        <div
          ref={heroTextRef}
          className="relative z-10 flex items-center justify-center min-h-[calc(100vh-128px)] transition-transform duration-100 ease-out"
        >
          <div className="text-center px-4 max-w-5xl mx-auto">
            <div className="inline-block rounded-full mt-5 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm text-white/90 mb-8 border border-white/20">
              🚀 Launch Campaign – Fall 2025
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-slide-in-left animation-delay-300">
              Smarter Automation.
              <span className="block text-slate-300">
                Connected Operations.
              </span>
              <span className="block text-white">Real Results.</span>
            </h1>
            <p
              style={{ animationDelay: "1s" }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto opacity-0 animate-slide-in-left-p animation-delay-600"
            >
              Artisan Edge is not just an automation platform—it's the future of
              intelligent industrial operations. Designed to eliminate silos,
              amplify performance, and create real-time visibility across your
              entire operation.
            </p>
            <div className="mb-12">
              <button className="bg-white text-slate-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join the Early Access List
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-3  pb-10">
              <div className="bg-white/10  backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm border border-white/20 flex items-center gap-2">
                <LinkIcon className="w-4 h-4" /> Connect Anything
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm border border-white/20 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" /> Visual Automation
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm border border-white/20 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Secure by Design
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen pb-1 bg-white ">
        <section className="bg-white dark:bg-slate-900 py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Unleash the Full Power of Your Operations
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              This is your moment to leave behind disconnected systems and
              operational guesswork.
              <br className="hidden md:block" />
              <span className="inline-block mt-2">
                Artisan Edge gives you the tools to act on real-time data,
                automate intelligently, and scale without limits—without ripping
                and replacing your infrastructure.
              </span>
            </p>
          </div>
        </section>

        <div className="">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[616px] w-1 bg-slate-200 dark:bg-slate-700 "></div>

          {/* Timeline Item 1 */}
          <div className="relative flex items-center mb-20">
            <div className="w-1/2 pr-10 text-right hidden md:block">
              <div className="p-6 bg-white on-scroll:animate-slide-right animation-delay-600  dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Connect Anything</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Instantly integrate legacy PLCs, robotics, barcode scanners,
                  and enterprise systems—no middleware needed.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 border-4 border-slate-500 w-12 h-12 rounded-full flex items-center justify-center z-10">
              <LinkIcon className="w-6 h-6 text-slate-500" />
            </div>
            <div className="w-1/2 pl-10 md:hidden">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Connect Anything</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Instantly integrate legacy PLCs, robotics, barcode scanners,
                  and enterprise systems—no middleware needed.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-center mb-20 flex-row-reverse">
            <div className="w-1/2 pl-10  text-left hidden md:block">
              <div className="p-6 bg-white animate-slide-in-left animation-delay-600   dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Visual Automation</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Build powerful workflows in minutes with zero coding
                  knowledge.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 border-4 border-slate-500 w-12 h-12 rounded-full flex items-center justify-center z-10">
              <BrainCircuit className="w-6 h-6 text-slate-500" />
            </div>
            <div className="w-1/2 pr-10 md:hidden">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Visual Automation</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Build powerful workflows in minutes with zero coding
                  knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex items-center mb-20">
            <div className="w-1/2 pr-10 text-right hidden md:block">
              <div className="p-6 bg-white animate-slide-right animation-delay-600  dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Secure by Design</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  ISA/IEC 62443-aligned encryption, access control, and
                  compliance-ready logging—built in.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white  border-4 border-slate-500 w-12 h-12 rounded-full flex items-center justify-center z-10">
              <ShieldCheck className="w-6 h-6 text-slate-500" />
            </div>
            <div className="w-1/2 pl-10 md:hidden">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Secure by Design</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  ISA/IEC 62443-aligned encryption, access control, and
                  compliance-ready logging—built in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto py-20 px-4 text-center border-4 border-slate-200  rounded-2xl ">
          <p className="text-6xl font-bold text-gray-800">What You Can Do</p>
        </div>
        <div>
          {/* <div className="text-center">
            <p className="text-xl font-semibold">
              Start with one line. Scale to the entire enterprise.
            </p>
          </div> */}
        </div>
      </div>
    </div>
    
  );
}


