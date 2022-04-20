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
import Typewriter from 'typewriter-effect';



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
    
      <h6 className='mecontent'> Tarun S.K. is my name. People refer to me
       as Toxic-WhiteLgnd!! on Github. I enjoy learning about new
        technology and, as a practitioner, I prefer to keep up with 
        current events. I'm attempting to make my code simple and accessible, but I'm failing miserably. I'll do my best to achieve it. 
        There is nothing to say about myself!! Need to learn something new and see the world from a different perspective!!
      </h6>
      </Fade>
    </div>
        
  )
}

export default Aboutme