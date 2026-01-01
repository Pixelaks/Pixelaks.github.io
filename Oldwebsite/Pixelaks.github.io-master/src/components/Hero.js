import React from 'react'

function Hero() {
  return (
    <>
      <div className='hero'>
     <img src={process.env.PUBLIC_URL+"/logo.png"} alt="logo" />
     <p>Unlock your imagination, conquer new worlds, and redefine the game. Join us on an epic journey where dreams become pixels, and players become legends<br/><br/><b>Welcome to Pixelaks</b></p>
      </div>
    </>
  )
}

export default Hero
