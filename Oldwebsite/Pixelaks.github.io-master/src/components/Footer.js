import React from "react";
import { Link } from "react-router-dom";
import {FaLinkedin,FaInstagram,FaYoutube,FaTwitter} from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';
function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="footer" id="contact">
        <h2>Contact</h2>
        <div className="content">
          <div className="email">
            <p>aksgames03@gmail.com</p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/anagh-k-satheesh-3914b0253"><FaLinkedin/></a>
                </li>
                <li>
                    <a href="https://instagram.com/anaghksatheesh?igshid=MzNlNGNkZWQ4Mg=="><FaInstagram/></a>
                </li>
                <li>
                    <a href="https://youtube.com/@Pixelaks"><FaYoutube/></a>
                </li>
                <li>
                    <a href="https://twitter.com/pixelaks?t=oofgkYYfdZ9kJDPulkifQg&s=08"><FaTwitter/></a>
                </li>
            </ul>
          </div>
          <div className="features">
            <h3>Features Info</h3>
            <ul>
              <li>
                <Link to="/" smooth onClick={scrollToTop}>Home</Link>
              </li>
              <li>
                <Link to="/about" smooth onClick={scrollToTop}>About</Link>
              </li>
              <li>
                <Link to="/work" smooth onClick={scrollToTop}>Work</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" smooth onClick={scrollToTop}>Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" smooth onClick={scrollToTop}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
 
    </div>
    </>
  );
}

export default Footer;
