import React from 'react'
import "../Styles/home.css"
import img1 from  "./../images/entry4.jpg"
import img2 from "./../images/Hello.jpg"
import img3 from "./../images/Pencil.jpg"
import {Carousel} from "react-bootstrap"
import {Link} from 'react-scroll'
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'


function Home() {
  return (
    <div className='SlideShowContent'>
  <Carousel fade={true}>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='hellog'>Hello Guys!👋🏻</h3>
      <p className='hopeg'>Hope You Guys Doing Good!💖.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='myself'>I'am Tarun</h3>
      <div className="typewritercontent">
      <Typewriter 
        words={['Student','Designer','Developer','Gamer','Coder']}
        loop
        cursor
        cursorStyle='#'
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1000}

      />
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='building'>Building stuff is something I really enjoy.</h3>
      <h3 className='myproj'>Explore</h3>
      <Link to="skills" spy={true} smooth={true}> 👉🏻 Projects </Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
    </div>
  )
}

export default Home