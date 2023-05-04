import { faCaretUp, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const GoToTopButton = () => {
    const [goToTopButton, setGoToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setGoToTopButton(true)
            }else{
                setGoToTopButton(false)
            }
        })
    },[])
    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
      {goToTopButton && 
        <div style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            
        }} onClick={scrollUp}><ArrowCircleUpIcon style={{width: "60px", height:"60px", color:"skyblue", cursor:"pointer"}}/></div>
      }
      
    </div>
  )
}

export default GoToTopButton
