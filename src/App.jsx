import React, { useEffect } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

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
import Impacts from './sections/Impacts';

import NotFound from './sections/NotFound';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    gsap.from('.heading', { opacity: 0, duration: 1, y: -100, delay: 1 })
    gsap.from('.desc-heading', { opacity: 0, duration: 1, y: -100 })
  }, [])
  

  return (
    <>
      

      <div className="content">

        <BrowserRouter basename='/covid-19'>
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/science-behind-covid" element={<Science />}/>
            <Route path="/symptoms" element={<Symptoms />}/>
            <Route path="/treatments" element={<Treatments />}/>
            <Route path="/preventions" element={<Preventions />}/>
            <Route path="/pandemic" element={<Pandemic />}/>
            <Route path="/quarantine" element={<Quarantine />}/>
            <Route path="/lockdown" element={<Lockdown />}/>
            <Route path="/impacts" element={<Impacts />}/>
            <Route path="/stats" element={<Cases />}/>

            <Route element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
