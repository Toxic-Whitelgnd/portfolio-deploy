import React from 'react'
import "../Styles/interest.css"
import webimg from "./../images/web.png"
import appimg from "./../images/appimgs.png"
import otheimg from "./../images/other.png"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import { Animator, ScrollContainer, ScrollPage, batch, Sticky, MoveOut, ScrollContainerContext } from "react-scroll-motion"
import { motion } from "framer-motion"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function Interest() {

  const boxvariant = {
    hover:{
      scale:1.1,
      boxShadow:"3px 3px 3px 3px #222625"
    },
    onetap:{
      scale:1.2,
      boxShadow:"3px 3px 3px 3px #222625"
    }
  }


  useEffect(()=>{
    Aos.init()
  },[])

  return (


    <div  data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" className="interest">
      <h3 className='h3tag'>Here is my interest</h3>
      <div  className='threeboxes'>



        <Fade left={true} duration={2500}>
          {/* motion here */}
          <div data-aos="fade-right" data-aos-duration="1000">
          <motion.div  data-aos="slide-left" data-aos-duration="1000" data-aos-mirror="true"  className='webContainer' variants={boxvariant}
          whileHover="hover" whileTap="onetap"
          >
            <img className='webim' alt="webdeve" src={webimg}></img>

            <h3 className='wcheader'>Web Development</h3>

            <p className='wcpara'>
              I am a Frontend Developer sometimes maybe fullstackDeveloper and build websites using HTML, CSS, Javascript, ReactJs.
              I want to learn MERN Stack,So I Started Learning ReactJs and i will learn the remaining three at the end of my 4th
              sem.With the Learning I have done some Projects on it.
            </p>

          </motion.div>
          </div>
        </Fade>

        <Bounce top={true} duration={2500}>
        <motion.div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" className='AppContainer' variants={boxvariant}
          whileHover="hover" whileTap="onetap"
          >
            <img className='appim' alt="appdeve" src={appimg}></img>

            <h3 className='appheader'>App Development</h3>

            <p className='apppara'>
              I also have knowledge of flutter development and have experience in building android  applications.
              I have developed one flutter Apllication and I need to learn more thing from Flutter and Like
              to build a many applications as What I learnt from that!!

            </p>

          </motion.div>
        </Bounce>
        <Fade right={true} duration={2500}>
          
        <motion.div data-aos="slide-right" data-aos-duration="1000" data-aos-mirror="true" className='otherContainer' variants={boxvariant}
          whileHover="hover" whileTap="onetap"
          >
            <img className='othim' alt="othdeve" src={otheimg}></img>

            <h3 className='othheader'>Other Interest</h3>

            <p className='othpara'>
              I have a much more knowledge on python,so i like to be a Software Developer creating new content.
              And My other Interest are Playing Video Games,Cricket and some times watching
              Web Sereis.The Video Games I most often to play is Valorant,GTA 5 and Bgmi.

            </p>

          </motion.div>
        </Fade>
      </div>
    </div>

  )
}

export default Interest