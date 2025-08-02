import React from 'react'

const Services = () => {
  const services = [
    {
      name: "Full Groom",
      description: "Complete grooming package including bath, blow-dry, nail trim, ear cleaning, and breed-specific styling",
      features: ["Professional cut", "Nail trim", "Ear cleaning", "Sanitary trim", "Cologne finish"],
      price: "From £45",
      duration: "2-3 hours",
      icon: "✂️"
    },
    {
      name: "Bath & Brush",
      description: "Perfect for maintaining your pup's hygiene between full grooms with premium shampoo and conditioning",
      features: ["Luxury bath", "Blow dry", "Brush out", "Nail trim", "Cologne spritz"],
      price: "From £25",
      duration: "1-1.5 hours",
      icon: "🛁"
    },
    {
      name: "Puppy Introduction",
      description: "Gentle first grooming experience designed to help young pups feel comfortable and confident",
      features: ["Gentle handling", "Mini bath", "Nail trim", "Face tidy", "Positive experience"],
      price: "From £20",
      duration: "45 minutes",
      icon: "🐶"
    },
    {
      name: "Nail Trim & Pedicure",
      description: "Professional nail trimming service to keep your dog's paws healthy and comfortable",
      features: ["Nail trimming", "Paw massage", "Pad moisturizing", "Quick assessment"],
      price: "From £10",
      duration: "15 minutes",
      icon: "💅"
    },
    {
      name: "De-shedding Treatment",
      description: "Specialized treatment to reduce shedding and keep your home fur-free for longer",
      features: ["De-shed shampoo", "Undercoat removal", "Blow dry", "Brush out"],
      price: "From £35",
      duration: "1.5-2 hours",
      icon: "🌟"
    },
    {
      name: "Teeth Cleaning",
      description: "Professional dental care to maintain your dog's oral health and fresh breath",
      features: ["Teeth brushing", "Tartar removal", "Gum massage", "Fresh breath"],
      price: "From £15",
      duration: "20 minutes",
      icon: "🦷"
    }
  ]

  const addOnServices = [
    { name: "Flea Treatment", price: "£10" },
    { name: "Anal Glands", price: "£8" },
    { name: "Face & Feet Trim", price: "£12" },
    { name: "Bow Tie/Bandana", price: "£3" },
    { name: "Nail Polish", price: "£5" },
    { name: "Cologne Upgrade", price: "£5" }
  ]

  return (
    <section id="services" className="section-padding bg-warm-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Grooming Services</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            As London's <span className="text-gold-600 font-semibold">Canine Business Of The Year Winner</span>, we offer comprehensive grooming services 
            tailored to your dog's specific needs. Our FSB and City&Guilds LCGI certified team specializes in puppy and dog grooming.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-warm-100">
              <div className="text-center mb-6">
                <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-gold-600">{service.price}</span>
                  <span className="text-xs sm:text-sm text-gray-500">{service.duration}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Includes:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <a href="#booking" className="w-full btn-primary text-center block py-3 text-sm sm:text-base font-semibold">
                  Book This Service
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Add-On Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {addOnServices.map((addon, index) => (
              <div key={index} className="text-center p-3 sm:p-4 bg-warm-50 rounded-lg">
                <div className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{addon.name}</div>
                <div className="text-gold-600 font-bold text-sm sm:text-base">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-gold-500 to-brandBlue-500 rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Not Sure Which Service Your Pup Needs?</h3>
          <p className="text-base sm:text-lg mb-6 opacity-90">
            Our experienced groomers are happy to provide a free consultation to recommend 
            the best grooming plan for your furry friend.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="#booking" className="bg-white text-brand-black hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 touch-target">
              Schedule Consultation
            </a>
            <a href="tel:07566224017" className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-black font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors duration-200 touch-target">
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">
            <strong>Please note:</strong> Prices may vary based on dog size, coat condition, and behavior. 
            Final pricing will be confirmed during your appointment.
          </p>
          <p>
            We accept cash, card payments, and contactless payments for your convenience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services