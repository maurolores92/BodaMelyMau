import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Carousel from '@/components/Carrousel';
import ModalsParty from '@/components/ModalsParty';
import Conference from '@/components/Conference';
import Party from '@/components/Party';
import { Box } from '@mui/material';

const deadline = new Date('2023-12-15T20:00:00');

function Home() {
  return (
    <Box  
    sx={{
    background:'url(/images/fondo-invitacion.png)',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '100%',
    overflowX: 'hidden',
    backgroundRepeat:'repeat'}}>
    <CountdownTimer deadline={deadline}/>
    <Box sx={{display: {lg: 'flex', md:'flex', sm: 'column'}, justifyContent:'space-evenly'}}>
    <Conference/>
    <Party/>
    </Box>
    <Carousel/>
    <ModalsParty/>
    </Box>
  );
}

export default Home;
