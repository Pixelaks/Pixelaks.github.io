import React from 'react'
import "../styles/style.css"

import Footer from "./Footer";
import Navbar from "./Navbar";
function About() {
  return (
    <>
       <Navbar/>
      <div className='about'>
        <h1>About Us</h1>
        <h3>Pixelaks</h3>
       
        <p>This is Pixelaks Official Website. From Here You can know Everything about our Upcoming Projects and New Releases. We will keep posting more important post on this Website for all of you. Please give your support and love.<br/>Thanks For Visiting Our Site and also follow us on social medias.<br/><br/>Power up your gaming passion with us. Together, we'll redefine the realm of possibilities and create gaming greatness.</p>
      </div>
      <hr/>
      <Footer/>
    </>
  )
}

export default About
