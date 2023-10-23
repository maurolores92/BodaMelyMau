import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import { Inria_Sans } from 'next/font/google';

function CountdownTimer({ deadline }: { deadline: Date }) {
  
  const getTimeRemaining = (endtime: Date) => {
    const total = Date.parse(endtime.toString()) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const t = getTimeRemaining(deadline);
      setTimeLeft(t);

      if (t.total <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [deadline]);

  return (
    <>
      <Grid
        container
        height={'260px'}
        sx={{ backgroundColor: '#002434',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',}}
      >
        <Image
          src='/images/imagenPrincipal.svg'
          alt=''
          width={250}
          height={250}
          style={{
            color: '#206D7F',
            position: 'absolute',
            marginLeft:'1rem',
            marginTop:'6rem'
          }}
        />
        <Image
          src='/images/floresPrincipal.svg'
          alt=''
          width={300}
          height={300}
          style={{
            color: '#206D7F',
            position: 'absolute',
            marginTop:'6rem'
          }}
        />
      </Grid>
      <Grid item xs={12}  className='textBible' textAlign={'center'}  display={'flex'} justifyContent={'center'} marginTop={5}>
        <Image src='/images/titulo.svg' alt='' width={300} height={100} style={{color:'#206D7F'}}></Image> 
      </Grid>
      <Grid item xs={12}  className='textBible' textAlign={'center'} color={'#206D7F'}  margin={2}>
        <Typography variant='body1' fontFamily={'Inria_Sans'}>El amor es paciente y bondadoso [...] todo lo soporta, todo lo cree, todo lo espera, todo lo aguanta</Typography>
        <Typography variant='body1' fontFamily={'Inria_Sans'}>(1 Corintios 13:4-7)</Typography>
      </Grid>
      <Grid  className='countdown' margin={2}>
        <Grid item  >
            <Typography variant="body1" padding={'10px 3px'} fontFamily={'Inria_Sans'}>
              {timeLeft.days} DIAS /
            </Typography>
          </Grid>
          <Grid item>
          <Typography variant="body1" padding={'10px 3px'} fontFamily={'Inria_Sans'}>
              {('0' + timeLeft.hours).slice(-2)} HS /
            </Typography>
          </Grid>
          <Grid item>
          <Typography variant="body1" padding={'10px 3px'} fontFamily={'Inria_Sans'}>
              {('0' + timeLeft.minutes).slice(-2)} MIN /
            </Typography>
          </Grid>
          <Grid item>
          <Typography variant="body1" padding={'10px 3px'} fontFamily={'Inria_Sans'}>
              {('0' + timeLeft.seconds).slice(-2)} SEG 
            </Typography>
          </Grid>
        </Grid>
    </>
  );
}

export default CountdownTimer;
