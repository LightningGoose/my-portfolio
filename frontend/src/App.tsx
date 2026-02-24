import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 350)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <div>
        <Header />
        <main>
          <AboutMe />
          <Education />
          <Experience />
          <Contact />
        </main>
        <button
          type="button"
          className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          Top ↑
        </button>

      </div>
    </div>
  )
}

export default App
