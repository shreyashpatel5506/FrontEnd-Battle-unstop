import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Play, Star, Sparkles } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      return () => heroElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Enhanced Design Background */}
      <div className="hero-design-bg">
        {/* Animated gradient background */}
        <div className="hero-gradient-layer" />

        {/* Mesh gradient overlay */}
        <div className="hero-mesh-gradient" />

        {/* Geometric patterns */}
        <div className="hero-patterns">
          <div className="pattern-grid" />
          <div className="pattern-dots" />
          <div className="pattern-lines" />
        </div>

        {/* Glowing orbs */}
        <div className="glowing-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
      </div>

      {/* 3D Background Elements */}
      <div className="hero-3d-bg">
        <motion.div
          className="hero-bg-gradient"
          style={{
            transform: `translateY(${scrollY * 0.5}px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`
          }}
        />

        {/* Floating 3D Shapes */}
        <motion.div
          className="floating-shape shape-1"
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 360, 0],
            rotateY: [0, 180, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translate3d(${mousePosition.x * 50}px, ${mousePosition.y * 30}px, 0)`
          }}
        />

        <motion.div
          className="floating-shape shape-2"
          animate={{
            y: [0, 25, 0],
            rotateZ: [0, 360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            transform: `translate3d(${mousePosition.x * -40}px, ${mousePosition.y * -20}px, 0)`
          }}
        />

        <motion.div
          className="floating-shape shape-3"
          animate={{
            y: [0, -20, 0],
            rotateX: [0, -180, 0],
            rotateZ: [0, 90, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 40}px, 0)`
          }}
        />

        {/* Enhanced Particle System */}
        <div className="particle-system">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`particle particle-${(i % 3) + 1}`}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0
              }}
              animate={{
                y: [null, -150],
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Design Elements */}
        <div className="geometric-elements">
          <div className="geo-circle geo-1" />
          <div className="geo-triangle geo-2" />
          <div className="geo-square geo-3" />
          <div className="geo-hexagon geo-4" />
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <Sparkles className="star-icon" />
            <span>Trusted by 10,000+ customers</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Create Amazing
            <span className="gradient-text"> Digital Experiences</span>
            <motion.span
              className="hero-3d-text"
              animate={{
                rotateY: [0, 5, 0],
                rotateX: [0, 2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              with 3D Magic
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants}>
            Transform your business with cutting-edge solutions that drive growth,
            enhance user experience, and deliver exceptional results.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="play-icon" />
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="floating-element element-1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="floating-element element-2"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  )
}

export default Hero
