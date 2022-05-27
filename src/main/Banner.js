import React from 'react';
import { Container } from '@mui/material';
import './Banner.css';
import banner from '../img/banner2.jpeg';

function Banner() {
  return (
    <Container positaion='static' maxWidth='full' className='banner'>
      {/* <img src={banner} className='banner_img'></img> */}
    </Container>
  );
}

export default Banner;