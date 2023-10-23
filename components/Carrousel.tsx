import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const sliderContainerStyles = {
  margin: '0px auto',
  backgroundColor:'#002434'
  
};

const imageStyles = {
  border: '1px solid',
  borderRadius: '5px',
  margin: '10px',
};

const images = [
  { src: '/img/2.jpg', width: 100, height: 140 },
  { src: '/img/3.jpg', width: 100, height: 140 },
  { src: '/img/4.jpg', width: 100, height: 140 },
  { src: '/img/1.jpg', width: 100, height: 140 },
  { src: '/img/5.jpg', width: 100, height: 140 },
  { src: '/img/6.jpg', width: 100, height: 140 },
];

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2, 
    arrows: false,
  };

  return (
    <>    
      <Box style={sliderContainerStyles} >
        <Box display={'flex'}  sx={{justifyContent:'space-between', color:'#FFFFFF'}}>
          <Typography margin={2} fontFamily={'Inria_Sans'}  fontWeight='bold' fontSize={16}>GALERIA DE FOTOS</Typography>
          <Typography margin={2} fontFamily={'Inria_Sans'}  fontWeight='bold'>Reproducir Musica</Typography>
        </Box>

        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index}>
              <Image
              src={image.src}
              alt={`Imagen ${index + 1}`}
              width={image.width}
              height={image.height}
              style={imageStyles}
            />
            </Box>
          ))}
        </Slider>

        <Box display={'flex'}  sx={{justifyContent:'space-between', color:'#FFFFFF'}}>
          <Typography fontFamily={'Inria_Sans'} sx={{margin:'1rem auto'}}  fontWeight='bold' fontSize={16}>VER GALERIA COMPLETA</Typography>
        </Box>
      </Box>
    </>

  );
};

export default Carousel;


