
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

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
  { src: '/img/2.jpg', width: 240, height: 300 },
  { src: '/img/3.jpg', width: 240, height: 300 },
  { src: '/img/4.jpg', width: 240, height: 300 },
  { src: '/img/1.jpg', width: 240, height: 300 },
  { src: '/img/5.jpg', width: 240, height: 300 },
  { src: '/img/6.jpg', width: 240, height: 300 },
];

function Carousel(): React.ReactNode {
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const reproducirPausarMusica = () => {
    if (audioRef.current) {
      if (reproduciendo) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setReproduciendo(!reproduciendo);
    }
  };

  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1, 
    arrows: false,
  };

  return (
    <>    
      <Box style={sliderContainerStyles} >
        <Box display={'flex'}  sx={{justifyContent:'space-between', color:'#FFFFFF'}}>
          <Typography margin={2} fontFamily={'Inria_Sans'}  fontWeight='bold' fontSize={16}>GALERIA DE FOTOS</Typography>
          <div>
          <Typography
            margin={2}
            fontFamily="Inria_Sans"
            fontWeight="bold"
            onClick={reproducirPausarMusica}
            style={{ cursor: 'pointer' }}
          >
            {reproduciendo ? 'Pausar Música' : 'Reproducir Música'}
          </Typography>
        </div>
        </Box>
          <audio ref={audioRef} src="Cant-help-falling-in-love.mp3"></audio>
      

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
