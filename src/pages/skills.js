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
  function ontapp(event, info) {
    console.log(info.point.x, info.point.y, "clicked me", event)

  }

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className='skill'>
        <div className='skillsection' >
          <div data-aos="slide-right" data-aos-duration="1000" data-aos-mirror="true"  className='programingskill'>
            <div className='boxwrapper'>
              Programming Language
            </div>

            <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-mirror="true" className='py'>

              <motion.div className='pythoncontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap">
                <Sico.SiPython ></Sico.SiPython>
              </motion.div>
              <div className='pyname'>Python3</div>

            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true"  className='java'>

              <motion.div className='javacontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap">
                <Sico.SiJava></Sico.SiJava>
              </motion.div>
              <div className='janame'>Java</div>

            </div>

            <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-mirror="true"  className='c'>

              <motion.div className='ccontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap">
                <Sico.SiCodio />
              </motion.div>
              <div className='cname'>C</div>
            </div>

          </div>

          {/* if u want to display means change this */}
          <div data-aos="slide-right" data-aos-duration="1000" data-aos-mirror="true" className='frontendskill'>
            <div className='boxwrapper'>
              FrontendSkill
            </div>
            <div data-aos-duration="1000" data-aos="fade-up-right" data-aos-mirror="true" className='html1'>
              <motion.div className='htmlcontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Faico.FaHtml5 />
              </motion.div>
              <div className='htmlname'>Html</div>


            </div>
            <div data-aos-duration="1000" data-aos="fade-up" data-aos-mirror="true" className='css'>
              <motion.div className='htmlcontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Loico.IoLogoCss3></Loico.IoLogoCss3>
              </motion.div>
              <div className='cssname'>css</div>


            </div>

            <div data-aos-duration="1000" data-aos="fade-up-left" data-aos-mirror="true" className='js'>
              <motion.div className='htmlcontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Sico.SiJavascript />
              </motion.div>
              <div className='jsname'>JavaScript</div>


            </div>

          </div>
          {/* Backend At Begineer Lvl */}
          <div data-aos-duration="1000" data-aos="slide-left" data-aos-mirror="true" className='backendskill'>
            <div className='boxwrapper'>
              Backend Skill
            </div>

            <div data-aos-duration="1000" data-aos="fade-up-left" data-aos-mirror="true" className='sql'>
              <motion.div className='htmlcontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Sico.SiMysql />
              </motion.div>


              <div className='sqlname'>SQL</div>
            </div>

            <div data-aos-duration="1000" data-aos="fade-up" data-aos-mirror="true" className='firebase'>
              <motion.div className='htmlcontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Sico.SiFirebase />
              </motion.div>

              <div className='fbname'>Firebase</div>
            </div>

            <div data-aos-duration="1000" data-aos="fade-up-right" data-aos-mirror="true" className='mongodb'>
              <motion.div className='htmlcontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Sico.SiMongodb />
              </motion.div>

              <div className='mgname'>MongoDB</div>
            </div>
          </div>

          <div data-aos-duration="1000" data-aos="fade-up-left" data-aos-mirror="true" className='appdevelopment'>
            <div className='boxwrapper'>
              APP Development
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-mirror="true" className='fluter1'>
              <motion.div className='flutter' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Sico.SiFlutter />
              </motion.div>
              <div className='flname'>Flutter</div>

            </div>


          </div>
          <div data-aos-duration="1000" data-aos="slide-left" data-aos-mirror="true" className='framework'>
            <div className='boxwrapper'>
              BootStrap
            </div>
            <div data-aos-duration="1000" data-aos="fade-up-left" data-aos-mirror="true" className='react'>
              <motion.div className='htmlcontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Sico.SiReact />
              </motion.div>
              <div className='rname'>ReactJs</div>

            </div>
            <div data-aos-duration="1000" data-aos="fade-up" data-aos-mirror="true" className='node'>
              <motion.div className='htmlcontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Sico.SiNodedotjs />
              </motion.div>
              <div className='nname'>NodeJs</div>

            </div>
            <div data-aos-duration="1000" data-aos="fade-up-right" data-aos-mirror="true" className='bootstrap'>
              <motion.div className='htmlcontainer' variants={skillvariant}
                whileHover="hover" whileTap="ontap" onTap={ontapp}
              >

                <Sico.SiBootstrap />
              </motion.div>
              <div className='bname'>Bootsrap</div>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

{/* <h3 className='h3skill'>Here Some of My Skills Are</h3>
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
</div> */}