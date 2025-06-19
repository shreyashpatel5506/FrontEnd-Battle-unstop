import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Working with this team has been absolutely incredible. They delivered beyond our expectations and the results speak for themselves. Our conversion rate increased by 300%!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO, InnovateLab',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The technical expertise and attention to detail is outstanding. They built a complex platform that handles millions of users seamlessly. Highly recommended!'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'From design to development, every aspect was handled professionally. The user experience they created has significantly improved our customer engagement.'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Founder, StartupXYZ',
      company: 'StartupXYZ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'They transformed our vision into reality with precision and creativity. The mobile app they developed has received amazing feedback from our users.'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it - hear from our satisfied clients</p>
        </motion.div>

        <motion.div 
          className="testimonials-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="testimonials-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="quote-icon">
                  <Quote />
                </div>
                
                <div className="testimonial-content">
                  <div className="rating">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="star filled" />
                    ))}
                  </div>
                  
                  <p className="testimonial-text">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="testimonial-author">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h4>{testimonials[currentIndex].name}</h4>
                      <p>{testimonials[currentIndex].position}</p>
                      <span>{testimonials[currentIndex].company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button 
              className="carousel-btn prev"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft />
            </motion.button>
            
            <motion.button 
              className="carousel-btn next"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight />
            </motion.button>
          </div>

          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
