import React, { useState } from 'react'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'before-after', name: 'Before & After' },
    { id: 'happy-pups', name: 'Happy Pups' },
    { id: 'styling', name: 'Creative Styling' }
  ]

  const galleryItems = [
    {
      id: 1,
      category: 'before-after',
      title: 'Golden Retriever Transformation',
      description: 'From scruffy to stunning! This beautiful Golden got the full spa treatment.',
      emoji: '🐕‍🦺',
      beforeAfter: true
    },
    {
      id: 2,
      category: 'happy-pups',
      title: 'Poodle Perfection',
      description: 'This adorable Poodle is all smiles after their grooming session!',
      emoji: '🐩',
      beforeAfter: false
    },
    {
      id: 3,
      category: 'styling',
      title: 'Yorkshire Terrier Bow Tie',
      description: 'Looking dapper with a stylish bow tie finish.',
      emoji: '🎀',
      beforeAfter: false
    },
    {
      id: 4,
      category: 'before-after',
      title: 'Shih Tzu Makeover',
      description: 'This little one went from matted to magnificent!',
      emoji: '🐾',
      beforeAfter: true
    },
    {
      id: 5,
      category: 'happy-pups',
      title: 'Labrador Fresh & Clean',
      description: 'Post-bath bliss! This Lab is feeling fresh and ready to play.',
      emoji: '🌟',
      beforeAfter: false
    },
    {
      id: 6,
      category: 'styling',
      title: 'Bichon Frise Fluffy Perfection',
      description: 'Perfectly rounded and fluffy - a classic Bichon style.',
      emoji: '☁️',
      beforeAfter: false
    },
    {
      id: 7,
      category: 'before-after',
      title: 'Cocker Spaniel Revival',
      description: 'From tangled to gorgeous - what a transformation!',
      emoji: '✨',
      beforeAfter: true
    },
    {
      id: 8,
      category: 'happy-pups',
      title: 'Beagle Bath Day',
      description: 'This Beagle is sparkling clean and ready for cuddles.',
      emoji: '🛁',
      beforeAfter: false
    },
    {
      id: 9,
      category: 'styling',
      title: 'Maltese Bow & Bandana',
      description: 'Accessorized to perfection with matching bow and bandana.',
      emoji: '🎀',
      beforeAfter: false
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery of Happy Pups</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See the amazing transformations and happy faces from our grooming sessions. 
            Every pup leaves looking and feeling their absolute best!
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-warm-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-gold-100 to-brandBlue-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="text-6xl mb-4">{item.emoji}</div>
                    {item.beforeAfter && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        BEFORE & AFTER
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold-500 to-brandBlue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Follow Us on Instagram!</h3>
            <p className="text-lg mb-6 opacity-90">
              See daily updates of our adorable clients and behind-the-scenes grooming magic. 
              Tag us in your pup's photos for a chance to be featured!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/thespotlightgroomers/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-brandBlue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>📸</span>
                <span>@thespotlightgroomers</span>
              </a>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-brandBlue-600 font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                Share Your Pup's Photos
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Want to see your pup featured in our gallery? Book a grooming session today!
          </p>
          <a href="#booking" className="btn-primary">
            Book Your Pup's Photo Session
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery