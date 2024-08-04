import React from 'react'
import '../seperateCSS/Footer.css'
import {Link} from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import LittleJapan from '../assets/LittleJapan.png'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={LittleJapan}></img>
                <p>contact us and follow us</p>
                <div className="social-icons">
                    <FaInstagram />
                    <FaLinkedin />
                    <FaXTwitter />
                    <FaFacebook />
                </div>
            </div>
            <div className="footer-content-center">
              <h2>Little-Japan</h2>
              <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <li>Delivery</li>
                <li>Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>Contact Support</h2>
              <ul>
                <li>Number: 1-333-222-5555</li>
                <li>Email: LittleJapan@gmail.com</li>
              </ul>
            </div>
        </div>
      <hr></hr>
      <p className="copyright">Copyright 2024 LittleJapan - all rights reserved</p>
    </div>
  )
}

export default Footer