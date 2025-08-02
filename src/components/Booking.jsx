import React, { useState } from 'react'

const Booking = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    dogName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.')
  }

  const services = [
    'Full Groom',
    'Bath & Brush',
    'Puppy Introduction',
    'Nail Trim & Pedicure',
    'De-shedding Treatment',
    'Teeth Cleaning',
    'Consultation'
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ]

  return (
    <section id="booking" className="section-padding bg-warm-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to pamper your pup? Fill out the form below and we'll contact you to confirm your appointment. 
            We can't wait to meet your furry friend!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Booking Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    required
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors touch-target"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="dogName" className="block text-sm font-medium text-gray-700 mb-2">
                    Dog's Name *
                  </label>
                  <input
                    type="text"
                    id="dogName"
                    name="dogName"
                    required
                    value={formData.dogName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors touch-target"
                    placeholder="Enter your pup's name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors touch-target"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors touch-target"
                    placeholder="07566 224017"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors touch-target"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors touch-target"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors touch-target"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors touch-target"
                  placeholder="Tell us about your dog's temperament, any special requirements, or questions you may have..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-base sm:text-lg py-4 font-semibold"
              >
                Submit Booking Request
              </button>
            </form>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Visit Our Salon</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600 text-sm sm:text-base">23 Plough Way<br />London SE16 2LS<br />United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href="tel:07566224017" className="hover:text-gold-600 transition-colors">07566 224017</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href="mailto:info@thespotlightgroomers.co.uk" className="hover:text-gold-600 transition-colors">info@thespotlightgroomers.co.uk</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-warm-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Opening Hours</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-500 to-brandBlue-500 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">First Time Visitors</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎉</span>
                  <span className="text-sm sm:text-base">15% off your first grooming session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">☕</span>
                  <span className="text-sm sm:text-base">Complimentary tea or coffee while you wait</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📋</span>
                  <span className="text-sm sm:text-base">Free consultation and grooming plan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📸</span>
                  <span className="text-sm sm:text-base">Professional before & after photos</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Not sure which service is best for your pup? Give us a call and our friendly team 
                will help you choose the perfect grooming package.
              </p>
              <a href="tel:07566224017" className="btn-secondary w-full text-center py-3 touch-target">
                Call for Advice
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking