import { Typography, Box, Button, Divider  } from '@mui/material';
import React, { useState  } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';

function Conference() {

  const openMapsConferencia = () => {
    var direccion = "Cramer 2880 belgrano CABA";
    var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);
    window.open(mapsUrl, "_blank");
  };

  return (
    <Box sx={{marginTop:'6rem'}}>
      <Box sx={{margin:'2rem auto', textAlign:'center'}}>
        <Box sx={{backgroundColor:'white', width:'130px', height:'130px', borderRadius:'20rem', margin:'0 auto', border:'1px solid #AE739E'}}>
          <Image
            src='/images/conferencia.png'
            alt=''
            width={100}
            height={100}
            style={{
              color: '#206D7F',
              marginTop:'10px',
              
              }}/>
          </Box>
        <Box>
          <Typography fontFamily="WindSong" fontSize={40} textAlign='center' color="#002434" fontWeight={900}>Conferencia de Boda</Typography>
          </Box>
      </Box>
      <Box textAlign="center">
        <Box sx={{display:'flex', justifyContent:'space-evenly', margin:'2rem auto'}}> 
        <Typography variant='body2' fontWeight='bold' fontSize={34} color="#AE739E" fontFamily='Dancing Script'>15 Dic</Typography>
        <Divider orientation="vertical" flexItem color="#AE739E"/>
        <Typography variant='body2' fontWeight='bold' fontSize={34} color="#AE739E" fontFamily='Dancing Script'>20:00 Hs</Typography>
        </Box>
        <Typography variant='body2' fontSize={24} fontWeight='bold' fontFamily='Dancing Script'>Salon del Reino de los Testigos de Jehova</Typography>
        <Typography variant='body2' fontSize={24} fontWeight='bold' fontFamily='Dancing Script'>Cramer 2880, Belgrano.</Typography>
        <Button
      onClick={openMapsConferencia}
      sx={{
        background: '#AE739E',
        border: '#AE739E 1px solid',
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        textTransform: 'none',
        fontWeight: 'bold',
        margin: '.8rem auto 0',
        padding: '5px 2rem',
        borderRadius: '2rem',
        ':active': {
          background: 'white',
          color: '#AE739E',
        },
        ':hover': {
          background: 'white',
          color: '#AE739E',
        },
      }}
    >
          <LocationOnIcon/>Como llegar
        </Button>
      </Box>
    </Box>
  );
}

export default Conference;
