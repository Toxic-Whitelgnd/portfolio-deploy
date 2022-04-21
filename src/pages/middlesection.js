import React, { Component, useEffect } from 'react'
import Aboutme from './Aboutme'
import Home from './home'
import "../Styles/middlesection.css"
import hwimg from "./../images/hw.png"
import homeimg from "./../images/homeimg.jpg"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Wobble from 'react-reveal/Wobble';
import { Animator, ScrollContainer, ScrollPage, batch, Sticky, MoveOut } from "react-scroll-motion"
import Interest from './intrest'
import { motion } from "framer-motion"
import Education from './education'
import Skills from './skills'
import Aos from "aos"
import "aos/dist/aos.css"
import Footer from './footer'
import * as Faico from "react-icons/fa";
import Project from "./projects"


export default class MiddleSection extends Component {




  render() {
    const imgmotion = {
      moving: {
        x: [-20, 20],
        transition: {
          x: {
            yoyo: Infinity,
            duration: 0.5
          }
        }
      }
    }

    return (

      <>

        <div>
          <div className='intialsetting'>

            <motion.img variants={imgmotion}
              animate="moving"
              className='hwtag' alt='helloworld' src={hwimg}></motion.img>

          </div>


          <div id="home">

            <Home />

          </div>




          <Fade top={true}>
            <div data-aos="fade-up" id="aboutme" >

              <h1 className='aboutmeee'>About Me!!</h1>


              <Aboutme />
            </div>

          </Fade>


          <div id="interest" >
            <h1 className='interestcontent'>Interest</h1>
            <Interest />
          </div>


          <div id="education" >
            <h1 className='educa'>Education</h1>
            <Education />
          </div>



          <div id="skills">
            <h1 className='skillsection'>Skills</h1>
            <Skills />
          </div>
          <div id="projects">
          <div className='proj'>
            <Project />
          </div>
          </div>
          <div id="footer">
            <h1 className='footersection'><Faico.FaHandPeace/></h1>
            <Footer />
          </div>

        </div>

      </>
    )
  }
}