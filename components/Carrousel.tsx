import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { useMediaQuery } from '@mui/material';


const sliderContainerStyles = {
  margin: '0px auto',
  backgroundImage: `url('/images/fondo-invitacion.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    
};



const imageStyles = {
  border: '1px solid',
  borderRadius: '5px',
  margin: '10px',
};

const images = [
  { src: '/images/book/1.jpg', width: 280, height: 300 },
  { src: '/images/book/2.jpg', width: 280, height: 300 },
  { src: '/images/book/3.jpg', width: 280, height: 300 },
  { src: '/images/book/4.jpg', width: 280, height: 300 },
  { src: '/images/book/5.jpg', width: 280, height: 300 },
  { src: '/images/book/6.jpg', width: 280, height: 300 },
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
    settings.slidesToShow = 1.2;
    settings.slidesToScroll = 1;
  
  }
  return (
    <> 
      <Box sx={sliderContainerStyles} >
      
      <Box
        sx={{ background: 'linear-gradient(0deg, transparent, rgba(255, 255, 255, 1))',
        zIndex: 1,
        borderRadius: '5px 5px 0 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'20px',
        flexDirection: 'column',
        position: 'relative',}}
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
          <Typography fontFamily={'Inria_Sans'} sx={{margin:'1rem auto'}}  fontWeight='bold' fontSize={16} color={'#206D7F'} >VER GALERIA COMPLETA</Typography>
        </Box>
        <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '20px',
      background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 1))',
      zIndex: 1, // Ajusta el valor del z-index según tus necesidades
    }}
  />
      </Box>
    </>
  );
};

export default Carousel;