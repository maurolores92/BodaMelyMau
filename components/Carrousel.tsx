import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const images = [
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/1.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
];

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(showSlides, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Typography variant='h4'>Retratos de Nuestro Amor</Typography>
      <Typography variant='body1'>Un minuto, un segundo, un instante que queda en la eternidad</Typography>
      <img src="/img/destello.gif" alt="" className="imagen-animacion" />
      <Box className="slider">
        <Box className="slideshow-container">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Imagen del slider gamer"
              className={`img-slides mySlides fade ${index === slideIndex ? 'active' : ''}`}
              style={{ display: index === slideIndex ? 'block' : 'none' }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Carousel;
