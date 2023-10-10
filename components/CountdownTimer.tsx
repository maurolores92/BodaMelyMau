import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

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
    <Container  className='countdown'>
      <Grid item className='timer'>
          <Typography variant="h4" id="days" sx={{padding:'10px', fontSize:'1.5rem,', fontWeight:'bold'}}>
            {timeLeft.days}
          </Typography>
          <div style={{padding:'10px'}}>DÍAS</div>
        </Grid>
        <Grid item className='timer'>
        <Typography variant="h4" id="days" sx={{padding:'10px', fontSize:'1.5rem,', fontWeight:'bold'}}>
            {('0' + timeLeft.hours).slice(-2)}
          </Typography>
          <div style={{padding:'10px'}}>HS</div>
        </Grid>
        <Grid item className='timer'>
        <Typography variant="h4" id="days" sx={{padding:'10px', fontSize:'1.5rem,', fontWeight:'bold'}}>
            {('0' + timeLeft.minutes).slice(-2)}
          </Typography>
          <div style={{padding:'10px'}}>MIN</div>
        </Grid>
        <Grid item className='timer-ultimo'>
        <Typography variant="h4" id="days" sx={{padding:'10px', fontSize:'1.5rem,', fontWeight:'bold'}}>
            {('0' + timeLeft.seconds).slice(-2)}
          </Typography>
          <div style={{padding:'10px'}}>SEG</div>
        </Grid>
    </Container>
  );
}

export default CountdownTimer;
