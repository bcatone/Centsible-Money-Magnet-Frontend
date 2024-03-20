import React from 'react'
import TestimonialCard from './TestimonialCard'
import '../styles/testimonials.css'

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      quote:
        "Money Magnet has completely transformed how I manage my finances! It's so intuitive and user-friendly, and I've seen a significant improvement in my financial confidence.",
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 5,
      quote:
        "I've tried several financial apps, but Money Magnet stands out as the best. It's helped me stay organized and on top of my budgeting goals effortlessly.",
    },
    {
      id: 3,
      name: 'David Williams',
      rating: 5,
      quote:
        'As a busy professional, Money Magnet has been a lifesaver. I can easily track my expenses and investments, saving me valuable time and stress.',
    },
  ]
  return (
    <div className='testimonials-section'>
      <div>
        <h3 className='testimonials-header'>Join Thousands of Happy Customers</h3>
      </div>
      <div className='testimonial-cards'>
        {testimonialData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
