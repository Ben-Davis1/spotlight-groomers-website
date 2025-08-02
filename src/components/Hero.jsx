import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-16 sm:pt-20 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="flex flex-col leading-tight">
                <span className="logo-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-black">The</span>
                <span className="logo-spotlight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider">SPOTLIGHT</span>
                <div className="flex items-center justify-center lg:justify-start space-x-1 sm:space-x-2">
                  <span className="logo-groomers text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-brand-black tracking-wider">GROOMERS</span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-black">®</span>
                </div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 text-gray-700 font-medium">London Dog Grooming Specialists</p>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
              <span className="text-gold-600 font-semibold">🏆 Canine Business Of The Year Winner</span>
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Premium dog grooming specialists in London SE16, delivering professional excellence and exceptional care. 
              Our FSB and City&Guilds LCGI certified team specializes in puppy and dog grooming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#booking" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 touch-target">
                Book Appointment
              </a>
              <a href="#services" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 touch-target">
                View Services
              </a>
            </div>
            
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-black">FSB</div>
                <div className="text-sm sm:text-base text-gray-600">Certified</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-black">LCGI</div>
                <div className="text-sm sm:text-base text-gray-600">City & Guilds</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-black">PUPPY</div>
                <div className="text-sm sm:text-base text-gray-600">Specialists</div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto bg-white border-4 border-gray-900 rounded-full flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">🐕</div>
                <div className="flex flex-col leading-none">
                  <span className="logo-script text-sm sm:text-base lg:text-lg text-brand-black">The</span>
                  <span className="logo-spotlight text-base sm:text-lg lg:text-xl font-bold tracking-wider">SPOTLIGHT</span>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="logo-groomers text-sm sm:text-base lg:text-lg text-brand-black tracking-wider">GROOMERS</span>
                    <span className="text-xs text-brand-black">®</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">DOG GROOMERS & SPA</p>
              </div>
            </div>
            
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white border-2 border-gray-900 text-brand-black rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center transform rotate-12 shadow-lg">
              <div className="text-center">
                <div className="text-xs font-bold leading-tight">CANINE</div>
                <div className="text-xs font-bold leading-tight">BUSINESS</div>
                <div className="text-xs font-bold leading-tight">OF THE YEAR</div>
                <div className="text-xs font-bold text-gold-600 leading-tight">WINNER</div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white border-2 border-gray-900 text-brand-black rounded-full w-18 h-18 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-sm sm:text-base lg:text-lg">🏆</div>
                <div className="text-xs font-bold leading-tight">FSB</div>
                <div className="text-xs font-bold leading-tight">LCGI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero