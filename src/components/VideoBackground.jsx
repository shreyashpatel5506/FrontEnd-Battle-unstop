import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import './VideoBackground.css'

const VideoBackground = ({ 
  videoSrc, 
  fallbackImage, 
  overlay = true, 
  className = '',
  children 
}) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <div className={`video-background ${className}`}>
      {videoSrc && (
        <video
          ref={videoRef}
          className="video-background-video"
          autoPlay
          muted
          loop
          playsInline
          poster={fallbackImage}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {!videoSrc && fallbackImage && (
        <div 
          className="video-background-image"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}
      
      {overlay && (
        <motion.div 
          className="video-background-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}
      
      <div className="video-background-content">
        {children}
      </div>
    </div>
  )
}

export default VideoBackground
