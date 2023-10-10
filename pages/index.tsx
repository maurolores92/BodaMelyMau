import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import MapsParty from '@/components/MapsParty';
import Carousel from '@/components/Carrousel';
import ModalsParty from '@/components/ModalsParty';
import GifParty from '@/components/GifParty';

const deadline = new Date('2023-12-15T20:00:00');

function Home() {
  return (
    <>
    <CountdownTimer deadline={deadline} />
    <MapsParty/>
    <Carousel />
    <ModalsParty/>
    <GifParty/>
    </>
  );
}

export default Home;
