import React from 'react';
import { useEffect } from 'react';
import data from "./projectapi"
import Aos from "aos"
import "aos/dist/aos.css"
import { Card,Button } from 'react-bootstrap';

import "../Styles/project.css"

function Project() {

    function links(pros){
        console.log("put the link",{pros})
    }

    useEffect(()=>{
        Aos.init()
      },[])
      return(
        <>
        <div className='projectcontainer'>
            <h4>Projects</h4>
            <div className='containerwrap'>
            
            {
            data.map((value,index)=>{
                return (
                <div className='insidewarp'>
                <Card  key={index} style={{ width: '23rem' ,height: 'auto',borderBlockColor:"blue",borderWidth:'2px',borderSpacing:'2px',borderStyle:"solid" }}> 

                    <Card.Img  className='img' src={value.image} />
                    <Card.Body className='totalcard'>
                        <Card.Title className='title'>{value.title}</Card.Title>
                        <Card.Subtitle className='language'>{value.language}</Card.Subtitle>
                        <Card.Text className='descreption'>{value.des}</Card.Text>
                        <a  className='linkbox' href={value.link}>click me</a>
                        
                    </Card.Body>


                </Card>
                </div>
                )

            })
                
    

            }
            </div>
            



        </div>
        
        </>

      )
}
export default Project