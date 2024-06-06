import React, { useEffect } from 'react'
import './App.css'

import gsap from 'gsap'

function App() {

  useEffect(() => {
    gsap.from('.heading', { opacity: 0, duration: 1, y: -100, delay: 1 })
    gsap.from('.desc-heading', { opacity: 0, duration: 1, y: -100 })
  }, [])
  

  return (
    <>
      <h1 className="heading">Covid-19</h1>
      <hr style={{ height: "2.7px", background: "#1daa34", border: "none" }}></hr>
      <h2 className="desc-heading">A dive into the pandemic and our past.</h2>
    </>
  )
}

export default App
