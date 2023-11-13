import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { useMediaQuery } from '@mui/material';


const sliderContainerStyles = {
  margin: '0px auto',
    
};



const imageStyles = {
  border: '1px solid',
  borderRadius: '5px',
  margin: '10px',
};

const images = [
  { src: '/images/book/1.svg', width: 250, height: 270 },
  { src: '/images/book/2.svg', width: 250, height: 270 },
  { src: '/images/book/3.svg', width: 250, height: 270 },
  { src: '/images/book/4.svg', width: 250, height: 270 },
  { src: '/images/book/5.svg', width: 250, height: 270 },
  { src: '/images/book/6.svg', width: 250, height: 270 },
  { src: '/images/book/8.svg', width: 250, height: 270 },
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

  const isDesktopOrLaptop = useMediaQuery('(min-width: 950px)');
  const isTablet = useMediaQuery('(min-width: 500px)');
  const isMobile = useMediaQuery('(max-width: 500px)');
  
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,  // Valor predeterminado para escritorio
    slidesToScroll: 1, // Valor predeterminado para escritorio
  };
  
  if (isDesktopOrLaptop) {
    // Configuración para escritorio
  } else if (isTablet) {
    // Configuración para tabletas
    settings.slidesToShow = 3;
    settings.slidesToScroll = 1;
  } else if (isMobile) {
    // Configuración para dispositivos móviles
    settings.slidesToShow = 2;
    settings.slidesToScroll = 1;
  
  }
  return (
    <> 
      <Box sx={sliderContainerStyles} >
      
      <Box
        sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',}}
        />
        <Box display={'flex'}  sx={{
          justifyContent:'space-between'}}>
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
          
        </Box>
      </Box>
    </>
  );
};

export default Carousel;