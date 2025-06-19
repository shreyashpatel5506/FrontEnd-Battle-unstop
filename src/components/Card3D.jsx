import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './Card3D.css'

const Card3D = ({ children, className = '', intensity = 15 }) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * intensity
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * intensity

    setRotateX(-rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`card-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      whileHover={{
        z: 50,
        transition: { duration: 0.3 }
      }}
    >
      <div className="card-3d-content">
        {children}
      </div>
      <div className="card-3d-glow" />
    </motion.div>
  )
}

export default Card3D
