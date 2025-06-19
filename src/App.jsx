import React from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Loader />
        <Header />
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <Stats />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
