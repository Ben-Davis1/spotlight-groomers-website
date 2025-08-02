import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="flex flex-col leading-tight">
                <span className="logo-script text-5xl md:text-6xl lg:text-7xl text-brand-black">The</span>
                <span className="logo-spotlight text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">SPOTLIGHT</span>
                <div className="flex items-center space-x-2">
                  <span className="logo-groomers text-3xl md:text-4xl lg:text-5xl text-brand-black tracking-wider">GROOMERS</span>
                  <span className="text-lg md:text-xl text-brand-black">®</span>
                </div>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl mt-4 text-gray-700 font-medium">London Dog Grooming Specialists</p>
            </div>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              <span className="text-gold-600 font-semibold">🏆 Canine Business Of The Year Winner</span>
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Premium dog grooming specialists in London SE16, delivering professional excellence and exceptional care. 
              Our FSB and City&Guilds LCGI certified team specializes in puppy and dog grooming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#booking" className="btn-primary text-lg px-8 py-4">
                Book Appointment
              </a>
              <a href="#services" className="btn-secondary text-lg px-8 py-4">
                View Services
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-black">FSB</div>
                <div className="text-gray-600">Certified</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-black">LCGI</div>
                <div className="text-gray-600">City & Guilds</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-black">PUPPY</div>
                <div className="text-gray-600">Specialists</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto bg-white border-4 border-gray-900 rounded-full flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-6xl mb-2">🐕</div>
                <div className="flex flex-col leading-none">
                  <span className="logo-script text-lg text-brand-black">The</span>
                  <span className="logo-spotlight text-xl font-bold tracking-wider">SPOTLIGHT</span>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="logo-groomers text-lg text-brand-black tracking-wider">GROOMERS</span>
                    <span className="text-xs text-brand-black">®</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">DOG GROOMERS & SPA</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white border-2 border-gray-900 text-brand-black rounded-full w-28 h-28 flex items-center justify-center transform rotate-12 shadow-lg">
              <div className="text-center">
                <div className="text-xs font-bold">CANINE</div>
                <div className="text-xs font-bold">BUSINESS</div>
                <div className="text-xs font-bold">OF THE YEAR</div>
                <div className="text-xs font-bold text-gold-600">WINNER</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white border-2 border-gray-900 text-brand-black rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-lg">🏆</div>
                <div className="text-xs font-bold">FSB</div>
                <div className="text-xs font-bold">LCGI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero