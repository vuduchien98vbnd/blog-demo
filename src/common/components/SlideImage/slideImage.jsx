import React from "react"
import 'react-slideshow-image/dist/styles.css'
import { Fade,Zoom, Slide } from "react-slideshow-image";
import slideShow1 from '../../../image/slideShow1.jpg'
import slideShow2 from '../../../image/slideShow2.jpeg'
import slideShow3 from '../../../image/slideShow3.png'
import slideShow4 from '../../../image/slideShow4.jpg'

const slideImages = [
    {
        url: slideShow1,
        caption: 'Welcome to My Blog!!!'
    },
    {
        url: slideShow2,
        caption: 'Welcome to My Blog!!!'
    },
    {
        url: slideShow3,
        caption: 'Welcome to My Blog!!!'
    },
    {
      url: slideShow4,
      caption: 'Welcome to My Blog!!!'
  },
];
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    height: '700px',
    backgroundSize: 'cover',
    borderRadius: '20px',
    margin: '30px',
    

}

const SliderImages = () =>{
    
    return(
        <div className="slider-container">
            
            <Slide>
                {slideImages.map((image,index)=>{
                    return(
                        <div key={index}>
                            <div style={{...divStyle, backgroundImage:`linear-gradient(
                                                rgba(0,0,0,0.5),
                                                rgba(0,0,0,0.5)
                                                  ),url(${image.url})`}}>
                                <span style={{fontSize: '80px', color:'white'}}><i>{image.caption}</i></span>
                            </div>
                        </div>
                    )
                })}
            </Slide>

        </div>
    )
}
export default SliderImages