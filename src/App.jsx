import React, { useEffect } from 'react'
import './App.css'

import gsap from 'gsap'

import About from './sections/About';
import Cases from './sections/Cases';
import Lockdown from './sections/Lockdown';
import Pandemic from './sections/Pandemic';
import Preventions from './sections/Preventions';
import Quarantine from './sections/Quarantine';
import Science from './sections/Science';
import Symptoms from './sections/Symptoms';
import Treatments from './sections/Treatments';
import Virus from './sections/Virus';

function App() {

  useEffect(() => {
    gsap.from('.heading', { opacity: 0, duration: 1, y: -100, delay: 1 })
    gsap.from('.desc-heading', { opacity: 0, duration: 1, y: -100 })
  }, [])
  

  return (
    <>
      <div className="headings">
        <div className="header">
          <h1 className="heading">Covid-19</h1>
          <hr style={{ height: "2.7px", background: "#1daa34", border: "none" }}></hr>
          <h2 className="desc-heading">A dive into the pandemic and our past.</h2>
        </div>
      </div>

      <div className="content">
        <About />
      </div>
    </>
  )
}

export default App
