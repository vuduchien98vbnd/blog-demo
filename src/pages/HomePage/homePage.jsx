import * as React from 'react';
import Header from '../../common/components/Header/header';
import { Container, Zoom } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './homePage.css'
import useResize from '../../hooks/useResize';
import Footer from '../../common/components/Footer/footer';





export default function HomePage() {
 
  return (
    <>
    
      <Header/>
    
    <div  className='homePage'>
    
    
        <Outlet></Outlet>
    
    </div>
    <Footer/>
    </>
  );
}