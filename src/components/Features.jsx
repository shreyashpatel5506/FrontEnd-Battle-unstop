import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Shield, Smartphone, Globe, Users, Award } from 'lucide-react'
import Card3D from './Card3D'
import RippleEffect from './RippleEffect'
import './Features.css'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <Zap />,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology for blazing fast load times.'
    },
    {
      icon: <Shield />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data protection.'
    },
    {
      icon: <Smartphone />,
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices and screen sizes.'
    },
    {
      icon: <Globe />,
      title: 'Global Reach',
      description: 'CDN-powered delivery ensuring fast access from anywhere in the world.'
    },
    {
      icon: <Users />,
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless team collaboration and project management.'
    },
    {
      icon: <Award />,
      title: 'Award Winning',
      description: 'Recognized by industry leaders for innovation and excellence.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="features" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Powerful Features</h2>
          <p>Everything you need to build amazing digital experiences</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <RippleEffect className="card-ripple" intensity={1.2}>
                <Card3D className="feature-card" intensity={12}>
                  <motion.div
                    className="feature-icon"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  {/* Gradient overlay */}
                  <div className="feature-gradient-overlay" />
                </Card3D>
              </RippleEffect>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
