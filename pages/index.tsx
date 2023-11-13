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
    < >
    <CountdownTimer deadline={deadline}/>
    {/* <Carousel/> */}
    <Box sx={{display: {lg: 'flex', md:'flex', sm: 'column'}}}>
    <Conference/>
    </Box>
    
    
    <ModalsParty/>
    </>
  );
}

export default Home;
