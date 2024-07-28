import React from 'react'
import Navbar from '../../components/NavBar'
import Header from '../../components/Header'
import {Link} from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-contents">
        <h1>About us</h1>
        <p>Welcome to Little Japan, your go-to destination for all your favorite Japanese cuisine. We offer a wide variety of dishes, including Sushi, Sashimi, Nigiri, Bento Boxes, and much more. With years of experience, we pride ourselves on delivering the finest Japanese food right to your doorstep. Order now and enjoy the taste of Japan in the comfort of your home.</p>
        <Link to='/'><button>Go Back</button></Link>
      </div>
    </div>
  )
}

export default About