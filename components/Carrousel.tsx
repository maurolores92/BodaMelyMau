
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

const sliderContainerStyles = {
  margin: '0px auto',
  backgroundImage: `url('/images/fondo-invitacion.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const imageStyles = {
  border: '1px solid',
  borderRadius: '5px',
  margin: '10px',
};

const images = [
  { src: '/images/book/1.jpg', width: 320, height: 300 },
  { src: '/images/book/2.jpg', width: 320, height: 300 },
  { src: '/images/book/3.jpg', width: 320, height: 300 },
  { src: '/images/book/4.jpg', width: 320, height: 300 },
  { src: '/images/book/5.jpg', width: 320, height: 300 },
  { src: '/images/book/6.jpg', width: 320, height: 300 },
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
    slidesToShow: 1.3,
    slidesToScroll: 1, 
    arrows: false,
  };

  return (
    <>    
      <Box style={sliderContainerStyles} >
        <Box display={'flex'}  sx={{
          justifyContent:'space-between', 
          color:'#FFFFFF', 
          backgroundImage: `url('/images/fondo-invitacion.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',}}>
          <Typography margin={2} fontFamily={'Inria_Sans'}  fontWeight='bold' fontSize={16} color={'#206D7F'} >GALERIA DE FOTOS</Typography>
          <Box>
            <Typography
            color={'#206D7F'} 
              margin={2}
              fontFamily="Inria_Sans"
              fontWeight="bold"
              onClick={reproducirPausarMusica}
              style={{ cursor: 'pointer' }}>
              {reproduciendo ? 'Pausar Música' : 'Reproducir Música'}
            </Typography>
          </Box>
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
              priority={true}
              style={imageStyles}/>
            </Box>
          ))}
        </Slider>
        <Box display={'flex'}  sx={{justifyContent:'space-between', color:'#FFFFFF'}}>
          <Typography fontFamily={'Inria_Sans'} sx={{margin:'1rem auto'}}  fontWeight='bold' fontSize={16} color={'#206D7F'} >VER GALERIA COMPLETA</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
