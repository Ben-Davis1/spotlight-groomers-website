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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Excellence in Dog Grooming</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As the <span className="text-gold-600 font-semibold">Canine Business Of The Year Winner</span>, The Spotlight Groomers 
            represents the pinnacle of professional dog grooming services in London SE16. Our FSB and City&Guilds LCGI certified team 
            specializes in puppy and dog grooming, delivering exceptional care with unmatched expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <div key={index} className="bg-brand-black rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-gold-500">
              <div className="text-6xl mb-4">{credential.icon}</div>
              <h3 className="text-xl font-bold text-gold-400 mb-4">{credential.title}</h3>
              <p className="text-gray-300 leading-relaxed">{credential.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Award-Winning Professional Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-brand-black text-sm font-bold">★</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Canine Business Of The Year Winner</h4>
                  <p className="text-gray-600">Recognized for outstanding service excellence and professional standards in the dog grooming industry.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-brand-black text-sm font-bold">★</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certified Professional Team</h4>
                  <p className="text-gray-600">All our groomers maintain current industry certifications and participate in continuous professional development.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-brand-black text-sm font-bold">★</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Premium Service Standards</h4>
                  <p className="text-gray-600">We maintain the highest standards of hygiene, safety, and professional care in our state-of-the-art facility.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-brand-black text-sm font-bold">★</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Specialized Expertise</h4>
                  <p className="text-gray-600">Our team specializes in breed-specific grooming techniques and handles all temperaments with professional skill.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-brand-black border-2 border-gold-500 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 text-gold-400">🏆</div>
                <h4 className="text-xl font-bold text-gold-400 mb-2">CANINE BUSINESS</h4>
                <h4 className="text-xl font-bold text-gold-400 mb-2">OF THE YEAR</h4>
                <p className="text-lg text-white mb-4">WINNER</p>
                <p className="text-sm text-gray-300">Professional Excellence</p>
                <p className="text-sm text-gray-300">Industry Recognition</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-gold-500 text-brand-black rounded-full w-20 h-20 flex items-center justify-center transform rotate-12 shadow-lg">
              <div className="text-center">
                <div className="text-sm font-bold">2024</div>
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