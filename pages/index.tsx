import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Carousel from '@/components/Carrousel';
import ModalsParty from '@/components/ModalsParty';
import GifParty from '@/components/GifParty';
import Conference from '@/views/Conference';
import Party from '@/views/Party';

const deadline = new Date('2023-12-15T20:00:00');

function Home() {
  return (
    <>
    <CountdownTimer deadline={deadline} />
    <Carousel />
    <Conference />
    <Party />
    <ModalsParty/>
    </>
  );
}

export default Home;
