import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Smartphone, Search, BarChart, Headphones } from 'lucide-react'
import './Services.css'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: <Code />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
      color: '#667eea'
    },
    {
      icon: <Palette />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: '#764ba2'
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
      color: '#f093fb'
    },
    {
      icon: <Search />,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Content Strategy'],
      color: '#f5576c'
    },
    {
      icon: <BarChart />,
      title: 'Analytics & Insights',
      description: 'Data-driven insights to help you make informed business decisions.',
      features: ['Google Analytics', 'Custom Dashboards', 'Performance Tracking', 'Reporting'],
      color: '#4facfe'
    },
    {
      icon: <Headphones />,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your business runs smoothly.',
      features: ['Live Chat', 'Phone Support', 'Email Support', 'Priority Response'],
      color: '#43e97b'
    }
  ]

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive solutions to grow your business</p>
        </motion.div>

        <div className="services-content">
          <motion.div 
            className="services-tabs"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div 
                  className="service-tab-icon"
                  style={{ background: service.color }}
                >
                  {service.icon}
                </div>
                <div className="service-tab-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="service-details"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="service-detail-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="service-detail-header"
                  style={{ background: `linear-gradient(135deg, ${services[activeService].color}, ${services[activeService].color}dd)` }}
                >
                  <div className="service-detail-icon">
                    {services[activeService].icon}
                  </div>
                  <h3>{services[activeService].title}</h3>
                </div>
                
                <div className="service-detail-content">
                  <p>{services[activeService].description}</p>
                  
                  <h4>What's Included:</h4>
                  <ul>
                    {services[activeService].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className="btn-service"
                    style={{ background: services[activeService].color }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
