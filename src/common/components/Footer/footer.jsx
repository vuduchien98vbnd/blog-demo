import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className='footer'>
       <div className='info-contact' >
        <a className='social-contact' href='https://www.facebook.com/hien.vd27'><FacebookIcon style={{color:"#0d6efd"}}/></a>
        <a className='social-contact' href='https://www.instagram.com/vuduchien_2712/'><InstagramIcon style={{color:"#d6249f"}}/></a>
        <a className='social-contact' href='https://www.instagram.com/vuduchien_2712/' ><YouTubeIcon style={{color:"red"}}/></a>
        <a className='social-contact' href='https://www.instagram.com/vuduchien_2712/'><TwitterIcon style={{color: "wheat"}}/></a>
       </div>
       <div className='phone-number'>
        Liên hệ: 0912.686.236
       </div>
    <div className="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2023 Copyright:
        <a className="text-dark" href=""> HV Blog</a>
    </div>
    </div>
  )
}

export default Footer
