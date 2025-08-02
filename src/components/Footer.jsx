import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thespotlightgroomers/',
      icon: '📸'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/thespotlightgroomers',
      icon: '📘'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@thespotlightgroomers',
      icon: '🎵'
    },
    {
      name: 'Google Reviews',
      url: 'https://www.google.com/search?q=the+spotlight+groomers',
      icon: '⭐'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Book Now', href: '#booking' }
  ]

  const services = [
    'Full Groom',
    'Bath & Brush',
    'Puppy Introduction',
    'Nail Trim',
    'De-shedding',
    'Teeth Cleaning'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gold-400 mb-4">The Spotlight Groomers</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
              London's multi-award winning dog grooming specialists, where every pup gets the royal treatment 
              they deserve. FSB and City&Guilds LCGI certified, professional puppy and dog grooming specialists passionate about making your furry friend look and feel their best.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gold-600 rounded-full flex items-center justify-center transition-colors duration-200 touch-target"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-gold-400 transition-colors duration-200 touch-target"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm sm:text-base text-gray-300 hover:text-gold-400 transition-colors duration-200 touch-target"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-gold-400 mt-1 flex-shrink-0 w-6 text-center">📍</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-base text-gray-300">23 Plough Way</p>
                  <p className="text-sm sm:text-base text-gray-300">London SE16 2LS</p>
                  <p className="text-sm sm:text-base text-gray-300">United Kingdom</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gold-400 flex-shrink-0 w-6 text-center">📞</span>
                <div className="min-w-0 flex-1">
                  <a 
                    href="tel:07566224017" 
                    className="text-sm sm:text-base text-gray-300 hover:text-gold-400 transition-colors duration-200 touch-target block"
                  >
                    07566 224017
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gold-400 flex-shrink-0 w-6 text-center">✉️</span>
                <div className="min-w-0 flex-1">
                  <a 
                    href="mailto:info@thespotlightgroomers.co.uk" 
                    className="text-xs sm:text-sm text-gray-300 hover:text-gold-400 transition-colors duration-200 touch-target block break-all"
                  >
                    info@thespotlightgroomers.co.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="text-sm sm:text-base font-semibold text-gold-400 mb-2">Opening Hours</h5>
              <div className="space-y-1 text-xs sm:text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
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
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} The Spotlight Groomers. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200 touch-target">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200 touch-target">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200 touch-target">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-xs sm:text-sm">
            <span>Made with</span>
            <span className="text-red-400 text-lg">❤️</span>
            <span>for dog lovers in London</span>
          </div>
        </div>
      </div>

      <div className="bg-brand-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="text-white font-semibold text-sm sm:text-base">
              🎉 New customers get 15% off their first grooming session!
            </div>
            <a 
              href="#booking" 
              className="bg-white text-brand-black hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 touch-target text-sm sm:text-base"
            >
              Book Now & Save
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer