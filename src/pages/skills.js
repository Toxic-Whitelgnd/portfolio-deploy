import React from 'react'
import "../Styles/skills.css"
import * as Sico from "react-icons/si";
import * as Loico from "react-icons/io";
import * as Faico from "react-icons/fa";
import { motion } from "framer-motion"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Skills() {

  const skillvariant = {
    hover: {
      scale: 1.2,
      boxShadow: "3px 3px 2px 2px #6f96bd"
    },
    ontap: {
      scale: 1.2,
      boxShadow: "3px 3px 2px 2px #6f96bd"

    }
  }
  function ontapp(event,info){
      console.log(info.point.x,info.point.y,"clicked me",event)
      
  }

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className='skill'>
        <h3 className='h3skill'>Here Some of My Skills Are</h3>
        <span data-aos="fade-right" data-aos-duration="1600" data-aos-delay="40" data-aos-easing="ease-in-out" className='allcontent'>
          <motion.div className='htmlcontainer' variants={skillvariant}
            whileHover="hover" whileTap="ontap" onTap={ontapp}
          >
         
            <Faico.FaHtml5 />
          </motion.div>
          <motion.div className='csscontainer' variants={skillvariant}
            whileHover="hover" whileTap="ontap">
            <Loico.IoLogoCss3></Loico.IoLogoCss3>
          </motion.div>
          <motion.div className='javascript' variants={skillvariant}
            whileHover="hover" whileTap="ontap">
            <Sico.SiJavascript />
          </motion.div>
          <motion.div className='pythoncontainer' variants={skillvariant}
            whileHover="hover" whileTap="ontap">
            <Sico.SiPython ></Sico.SiPython>
          </motion.div>
          <motion.div className='flutter' variants={skillvariant}
            whileHover="hover" whileTap="ontap">
            <Sico.SiFlutter />
          </motion.div>
          <motion.div className='ccontainer' variants={skillvariant}
            whileHover="hover" whileTap="ontap">
            <Sico.SiCodio />
          </motion.div>
          <motion.div className='javacontainer' variants={skillvariant}
            whileHover="hover" whileTap="ontap">
            <Sico.SiJava></Sico.SiJava>
          </motion.div>
        </span>

        <div className='projects'>
          <h4 id="proj">With these Skills I have done some Projects</h4>
          <div className='iconbg'>
            <a href='#' className='projicon'>
              <Sico.SiCodeproject />
            
            </a>
          </div>
        </div>
      </div>

    </>
  )
}
