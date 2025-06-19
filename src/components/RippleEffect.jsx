import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './RippleEffect.css'

const RippleEffect = ({ children, className = '', intensity = 1 }) => {
  const [ripples, setRipples] = useState([])
  const containerRef = useRef(null)

  const createRipple = (event) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    }

    setRipples(prev => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)
  }

  return (
    <div
      ref={containerRef}
      className={`ripple-container ${className}`}
      onClick={createRipple}
    >
      {children}
      
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size
          }}
          initial={{
            scale: 0,
            opacity: 0.6
          }}
          animate={{
            scale: 2 * intensity,
            opacity: 0
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default RippleEffect
