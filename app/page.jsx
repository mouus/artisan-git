"use client"

import Image from "next/image"
import { useState } from "react"
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
} from "lucide-react"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // Also toggle class on the body to ensure consistent background
    document.body.classList.toggle("dark", !isDark)
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
        {/* Hero Section */}
        <div className="relative min-h-screen overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/eye.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />

          <header className="relative z-20 p-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <div className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Artisan Edge Logo"
                  width={120}
                  height={120}
                  className="h-16 md:h-28 w-auto filter brightness-0 invert"
                />
              </div>
              <button
                onClick={toggleTheme}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </header>

          <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-128px)]">
            <div className="text-center px-4 max-w-5xl mx-auto">
              <div className="inline-block rounded-full mt-5 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm text-white/90 mb-8 border border-white/20">
                🚀 Launch Campaign – Fall 2025
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Smarter Automation.
                <span className="block text-slate-300">Connected Operations.</span>
                <span className="block text-white">Real Results.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed">
                Artisan Edge is not just an automation platform—it's the future of intelligent industrial operations.
                Designed to eliminate silos, amplify performance, and create real-time visibility across your entire
                operation.
              </p>
              <div className="mb-12">
                <button className="bg-white text-slate-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join the Early Access List
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-3 pt-18 pb-4">
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
          </div>
        </div>

        {/* Why Artisan Edge Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Unleash the Full Power of Your Operations</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                This is your moment to leave behind disconnected systems and operational guesswork. Artisan Edge gives
                you the tools to act on real-time data, automate intelligently, and scale without limits—without ripping
                and replacing your infrastructure.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <LinkIcon className="w-10 h-10 text-slate-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Connect Anything</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Instantly integrate legacy PLCs, robotics, barcode scanners, and enterprise systems—no middleware
                  needed.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <BrainCircuit className="w-10 h-10 text-slate-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Visual Automation</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Build powerful workflows in minutes with zero coding knowledge.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <ShieldCheck className="w-10 h-10 text-slate-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Secure by Design</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  ISA/IEC 62443-aligned encryption, access control, and compliance-ready logging—built in.
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">This isn't incremental—it's transformational.</p>
            </div>
          </div>
        </section>

        {/* What You Can Do Section */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">What You Can Do</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                {[
                  "Monitor production in real time and identify bottlenecks as they emerge",
                  "Automate OEE tracking, downtime events, label printing, and predictive maintenance",
                  "Orchestrate devices across your factory floor and cloud systems",
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-slate-400 dark:bg-slate-600 rounded-full mt-2.5 shrink-0"></div>
                    <p className="text-lg text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  "Deploy edge-native workflows that keep running—even offline",
                  "Get visibility across sites, lines, and processes like never before",
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-slate-400 dark:bg-slate-600 rounded-full mt-2.5 shrink-0"></div>
                    <p className="text-lg text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">Start with one line. Scale to the entire enterprise.</p>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Industries We Serve</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
                <Factory className="w-10 h-10 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Connect OT and IT, optimize production, and integrate data across equipment.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
                <Warehouse className="w-10 h-10 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Logistics & Warehousing</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Automate picking, routing, label printing, and inventory syncing.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
                <UtensilsCrossed className="w-10 h-10 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Food Service</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Link POS to automated prep stations, track cook times, and reduce waste.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
                <Wrench className="w-10 h-10 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">OEM & Integrators</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Embed Artisan Edge with white-labeled dashboards and deployment templates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Early Access Section */}
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
            <button className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply for Early Access Now
            </button>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Reserve Your Spot – Pilot Launch Fall 2025</h2>
              <p className="text-slate-600 dark:text-slate-400">
                We will follow up within 48 hours to confirm pilot eligibility and next steps.
              </p>
            </div>
            <form className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-300"
              >
                Submit My Application
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
              <p>&copy; 2025 Artisan Technologies. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
