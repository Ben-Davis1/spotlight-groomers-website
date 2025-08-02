import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Emma Wilson",
      dogName: "Bella",
      dogBreed: "Golden Retriever",
      rating: 5,
      text: "Absolutely fantastic service! Bella came out looking like a completely different dog. The team at Spotlight Groomers are so gentle and caring. Bella actually seems excited to go back for her next appointment!",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "James Thompson",
      dogName: "Max",
      dogBreed: "German Shepherd",
      rating: 5,
      text: "I was nervous about taking Max to a new groomer, but Sarah and her team put both of us at ease immediately. Max can be quite anxious, but they handled him with such patience and skill. Highly recommend!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Lisa Chen",
      dogName: "Coco",
      dogBreed: "Poodle",
      rating: 5,
      text: "The best grooming experience we've ever had! Coco's coat was in terrible condition when we brought her in, but Emma worked magic. Now she looks absolutely stunning and feels so much more comfortable.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David Park",
      dogName: "Luna",
      dogBreed: "Shih Tzu",
      rating: 5,
      text: "Professional, friendly, and clearly passionate about what they do. Luna loves going to Spotlight Groomers - it's like a spa day for her! The attention to detail is incredible and the prices are very reasonable.",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Rachel Green",
      dogName: "Buddy",
      dogBreed: "Labrador Mix",
      rating: 5,
      text: "I've been bringing Buddy here for over a year now and the service is consistently excellent. The team remembers both me and Buddy, and they always go above and beyond. It's clear they genuinely care about the dogs.",
      date: "2 days ago"
    },
    {
      id: 6,
      name: "Michael Roberts",
      dogName: "Rosie",
      dogBreed: "Yorkshire Terrier",
      rating: 5,
      text: "Rosie is quite the diva and can be difficult to handle, but Mike has the magic touch! She comes home looking beautiful and relaxed. The before and after photos they take are a lovely touch too.",
      date: "5 days ago"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ⭐
      </span>
    ))
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gold-50 to-brandBlue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Happy Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the loving pet parents who trust us 
            with their furry family members.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💬</div>
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
            </div>

            <div className="text-center">
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-200 to-brandBlue-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐕</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-brandBlue-600 font-semibold">
                    Owner of {testimonials[currentTestimonial].dogName} ({testimonials[currentTestimonial].dogBreed})
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentTestimonial].date}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <span className="text-gray-600">←</span>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial
                        ? 'bg-primary-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <span className="text-gray-600">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Return Rate</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Happy Family?</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Experience the Spotlight Groomers difference for yourself. Your pup deserves the best!
            </p>
            <a href="#booking" className="btn-primary text-lg px-8 py-4">
              Book Your Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials