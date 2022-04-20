import React from 'react';
import Cards from './Cards'
import { useEffect } from 'react';

function Project() {

    useEffect(()=>{
        Aos.init()
      },[])
      return(
        <>
        <div className='projectcontainer'>
            <h4>Projects</h4>
            <div className='containerwrap'>
                
                {
                <Cards />
                }


            </div>




        </div>
        
        </>

      )
}