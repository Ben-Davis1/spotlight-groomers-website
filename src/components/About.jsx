import React from 'react'

const About = () => {
  const credentials = [
    {
      title: "FSB Certified",
      description: "Federation of Small Businesses certified, demonstrating our commitment to professional business standards and excellence",
      icon: "🏅"
    },
    {
      title: "City & Guilds LCGI",
      description: "London City & Guilds Institute certified groomers with recognized qualifications in professional dog grooming",
      icon: "🎓"
    },
    {
      title: "Puppy Specialists",
      description: "Expert puppy grooming specialists providing gentle, stress-free introductory grooming experiences for young dogs",
      icon: "🐶"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Excellence in Dog Grooming</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            As the <span className="text-gold-600 font-semibold">Canine Business Of The Year Winner</span>, The Spotlight Groomers 
            represents the pinnacle of professional dog grooming services in London SE16. Our FSB and City&Guilds LCGI certified team 
            specializes in puppy and dog grooming, delivering exceptional care with unmatched expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {credentials.map((credential, index) => (
            <div key={index} className="bg-brand-black rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-gold-500">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">{credential.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gold-400 mb-4">{credential.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{credential.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Award-Winning Professional Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-brand-black text-sm font-bold">★</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Canine Business Of The Year Winner</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Recognized for outstanding service excellence and professional standards in the dog grooming industry.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-brand-black text-sm font-bold">★</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Certified Professional Team</h4>
                  <p className="text-gray-600 text-sm sm:text-base">All our groomers maintain current industry certifications and participate in continuous professional development.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-brand-black text-sm font-bold">★</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Premium Service Standards</h4>
                  <p className="text-gray-600 text-sm sm:text-base">We maintain the highest standards of hygiene, safety, and professional care in our state-of-the-art facility.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-brand-black text-sm font-bold">★</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Specialized Expertise</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Our team specializes in breed-specific grooming techniques and handles all temperaments with professional skill.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-brand-black border-2 border-gold-500 rounded-3xl p-6 sm:p-8 aspect-square flex items-center justify-center mx-auto max-w-sm">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-gold-400">🏆</div>
                <h4 className="text-lg sm:text-xl font-bold text-gold-400 mb-2">CANINE BUSINESS</h4>
                <h4 className="text-lg sm:text-xl font-bold text-gold-400 mb-2">OF THE YEAR</h4>
                <p className="text-base sm:text-lg text-white mb-4">WINNER</p>
                <p className="text-xs sm:text-sm text-gray-300">Professional Excellence</p>
                <p className="text-xs sm:text-sm text-gray-300">Industry Recognition</p>
              </div>
            </div>
            
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gold-500 text-brand-black rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transform rotate-12 shadow-lg">
              <div className="text-center">
                <div className="text-xs sm:text-sm font-bold">2024</div>
                <div className="text-xs font-bold">AWARD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About