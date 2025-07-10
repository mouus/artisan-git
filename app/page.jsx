"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import {
  LinkIcon,
  BrainCircuit,
  ShieldCheck,
  Factory,
  Warehouse,
  UtensilsCrossed,
  Wrench,
  Shield,
  School,
  Settings,
} from "lucide-react";

export default function Home() {
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [scrollAnimationtwo, setScrollAnimationtwo] = useState(false);
  const [scrollAnimationthree, setScrollAnimationthree] = useState(false);
  const [scrollAnimationfour, setScrollAnimationfour] = useState(false);

  const [openKey, setOpenKey] = useState(null);

  const items = [
    {
      key: "uni",
      icon: <School className="w-7 h-7 text-white" />,
      title: "From Experts at",
      logos: [
        "/ru.png",
        "/bu.png",
        "/asu.png",
        "/up.png",
        "/uh.png",
        "/utd.png",
        "/ut.png",
      ],
    },
    {
      key: "security",
      icon: <Shield className="w-7 h-7 text-white" />,
      title: "Security",
      content: `• End-to-end TLS encryption\n• Role-based access controls\n• Offline-first execution\n• Audit logging & compliance`,
    },
    {
      key: "solutions",
      icon: <Settings className="w-7 h-7 text-white" />,
      title: "Solutions",
      content: `• Custom Solutions\n• Enterprise Deployment\n• Integration Services\n• Support & Training`,
    },
  ];

  const companyLogos = [
    "/aws.png",
    "/nvidia.png",
    "/peach.png",
    "/gpk.jpg",
    "/rogue.png",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollAnimation(currentScrollY >= 200);
      setScrollAnimationtwo(currentScrollY >= 350);
      setScrollAnimationthree(currentScrollY >= 500);
      setScrollAnimationfour(currentScrollY >= 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-[#101010] overflow-hidden">
      <header className="z-10 absolute top-0 left-0 w-full py-4">
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
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center -mt-20 md:-mt-32">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/robo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xs" />
        </div>

        {/* Hero Content & Form Container */}
        <div className="relative  z-10 w-full max-w-7xl mx-auto px-4 mt-62 md:mt-72 flex flex-col md:flex-row  justify-between gap-8">
          {/* Left Side: Text Content */}
          <div className="md:w-3/5 lg:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-slide-in-left animation-delay-300">
              Smarter Automation.
              <span className="block text-blue-400">Connected Operations.</span>
              <span className="block text-white">Real Results.</span>
            </h1>
            <p
              style={{ animationDelay: "1s" }}
              className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto md:mx-0 opacity-0 animate-slide-in-left-p animation-delay-600"
            >
              Artisan Edge is the future of intelligent industrial operations.
              The Industiral Data Ops Platform for Industry 4.0. That transforms
              raw data into intelligent action. Designed to eliminate silos,
              amplify performance, and create real-time visibility across your
              entire operation.
            </p>
            <div className="flex gap-2 justify-center md:justify-start items-center text-white text-2xl md:text-3xl font-bold mb-6">
              Launch Campaign – Fall 2025
            </div>
            <div className="flex justify-center md:justify-start text-xl gap-3 font-bold text-white mb-12 ">
              <button className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white/90 hover:bg-white/20 transition-colors duration-300 flex items-center gap-2">
                Join the Early Access List
              </button>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pb-10">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm border border-white/20 flex items-center gap-2">
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

          {/* Right Side: Form Section */}
          <div className="w-full md:w-2/5 lg:w-1/2 md:mt-11 max-w-md mx-auto">
            <form className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl space-y-4 border border-slate-300 shadow-2xl">
              <div className="text-center mb-4">
                <h2 className="text-2xl md:text-3xl text-blue-950 font-bold mb-1">
                  Reserve Your Spot
                </h2>
                <p className="text-slate-600 text-sm">
                  Join the pilot launch in Fall 2025. We'll follow up within 48
                  hours.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 border border-slate-300 bg-slate-50 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-3 py-2 border border-slate-300 bg-slate-50 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="w-full px-3 py-2 border border-slate-300 bg-slate-50 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="Business Email"
                    className="w-full px-3 py-2 border border-slate-300 bg-slate-50 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Industry / Sector
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 bg-slate-50 text-slate-800 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm">
                  <option>Select Industry</option>
                  <option>Manufacturing</option>
                  <option>Logistics & Warehousing</option>
                  <option>Food Service</option>
                  <option>OEM & Integrators</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Primary Automation Challenge (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., tracking production downtime..."
                  className="w-full px-3 py-2 border border-slate-300 bg-slate-50 text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors duration-300"
              >
                Submit My Application
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Unleash Section */}
      <div className="relative bg-[url(/artisan.jpg)] bg-no-repeat bg-cover bg-[#101010] py-16">
        <div className="absolute inset-0  bg-black/80" />

        <section className="max-w-5xl mx-auto py-16 px-4 md:py-24 z-30  relative">
          <div className="md:max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
              Unleash the Full Power of Your Operations
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
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

        {/* REFACTORED TIMELINE */}
        <div className="relative max-w-4xl mx-auto mt-16 px-4 ">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700 hidden md:block"></div>

          {/* Timeline Item 1 */}
          <div className="relative flex md:items-center mb-12">
            <div
              className={`w-full md:w-1/2 md:pr-10 md:text-right ${
                scrollAnimation ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="p-6 bg-slate-900 rounded-xl shadow-md border border-slate-700">
                <h3 className="text-xl font-bold mb-2 text-blue-400">
                  Connect Anything
                </h3>
                <p className="text-slate-300">
                  Instantly integrate legacy PLCs, robotics, barcode scanners,
                  and enterprise systems—no middleware needed.
                </p>
              </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-slate-800 border-4 border-slate-100 w-12 h-12 rounded-full items-center justify-center z-10">
              <LinkIcon className="w-6 h-6 text-blue-400" />
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex md:items-center mb-12 md:flex-row-reverse">
            <div
              className={`w-full md:w-1/2 md:pl-10 text-left ${
                scrollAnimationtwo ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <div className="p-6 bg-slate-900 rounded-xl shadow-md border border-slate-700">
                <h3 className="text-xl font-bold mb-2 text-blue-400">
                  Visual Automation
                </h3>
                <p className="text-slate-300">
                  Build powerful workflows in minutes with zero coding
                  knowledge.
                </p>
              </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-slate-800 border-4 border-slate-100 w-12 h-12 rounded-full items-center justify-center z-10">
              <BrainCircuit className="w-6 h-6 text-blue-400" />
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex md:items-center mb-12">
            <div
              className={`w-full md:w-1/2 md:pr-10 md:text-right ${
                scrollAnimationthree ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="p-6 bg-slate-900 rounded-xl shadow-md border border-slate-700">
                <h3 className="text-xl font-bold mb-2 text-blue-400">
                  Secure-by-Design
                </h3>
                <p className="text-slate-300">
                  ISA/IEC 62443-aligned encryption, access control, and
                  compliance-ready logging built in.
                </p>
              </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-slate-800 border-4 border-slate-100 w-12 h-12 rounded-full items-center justify-center z-10">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* What you can do section */}
      <div className="bg-[#101010] py-20 px-4">
        <div className="text-white text-2xl md:text-5xl h-40 max-w-6xl mx-auto flex items-center justify-center text-center font-bold">
          <Typewriter
            options={{
              strings: [
                "What You Can Do",
                "Monitor production in real time and identify bottlenecks.",
                "Automate OEE tracking and predictive maintenance.",
                "Orchestrate devices across your factory and cloud.",
                "Deploy edge-native workflows that run offline.",
                "Get visibility across sites, lines, and processes.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 25,
            }}
          />
        </div>
        <div>
          {/* Trusted by section */}
          <div className="max-w-6xl mx-auto mt-16">
            <h3 className="text-center text-gray-400 text-lg mb-8">
              Trusted, Backed, or Supported By
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {companyLogos.map((logo, index) => (
                <div key={index} className="p-2  rounded-full">
                  <img
                    src={logo}
                    alt={`Company Logo ${index + 1}`}
                    className="h-28 w-28 md:h-28 md:w-28 rounded-full bg-white object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[url(/industries.jpg)] bg-cover bg-center bg-no-repeat py-20">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/90" />

        {/* Industries Section */}
        <div className=" relative  py-20">
          <section className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Industries We Serve
              </h2>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}
            >
              <div className="bg-slate-900/50 border border-slate-800 text-slate-200 p-6 rounded-2xl text-center">
                <Factory className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">
                  Manufacturing
                </h3>
                <p className="text-slate-300 text-sm">
                  Connect OT and IT, optimize production, and integrate data
                  across equipment.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 text-slate-200 p-6 rounded-2xl text-center">
                <Warehouse className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">
                  Logistics & Warehousing
                </h3>
                <p className="text-slate-300 text-sm">
                  Automate picking, routing, label printing, and inventory
                  syncing.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 text-slate-200 p-6 rounded-2xl text-center">
                <UtensilsCrossed className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">
                  Food Service
                </h3>
                <p className="text-slate-300 text-sm">
                  Link POS to automated prep stations, track cook times, and
                  reduce waste.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 text-slate-200 p-6 rounded-2xl text-center">
                <Wrench className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">
                  OEM & Integrators
                </h3>
                <p className="text-slate-300 text-sm">
                  Embed Artisan Edge with white-labeled dashboards and
                  deployment templates.
                </p>
              </div>
            </div>
            <div className="text-white text-lg font-bold text-center p-6 mt-4 rounded-2xl">
              <p>... and more!</p>
            </div>
          </section>
        </div>

        {/* Information Section */}
     <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 p-6 w-full">
      {/* Sidebar Icons */}
      <div className="flex md:flex-col gap-6 md:gap-8">
  {items.map(({ key, icon }) => (
    <div key={key} className="flex flex-col items-center">
      <button
        onClick={() => setOpenKey(openKey === key ? null : key)}
        className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow hover:scale-110 transition-transform"
      >
        {icon}
      </button>
      <span className="mt-2 z-20 text-xs text-slate-400 text-center">Tap or hover to view</span>
    </div>
  ))}
</div>

      {/* Modal Display */}
      <div className="flex-1 w-full max-w-3xl relative min-h-[220px]">
        {items.map(({ key, title, content, logos }) =>
          openKey === key ? (
            <div
              key={key}
              className="absolute left-0 top-0 w-full bg-white rounded-xl border shadow-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {title}
              </h3>
              {logos ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {logos.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="University Logo"
                      width={100}
                      height={50}
                      className="object-contain h-12 w-auto grayscale hover:grayscale-0 transition"
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm whitespace-pre-line text-gray-600">{content}</p>
              )}
            </div>
          ) : null
        )}
      </div>
    </div>

        {/* Pilot Program Section */}
        <div className="relative">
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl text-white md:text-5xl font-bold mb-6">
                Fall 2025 Pilot Program
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                We're offering a limited early access program for select
                partners and forward-leaning industrial operators.
              </p>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  What You Get:
                </h3>
                <div className="grid md:grid-cols-3 gap-8 md:gap-6 text-slate-300">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl mb-2">⏱️</div>
                    <p>6–8 week pilot (at no cost)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl mb-2">🤝</div>
                    <p>Hands-on onboarding and solution design support</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <p>VIP influence on product roadmap and feature feedback</p>
                  </div>
                </div>
              </div>
              <p className="text-xl text-slate-400 mb-8">
                This is your chance to lead the next industrial revolution.
              </p>
              <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Apply for Early Access Now
              </button>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-black py-12 text-slate-300">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main footer content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Image
                src="/logo.svg"
                alt="Artisan Edge Logo"
                width={120}
                height={40}
                className="h-auto w-32 filter brightness-0 invert mb-6"
              />
              <p className="text-slate-400 mb-6 text-sm">
                Artisan Technologies builds intelligent automation software that
                connects machines, people, and data.
              </p>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>📧 sales@artisantec.io</p>
                <p>
                  🌐{" "}
                  <a
                    href="https://www.artisantec.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.artisantec.io
                  </a>
                </p>
                <p>📞 (419) 481-6976</p>
              </div>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Security
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>End-to-end TLS encryption</li>
                <li>Role-based access controls</li>
                <li>Offline-first execution</li>
                <li>Audit logging & compliance</li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Solutions
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Custom Solutions</li>
                <li>Enterprise Deployment</li>
                <li>Integration Services</li>
                <li>Support & Training</li>
              </ul>
            </div>

            {/* ArtisanTech.io Link */}
            <div className="flex flex-col justify-start">
              <h3 className="text-lg font-semibold text-white mb-4">
                ArtisanTech.io
              </h3>
              <a
                href="https://www.artisantec.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 text-sm hover:underline transition duration-200"
              >
                Visit ArtisanTech.io →
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2025 Artisan Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
