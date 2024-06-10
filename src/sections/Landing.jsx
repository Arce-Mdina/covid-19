import React, { useEffect } from 'react'

import gsap from 'gsap'


const Landing = () => {

  useEffect(() => {
    gsap.from('.heading', { opacity: 0, duration: 1, y: -100, delay: 1 })
    gsap.from('.desc-heading', { opacity: 0, duration: 1, y: -100 })
  }, [])

  return (
    <>
      <div>
          <div className="headings">
              <div className="header">
                  <h1 className="heading">Covid-19</h1>
                  <hr style={{ height: "2.7px", background: "#1daa34", border: "none" }}></hr>
                  <h2 className="desc-heading">A dive into the pandemic and our past.</h2>
              </div>
          </div>
      </div>

    </>
  )
}

export default Landing