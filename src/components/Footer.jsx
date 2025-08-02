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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gold-400 mb-4">The Spotlight Groomers</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
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
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-gold-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">23 Plough Way</p>
                  <p className="text-gray-300">London SE16 2LS</p>
                  <p className="text-gray-300">United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gold-400">📞</span>
                <a 
                  href="tel:07566224017" 
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
                >
                  07566 224017
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gold-400">✉️</span>
                <a 
                  href="mailto:info@thespotlightgroomers.co.uk" 
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
                >
                  info@thespotlightgroomers.co.uk
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-gold-400 mb-2">Opening Hours</h5>
              <div className="space-y-1 text-sm text-gray-300">
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

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} The Spotlight Groomers. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <span className="text-red-400 text-lg">❤️</span>
            <span>for dog lovers in London</span>
          </div>
        </div>
      </div>

      <div className="bg-brand-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-white font-semibold">
              🎉 New customers get 15% off their first grooming session!
            </div>
            <a 
              href="#booking" 
              className="bg-white text-brand-black hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
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