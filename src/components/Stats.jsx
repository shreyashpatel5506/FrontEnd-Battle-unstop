import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Award, Coffee, Heart } from 'lucide-react'
import { images } from '../assets'
import './Stats.css'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const stats = [
    {
      icon: <Users />,
      number: 10000,
      suffix: '+',
      label: 'Happy Clients',
      color: '#667eea'
    },
    {
      icon: <Award />,
      number: 150,
      suffix: '+',
      label: 'Projects Completed',
      color: '#764ba2'
    },
    {
      icon: <Coffee />,
      number: 5000,
      suffix: '+',
      label: 'Cups of Coffee',
      color: '#f093fb'
    },
    {
      icon: <Heart />,
      number: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      color: '#f5576c'
    }
  ]

  const AnimatedCounter = ({ number, suffix, inView }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (inView) {
        let start = 0
        const end = number
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(timer)
      }
    }, [inView, number])

    return (
      <span>
        {count.toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <section className="stats" ref={ref}>
      <div className="stats-bg" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Achievements</h2>
          <p>Numbers that speak for our success</p>

          {/* Stats Image */}
          <motion.div
            className="stats-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={images.stats}
              alt="Statistics Overview"
              className="stats-image"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </motion.div>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="stat-icon"
                style={{ background: stat.color }}
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                {stat.icon}
              </motion.div>

              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <AnimatedCounter
                  number={stat.number}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </motion.div>

              <motion.p
                className="stat-label"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.5
                }}
              >
                {stat.label}
              </motion.p>

              {/* Animated background circle */}
              <motion.div
                className="stat-bg-circle"
                style={{ background: `${stat.color}20` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating particles */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * 400,
                opacity: 0
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
