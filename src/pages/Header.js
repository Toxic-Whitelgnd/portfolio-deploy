import React, { Component } from 'react'
import {Link} from 'react-scroll'
import "../Styles/Header.css"
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
import { motion } from "framer-motion"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"


export default function Header1 () {
        const aboutmevariants={
            hover:{
                scale: 1.2,
                textshadow:"2px 3px 4px 5px red",
                transition: { 
                    duration: 1 
                }
            },
            hovertap:{
                scale:0.9
            }
        }

        return (
        <div className='headercontent'>
                 <RubberBand duration={2500} count={3}>
                <h1 className='portfolioheader'>🧡PortFolio💜</h1>
                </RubberBand>
            
        <Bounce right cascade duration={2000}  >
        <ul className="ulcontent">
          <li className='nav-text'><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li className='nav-text'><Link  to="aboutme" spy={true} smooth={true}>AboutMe</Link></li>
          <li className='nav-text'><Link  to="interest" spy={true} smooth={true}>Interest</Link></li>
          <li className='nav-text'><Link  to="education" spy={true} smooth={true}>Education</Link></li>
          <li className='nav-text'><Link  to="skills" spy={true} smooth={true}>Skills</Link></li>
          {/* <li className='nav-text'><Link  to="proj" spy={true} smooth={true}>Projects</Link></li> */}
            </ul>
            </Bounce>
            </div>
        )
    }
