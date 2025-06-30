import Image from "next/image"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/eye.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Navigation Header */}
        <div className="">
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
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center px-4 max-w-5xl mx-auto">
            {/* Launch Badge */}
            <div className="inline-block rounded-full mt-5 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm text-white/90 mb-8 border border-white/20">
              🚀 Launch Campaign – Fall 2025
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Smarter Automation.
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Connected Operations.
              </span>
              <span className="block text-white">Real Results.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed">
              Artisan Edge is not just an automation platform—it's the future of intelligent industrial operations.
              Designed to eliminate silos, amplify performance, and create real-time visibility across your entire
              operation.
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <button className="bg-white text-black px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join the Early Access List
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-18 pb-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm border border-white/20">
                🔗 Connect Anything
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm border border-white/20">
                🧠 Visual Automation
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm border border-white/20">
                🔒 Secure by Design
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute mid:bottom-20 bottom-45 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Artisan Edge Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unleash the Full Power of Your Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              This is your moment to leave behind disconnected systems and operational guesswork. Artisan Edge gives you
              the tools to act on real-time data, automate intelligently, and scale without limits—without ripping and
              replacing your infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-4">Connect Anything</h3>
              <p className="text-gray-600">
                Instantly integrate legacy PLCs, robotics, barcode scanners, and enterprise systems—no middleware
                needed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-4">Visual Automation</h3>
              <p className="text-gray-600">Build powerful workflows in minutes with zero coding knowledge.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">Secure by Design</h3>
              <p className="text-gray-600">
                ISA/IEC 62443-aligned encryption, access control, and compliance-ready logging—built in.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">This isn't incremental—it's transformational.</p>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">What You Can Do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">
                  Monitor production in real time and identify bottlenecks as they emerge
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">
                  Automate OEE tracking, downtime events, label printing, and predictive maintenance
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">Orchestrate devices across your factory floor and cloud systems</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">Deploy edge-native workflows that keep running—even offline</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">
                  Get visibility across sites, lines, and processes like never before
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900">Start with one line. Scale to the entire enterprise.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Industries We Serve</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Connect OT and IT, optimize production, and integrate data across equipment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-3">Logistics & Warehousing</h3>
              <p className="text-gray-600 text-sm">Automate picking, routing, label printing, and inventory syncing.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🍔</div>
              <h3 className="text-xl font-bold mb-3">Food Service</h3>
              <p className="text-gray-600 text-sm">
                Link POS to automated prep stations, track cook times, and reduce waste.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3">OEM & Integrators</h3>
              <p className="text-gray-600 text-sm">
                Embed Artisan Edge with white-labeled dashboards and deployment templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Install Edge Agent</h3>
              <p className="text-gray-600 text-sm">Install the Edge Agent on your site hardware</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Connect Systems</h3>
              <p className="text-gray-600 text-sm">Connect PLCs, sensors, barcode systems, or robots</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Create Flows</h3>
              <p className="text-gray-600 text-sm">Create flows in the low-code editor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Optimize</h3>
              <p className="text-gray-600 text-sm">Visualize, automate, and optimize from one central hub</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700">
              It's automation without the usual complexity. And it's ready when you are.
            </p>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Fall 2025 Pilot Program</h2>
          <p className="text-xl text-white/90 mb-8">
            We're offering a limited early access program for select partners and forward-leaning industrial operators.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">What You Get:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
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

          <p className="text-xl text-white/90 mb-8">This is your chance to lead the next industrial revolution.</p>

          <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Apply for Early Access Now
          </button>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reserve Your Spot – Pilot Launch Fall 2025</h2>
            <p className="text-gray-600">
              We will follow up within 48 hours to confirm pilot eligibility and next steps.
            </p>
          </div>

          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry / Sector</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Industry</option>
                <option>Manufacturing</option>
                <option>Logistics & Warehousing</option>
                <option>Food Service</option>
                <option>OEM & Integrators</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Automation Challenge (optional)
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Submit My Application
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
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
              <p className="text-gray-400 mb-6">
                Artisan Technologies builds intelligent automation software that connects machines, people, and data.
                Our flagship platform, Artisan Edge, helps you modernize industrial operations with speed, clarity, and
                impact.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>📧 sales@artisantec.io</p>
                <p>🌐 www.artisantec.io</p>
                <p>📞 (419) 481-6976</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Security</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>End-to-end TLS encryption</li>
                <li>Role-based access controls</li>
                <li>Offline-first execution</li>
                <li>Audit logging & compliance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Custom Solutions</li>
                <li>Enterprise Deployment</li>
                <li>Integration Services</li>
                <li>Support & Training</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Artisan Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Footer CTA */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base">
            Artisan Edge launches Fall 2025. Don't miss your opportunity to lead with smarter automation.
          </p>
          <div className="flex gap-3">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">
              Request Early Access
            </button>
            <button className="border border-white text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}
