import React from 'react'
import '../seperateCSS/Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src="https://c8.alamy.com/comp/2J2TJ03/sushi-logo-in-a-bowl-chopsticks-swoosh-bowl-oriental-japan-cuisine-japanese-sushi-seafood-logo-design-inspiration-2J2TJ03.jpg"></img>
                <p>contact us and follow us</p>
                <div className="social-icons">
                    <FaInstagram />
                    <FaLinkedin />
                    <FaXTwitter />
                    <FaFacebook />
                </div>
            </div>
            <div className="footer-content-center">
            
            </div>
            <div className="footer-content-right">
            
            </div>
        </div>
    </div>
  )
}

export default Footer