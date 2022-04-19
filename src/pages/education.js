import React, { useState } from 'react'
import "../Styles/education.css";
import * as Faicon from "react-icons/fa";
import * as Icoicons from "react-icons/io";
import { Button } from 'react-bootstrap';
import IconButton from "@material-ui/core/IconButton";
import { motion } from "framer-motion"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"


function Education() {

    const boxesvariant = {
        hover: {
            scale: 1.1,
            boxShadow: "3px 3px 2px 2px #222625"
        },
        onetap: {
            scale: 1.1,
            boxShadow: "3px 3px 2px 2px #222625"
        }
    }

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='education'>
            <h3 className='mj'>My Journey</h3>

            <div className='threeboxes1'>
                <div className='container1'>

                    <motion.div data-aos="slide-left" data-aos-mirror="true" data-aos-duration="2500" className='box' variants={boxesvariant}
                        whileTap="onetap" whileHover="hover">
                        <div className='highericon'>
                            <div className='ji'>
                                <Faicon.FaSchool />
                            </div>

                        </div>
                        <div className='content'>
                            <h3 id='h3tag'>Higher Education</h3>
                            <p id='paratag'>I have completed my higher education from JCI with major subjects as Physics,Chemistry,Computer Science and
                                Maths with 84% merit in State board.
                            </p>
                        </div>

                    </motion.div>
                    <motion.div data-aos="zoom-out" data-aos-mirror="true" data-aos-duration="2500" className='box' variants={boxesvariant}
                        whileTap="onetap" whileHover="hover">
                        <div className='ugicon'>
                            <div className='ji'>
                                <Icoicons.IoIosSchool />
                            </div>

                        </div>
                        <div className='content'>
                            <h3 id='h3tag'> UnderGraduation</h3>
                            <p id='paratag'>I am Currently Pursuing B.Tech CSE With AI (Computer Science Engineering With Artificial Intelligence) from ^^^^^^^.
                            </p>
                        </div>

                    </motion.div>


                    <motion.div className='box' data-aos="fade-right" data-aos-duration="2500" data-aos-mirror="true" variants={boxesvariant}
                        whileTap="onetap" whileHover="hover"
                    >
                        <div className='jobicon'>
                            <div className='ji'>
                                <Faicon.FaSuitcase />
                            </div>

                        </div>
                        <div className='content'>
                            <h3 id='h3tag'> JOB</h3>
                            <p id='paratag'>Currently I am Studying!.Hope Atleast I will get a good job.

                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>

        </div>


    )
}

export default Education