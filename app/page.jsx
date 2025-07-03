"use client";

import Image from "next/image";
import { useRef, useEffect, useState, use } from "react";

import {

  LinkIcon,
  BrainCircuit,
  ShieldCheck,
  Factory,
  Warehouse,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";


export default function Home() {
  const heroTextRef = useRef(null);
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [scrollAnimationtwo, setScrollAnimationtwo] = useState(false);
  const [scrollAnimationthree, setScrollAnimationthree] = useState(false);
  const [scrollAnimationfour, setScrollAnimationfour] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  
  useEffect(() => {
  
    handleScroll();
    console.log("Scroll Y:", scrollY);
    console.log("animation:", scrollAnimation);
  });

    const handleScroll = () => {
        const scroll = window.scrollY;
        window.addEventListener("scroll", () => {
          setScrollY(window.scrollY*0.5 );

          if( scrollY >= 300) {
            setScrollAnimation(true);
          }
          if( scrollY >= 330) {
            setScrollAnimationtwo(true);
          }
          if( scrollY >= 400) {
            setScrollAnimationthree(true);
          }
          if( scrollY >= 1000) {
            setScrollAnimationfour(true);
          }

    });
      }



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
          <div className="text-center px-4 max-w-5xl ">
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

      <div className="relative   min-h-screen pb-1 pt-6 bg-white ">
        <section className="bg-white max-w-4xl mx-auto border-4 rounded-2xl border-slate-950 py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[656px] w-1 bg-slate-950 dark:bg-slate-700 "></div>

          {/* Timeline Item 1 */}
          <div className="relative flex items-center mb-20 pt-8">
            <div className="w-1/2 pr-10 text-right hidden md:block">
              <div 
                  className={`p-6 bg-white ${scrollAnimation && 'animate-slide-right animation-delay-600'}  dark:bg-slate-800 rounded-xl shadow-md`}>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Connect Anything</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Instantly integrate legacy PLCs, robotics, barcode scanners,
                  and enterprise systems—no middleware needed.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 border-4 border-slate-900 w-12 h-12 rounded-full flex items-center justify-center z-10">
              <LinkIcon className="w-6 h-6 border-slate-900" />
            </div>
            <div className="w-1/2 pl-10 md:hidden">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-slate-900">Connect Anything</h3>
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
              <div className={`p-6 bg-white ${scrollAnimationtwo && 'animate-slide-in-left animation-delay-600'}  dark:bg-slate-800 rounded-xl shadow-md`}>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Visual Automation</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Build powerful workflows in minutes with zero coding
                  knowledge.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 border-4 border-slate-900 w-12 h-12 rounded-full flex items-center justify-center z-10">
              <BrainCircuit className="w-6 h-6 border-slate-900" />
            </div>
            <div className="w-1/2 pr-10 md:hidden">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-slate-900">Visual Automation</h3>
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
              <div className={`p-6 bg-white ${scrollAnimationthree && 'animate-slide-right animation-delay-600'}  dark:bg-slate-800 rounded-xl shadow-md`}>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Secure by Design</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  ISA/IEC 62443-aligned encryption, access control, and
                  compliance-ready logging—built in.
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white  border-4 border-slate-900 w-12 h-12 rounded-full flex items-center justify-center z-10">
              <ShieldCheck className="w-6 h-6 border-slate-900" />
            </div>
            <div className="w-1/2 pl-10 md:hidden">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-slate-900">Secure by Design</h3>
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
        <div className="max-w-6xl mx-auto py-20 px-4 text-center border-4 border-slate-950 bg-slate-950 rounded-2xl">
          <div>
            <p className="text-6xl font-bold text-white ">What You Can Do</p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Top 3 items */}
            <div className="flex items-start p-4 rounded-2xl bg-white  hover:shadow-md transition">
              <p className="ml-4 text-lg font-medium text-gray-800 text-left">
                Monitor production in real time and identify bottlenecks as they
                emerge
              </p>
            </div>
            <div className="flex items-start p-4 rounded-2xl bg-white  hover:shadow-md transition">
              <p className="ml-4 text-lg font-medium text-gray-800 text-left">
                Automate OEE tracking, downtime events, label printing, and
                predictive maintenance
              </p>
            </div>
            <div className="flex items-start p-4 rounded-2xl bg-white  hover:shadow-md transition">
              <p className="ml-4 text-lg font-medium text-gray-800 text-left">
                Orchestrate devices across your factory floor and cloud systems
              </p>
            </div>

            {/* Bottom 2 items centered */}
            <div className="lg:col-span-3 gap-2 flex">
              <div className="flex items-start max-w-xl p-4 rounded-2xl bg-white hover:shadow-md transition">
                <p className="ml-4 text-lg font-medium text-gray-800 text-left">
                  Deploy edge-native workflows that keep running—even offline
                </p>
              </div>
              <div className="flex items-start max-w-xl p-4 rounded-2xl bg-white  hover:shadow-md transition">
                <p className="ml-4 text-lg font-medium text-gray-800 text-left">
                  Get visibility across sites, lines, and processes like never
                  before
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex min-h-screen">
        <div className="max-w-6xl min-h-screen bg-slate-950 z-10 text-slate-200 rounded-r-2xl ">
          <div className="max-w-2xl mx-auto px-4 pt-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-slate-200 font-bold mb-4">Reserve Your Spot – Pilot Launch Fall 2025</h2>
              <p className="text-slate-600 dark:text-slate-400">
                We will follow up within 48 hours to confirm pilot eligibility and next steps.
              </p>
            </div>
            <div className="max-w-2xl mx-auto px-4 pb-8">
              <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="Operations Manager"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane.doe@acme.com"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Industry / Sector
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300">
                  <option>Select Industry</option>
                  <option>Manufacturing</option>
                  <option>Logistics & Warehousing</option>
                  <option>Food Service</option>
                  <option>OEM & Integrators</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Primary Automation Challenge (optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="e.g., tracking production downtime, integrating legacy systems..."
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300 dark:placeholder-slate-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-slate-950 text-white dark:bg-white dark:text-slate-900 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-300"
              >
                Submit My Application
              </button>
            </form>
            </div>
          </div>  

        </div>
        <div>
        <section>
          <div className="py-10 mx-auto px-4 ">
            <div className="text-center mb-16">
              <h2 className="text-3xl -mb-10 -ml-10 slate-900  md:text-5xl font-bold ">Industries We Serve</h2>
            </div>
            <div className={`flex flex-col gap-2 ${scrollAnimationfour && 'animate-slide-left animation-delay-600'} -z-10 animation-delay-600`}>
              <div className="bg-slate-950 text-slate-200 dark:bg-slate-800 p-6 -ml-9 rounded-2xl  text-center">
                <Factory className="w-10 h-10 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Connect OT and IT, optimize production, and integrate data across equipment.
                </p>
              </div>
              <div className="bg-slate-950 text-slate-200 dark:bg-slate-800 p-6 -ml-9 rounded-2xl  text-center">
                <Warehouse className="w-10 h-10 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Logistics & Warehousing</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Automate picking, routing, label printing, and inventory syncing.
                </p>
              </div>
              <div className="bg-slate-950 text-slate-200 dark:bg-slate-800 p-6 -ml-9 rounded-2xl  text-center">
                <UtensilsCrossed className="w-10 h-10 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Food Service</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Link POS to automated prep stations, track cook times, and reduce waste.
                </p>
              </div>
              <div className="bg-slate-950 text-slate-200 dark:bg-slate-800 p-6 -ml-9 rounded-2xl  text-center">
                <Wrench className="w-10 h-10 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">OEM & Integrators</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Embed Artisan Edge with white-labeled dashboards and deployment templates.
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>

      </div>
      <div className="bg-white pt-10">
           <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Fall 2025 Pilot Program</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              We're offering a limited early access program for select partners and forward-leaning industrial
              operators.
            </p>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-slate-700 dark:text-slate-300">
                <div>
                  <div className="text-3xl mb-2">⏱️</div>
                  <p>6–8 week pilot (at no cost)</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <p>Hands-on onboarding and solution design support</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <p>VIP influence on product roadmap and feature feedback</p>
                </div>
              </div>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              This is your chance to lead the next industrial revolution.
            </p>
            <button className="bg-slate-950 text-white dark:bg-white dark:text-slate-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply for Early Access Now
            </button>
          </div>
        </section>

      </div>
       <footer className="bg-slate-950 py-4 text-slate-300 ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <Image
                  src="/logo.svg"
                  alt="Artisan Edge Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto filter brightness-0 invert mb-6"
                />
                <p className="text-slate-400 mb-6">
                  Artisan Technologies builds intelligent automation software that connects machines, people, and data.
                  Our flagship platform, Artisan Edge, helps you modernize industrial operations with speed, clarity,
                  and impact.
                </p>
                <div className="space-y-2 text-slate-400">
                  <p>📧 sales@artisantec.io</p>
                  <p>🌐 www.artisantec.io</p>
                  <p>📞 (419) 481-6976</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>End-to-end TLS encryption</li>
                  <li>Role-based access controls</li>
                  <li>Offline-first execution</li>
                  <li>Audit logging & compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>Custom Solutions</li>
                  <li>Enterprise Deployment</li>
                  <li>Integration Services</li>
                  <li>Support & Training</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
              <p>&copy; 2025 Artisan Technologies. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </div>
  );
}
