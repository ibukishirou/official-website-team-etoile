import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Business from './components/Business'
import Works from './components/Works'
import Company from './components/Company'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [works, setWorks] = useState([])
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    fetch(`${baseUrl}data/works.json`)
      .then(res => res.json())
      .then(data => setWorks(data.works))
      .catch(err => console.error('Failed to load works:', err))
  }, [baseUrl])

  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Business />
        <Works works={works} />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
