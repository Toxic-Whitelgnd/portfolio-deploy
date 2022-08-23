import React from 'react';
import { useEffect,useState } from 'react';
import data from "./projectapi"
import Aos from "aos"
import "aos/dist/aos.css"
import { Card,Button } from 'react-bootstrap';
import { motion } from "framer-motion"
import {AiOutlineSearch} from "react-icons/ai"

import "../Styles/project.css"

function Project() {

  const [Searchterm,setSearchTerm] = useState('');
   
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
      return(
        <>
         

            

        <div className='projectcontainer'>
            <div id="header">Projects 
            </div>

            
           
            
            <div className='containerwrap'>   
            {
            data.map((value,index)=>{
                return (
                <motion.div className='insidewarp' >
                <Card className='cardcontainer'  data-aos={null?"flip-right":value.anima} data-aos-easing={null?"flip-right":value.ease} data-aos-duration="1000" data-aos-anchor-placement={null?"":value.anc} data-aos-mirror="true" key={index} style={{ width: '23rem' ,height: '640px',borderBlockColor:"blue" }
                } > 

                    <Card.Img  className='img' src={value.image}  />
                    <Card.Body className='totalcard'>
                        <Card.Title className='title'>{value.title}</Card.Title>
                        <Card.Subtitle className='language'>{value.language}</Card.Subtitle>
                        <Card.Text className='descreption'>{value.des}</Card.Text>
                        <a  className='linkbox' href={value.link}>Results</a>
                        
                    </Card.Body>


                </Card>
                </motion.div>
                )

            })
                
    

            }
            </div>
            



        </div>
        
        </>

      )
}
export default Project