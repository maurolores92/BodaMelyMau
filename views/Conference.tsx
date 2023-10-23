import { Card, CardContent, Typography, Box, Button  } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-modal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';


function Conference() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openMapsConferencia = () => {
    var direccion = "Cramer 2880 belgrano CABA";
    var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);
    window.open(mapsUrl, "_blank");
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => { 
    setModalIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
  };


  return (
      <Box sx={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)', borderRadius: '5px', margin: '20px 10px', paddingBottom:'1rem' }}>
        <Box
        height={'260px'}
        sx={{ backgroundColor:'#206D7F',
        borderRadius: '5px 5px 0 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'20px',
        flexDirection: 'column',
        position: 'relative',}}
      >
        <Image
          src='/images/anilloFondo.svg'
          alt=''
          width={100}
          height={100}
          style={{
            color: '#206D7F',
            position: 'absolute',
            marginTop:'5px',
          }}
        />
        <Image
          src='/images/anillo.svg'
          alt=''
          width={40}
          height={40}
          style={{
            color: '#206D7F',
            position: 'absolute',
          }}
        />
      </Box>
        <Typography variant='h6' textAlign={'center'} fontFamily={'Inknut_Antiqua'} fontWeight='bold' color='#206D7F' margin={2}>Conferencia de Boda</Typography>
        <Box>
        <Box sx={{height:'200px'}}>
      <Carousel
        showStatus={true}
        showThumbs={true}
        showArrows={true}
        showIndicators={true}
        emulateTouch={true}
        infiniteLoop={false} 
        useKeyboardArrows={true}
        interval={5000}
      >
        <Box className="carousel-card">
            <Card>
            <CardContent sx={{ textAlign:'justify'}}>
                <Typography variant='body1' fontWeight='bold' color='#206D7F'>Fecha</Typography>
                <Typography variant='body2' fontWeight='bold'>Viernes 15/12/2023</Typography>
                <Typography variant='body2' fontWeight='bold'>Hora 20:00 Hs</Typography>
                <Button sx={{ background: '#FFFFFF', border:'#206D7F 1px solid',  textDecoration:'none', margin:'1rem auto', display:'flex', textTransform: 'none', fontWeight:'bold'}}>
                  <CalendarMonthIcon sx={{marginRight:'1rem', color:'#206D7F'}}/>
                  <a
                    target="_blank"
                    href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NXByZzNwcmw0Mmg5MzF2ZmVpamcy4"
                    className="enlaceAgendar"
                    style={{ textDecoration:'none', color:'#206D7F', textTransform: 'none',}}> 
                    Agregar a mi Calendario
                  </a>
                </Button>
              </CardContent>
            </Card>
            </Box>
            <Box className="carousel-card">
            <Card >
            <CardContent sx={{ textAlign:'justify'}}>
                <Typography variant='body1' fontWeight='bold' color='#206D7F' fontSize={14}>Direccion</Typography>
                <Typography variant='body2' fontWeight='bold' fontSize={14}>Salon del Reino de los Testigos de Jehova</Typography>
                <Typography variant='body2' fontWeight='bold' fontSize={14}>Cramer 2880, Belgrano.</Typography>
                <Button onClick={openMapsConferencia} sx={{ background: '#FFFFFF', border:'#206D7F 1px solid', color:'#206D7F', textDecoration:'none', margin:'1rem auto', display:'flex', textTransform: 'none', fontWeight:'bold'}}>
                  <LocationOnIcon/>Como llegar
                </Button>
              </CardContent>
            </Card>
            </Box>
            </Carousel>
      </Box>
          <Button onClick={openModal} 
            sx={{
              fontFamily: 'Inknut_Antiqua',
              fontWeight: 'bold',
              backgroundColor: '#206D7F',
              margin: '1rem auto',
              display: 'flex',
              textTransform: 'none',
              padding: '.5rem 3rem',
              textDecoration: 'none',
              color: 'white'
              
            }}> 
                Confirmar Asistencia
          </Button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Confirmar Asistencia Modal"
            className="custom-modal">
            <Typography variant='h4'>Confirmar asistencia</Typography>
            <form onSubmit={handleSubmit} className="form" id="form">
              <span className="close4" onClick={closeModal}></span>
              <input
                type="text"
                id="nombreyapellido"
                className="form-input"
                name="nombreyapellido"
                placeholder="Ingrese su nombre completo" /> 
                <br />
                <Button type="submit" className="botones"> Enviar </Button>
            </form>
          </Modal>
        </Box>
      </Box>
  );
}

export default Conference;