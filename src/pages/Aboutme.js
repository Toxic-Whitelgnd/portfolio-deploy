import React from 'react'
import "../Styles/Aboutme.css"
import meimg from "./../images/2.jpg"
import img1 from "./../images/1.jpg"
import img2 from "./../images/2.jpg"
import img3 from "./../images/5.jpg"
import img4 from "./../images/4.jpg"

import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Swiperforimg from '../components/swiperforimg';


function Aboutme() {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div data-aos="slide-left" data-aos-mirror="true" data-aos-duration="1000" className='aboutmee'>

      <Flash duration={2500} count={4} >
      <h4 className='aboutmee1'>Who am i? ;]</h4>
      </Flash>
      <Fade top={true}>

      <img className='me1' alt='me' src={meimg}></img>
      <div className='wrapper'>
        <div className='box-area'>
          <div className='box box-front'>
            <img className='aboutk' alt='aboutkomali' src={img2}></img>
          </div>
          <div className='box box-back'>
          <img className='aboutk' alt='aboutkomali' src={img1}></img>
          </div>
          <div className='box box-right'>
          <img className='aboutk' alt='aboutkomali' src={img3}></img>
          </div>
          <div className='box box-left'>
          <img className='aboutk' alt='aboutkomali' src={img4}></img>
          </div>
          <div className='box box-top'></div>
          <div className='box box-bottom'></div>

        </div>


      </div>


  
      </Fade>

      <Fade right={true}>
    
      <h6 className='mecontent'> My  Name is Tarun S.K .People call Me as Toxic-WhiteLgnd!! as My name in Github.I love 
      exploring new technologies and being a practitioner,I like to stay on top of trends.I am trying  to write my code easy and accessible but in reality i 
      can't make it properly.I will Work towards it.Nothing to say About me!!.Neeed to learn Something Different and View the World 
      in the Different Directions!!...
      </h6>
      </Fade>
    </div>
        
  )
}

export default Aboutme