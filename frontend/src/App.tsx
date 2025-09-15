import React from 'react'
import './App.css'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import { Experience } from '../components/Experience'
import { Contact } from '../components/Contact'

function App() {

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

      </div>
    </div>
  )
}

export default App
