import React from 'react'
import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'



import Science from './sections/Science'
import Symptoms from './sections/Symptoms'
import Treatments from './sections/Treatments'
import Preventions from './sections/Preventions'
import Pandemic from './sections/Pandemic'
import Quarantine from './sections/Quarantine'
import Lockdown from './sections/Lockdown'
import Impacts from './sections/Impacts'
import Cases from './sections/Cases'

import NotFound from './sections/NotFound'

import Landing from './sections/Landing'

import Sidebar from './components/Sidebar'


const App = () => {

  

  return (
    <>
      {/* <div className="headings">
        <div className="header">
          <h1 className="heading">Covid-19</h1>
          <hr style={{ height: "2.7px", background: "#1daa34", border: "none" }}></hr>
          <h2 className="desc-heading">A dive into the pandemic and our past.</h2>
        </div>

        <div>
          <a href="/covid-19/preventions">Learn more</a>
        </div>
      </div> */}

      <BrowserRouter basename='/covid-19'>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="*"
            element={
              <>
                <Sidebar />
                <Routes>
                  <Route path="/science-behind-covid" element={<Science />}/>
                  <Route path="/symptoms" element={<Symptoms />}/>
                  <Route path="/treatments" element={<Treatments />}/>
                  <Route path="/preventions" element={<Preventions />}/>
                  <Route path="/pandemic" element={<Pandemic />}/>
                  <Route path="/quarantine" element={<Quarantine />}/>
                  <Route path="/lockdown" element={<Lockdown />}/>
                  <Route path="/impacts" element={<Impacts />}/>
                  <Route path="/stats" element={<Cases />}/>
                </Routes>
              </>
            }
          />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<Landing />}/>
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
        </Routes> */}
      </BrowserRouter>
      
      {/* 
      <div className="content">

      </div> */}
    </>
  )
}

export default App
