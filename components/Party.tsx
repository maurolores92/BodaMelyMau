import invitados from '../data/invitados.json';
import { Card, CardContent, Typography, Box, Button  } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-modal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { TextField } from '@mui/material';

const cardStyles = {
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
  margin:'10px'
};

function Party() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensajeModalIsOpen, setMensajeModalIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const openMapsFiesta = () => {
    var direccion = "Av. 101 Dr. Ricardo Balbín 5580, Billinghurst, Provincia de Buenos Aires, Argentina";
    var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);
    window.open(mapsUrl, "_blank");
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeMensajeModal = () => {
    setMensajeModalIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const codigoIngresado = e.currentTarget.codigo.value;

    const invitado = invitados.find((invitado) => invitado.codigo === codigoIngresado);

    if (invitado) {
      setMensaje(invitado.mensaje);
      setMensajeModalIsOpen(true);
    } else {
      alert('Código no válido');
    }

    closeModal();
  };



  return (

<Box sx={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)', borderRadius: '5px', margin: '4rem 1rem', paddingBottom:'1rem' }}>

<Box
        sx={{ backgroundColor:'#AE739E',
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
          src='/images/fiesta.svg'
          alt=''
          width={40}
          height={40}
          style={{
            color: '#206D7F',
            position: 'absolute',
          }}
        />
      </Box>
      <Typography variant='h5' textAlign={'center'} fontFamily={'Inknut_Antiqua'} fontWeight='bold' color='#AE739E' margin={2}>Fiesta</Typography>

      <Box>
        <Box sx={{height:'200px'}}>
      <Carousel
        showIndicators={true}
        emulateTouch={true}
        useKeyboardArrows={true}
        centerMode={true} 
        centerSlidePercentage={80}
      >
        <Box className="carousel-card">
          <CardContent sx={{ textAlign:'justify'}}>
            <Typography variant='body1' fontWeight='bold' color='#AE739E' fontSize={18}>Fecha</Typography>
            <Typography variant='body2' fontWeight='bold'>Viernes 15/12/2023</Typography>
            <Typography variant='body2' fontWeight='bold'>Hora 21:00 Hs</Typography>
            <Button onClick={openMapsFiesta} sx={{ background: '#FFFFFF', border:'#AE739E 1px solid', textDecoration:'none',  margin:'2rem auto 0', display:'flex', textTransform: 'none', fontWeight:'bold'}}>
                <CalendarMonthIcon  sx={{marginRight:'1rem', color:'#AE739E'}}/><a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NzBpZDAyMmtjOTI0cXRocHRnamRrNzFjZjIgbWF1cm9sb3JlczE5OTJAbQ&amp;tmsrc=maurolores1992%40gmail.com" style={{ textDecoration:'none', color:'#AE739E'}}>Agendar evento</a>
              </Button>
          </CardContent>
        </Box>
        <Box className="carousel-card">
        <CardContent sx={{ textAlign:'justify'}}>
            <Typography variant='body1' fontWeight='bold' color='#AE739E' fontSize={18}>Direccion</Typography>
            <Typography variant='body2' fontWeight='bold'>Salon de fiesta NyA Celebraciones</Typography>
            <Typography variant='body2' fontWeight='bold'>Av. 101 Dr. Ricardo Balbín 5580, Billinghurst</Typography>
            <Button onClick={openMapsFiesta} sx={{ background: '#FFFFFF', border: '#AE739E 1px solid', color: '#AE739E', textDecoration: 'none', margin:'.8rem auto 0', display: 'flex', textTransform: 'none', fontWeight: 'bold' }}>
              <LocationOnIcon /> Como llegar
            </Button>
          </CardContent>
        </Box>
        {/* Add more cards as needed */}
      </Carousel>
      </Box>
      <Button onClick={openModal} 
        sx={{
            fontFamily:'Inknut_Antiqua',
            fontWeight:'bold',
            color:'white', 
            backgroundColor:'#AE739E', 
            margin:'1rem auto', 
            display:'flex', 
            textTransform: 'none', 
            textDecoration:'none',
            padding:'.5rem 3rem'}}> 
            Confirmar Asistencia
      </Button>
      <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Confirmar Asistencia Modal"
            className="custom-modal"
            style={{
              overlay: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              content: {
                backgroundColor:'white',
                border: '1px solid #AE739E', 
                borderRadius: '5px', 
                width: '80%', 
                maxWidth: '400px',
                maxHeight: '80%', 
                margin: '0 auto',
                padding: '20px', 
              },
            }}
          >
        <Typography variant='h5' textAlign={'center'} fontFamily={'Inknut_Antiqua'} fontWeight='bold' color='#AE739E' margin={2}>Confirmar asistencia</Typography>
        <form onSubmit={handleSubmit} className="form" id="form">
          <span className="close5" onClick={closeModal}></span>
          <TextField
  id="nombre"
  className="form-input"
  name="nombre"
  label="Ingrese su nombre completo"
  variant="filled"
  fullWidth
  margin="normal"
  // Otros atributos o props que desees agregar
/>

<TextField
  id="codigo-input"
  className="form-input"
  name="codigo"
  label="Ingrese su código de confirmación"
  variant="filled"
  fullWidth
  margin="normal"
  // Otros atributos o props que desees agregar
/>

<TextField
  id="datoImportante"
  className="form-input"
  name="datoImportante"
  label="Ingrese algún dato importante. Ej: Soy vegetariano"
  variant="filled"
  fullWidth
  margin="normal"
  // Otros atributos o props que desees agregar
/>
<Button
        sx={{
            fontFamily:'Inknut_Antiqua',
            fontWeight:'bold',
            color:'white', 
            backgroundColor:'#AE739E', 
            margin:'1rem auto', 
            display:'flex', 
            textTransform: 'none', 
            textDecoration:'none',
            padding:'.5rem 3rem'}}> 
            Confirmar Asistencia
      </Button>
        </form>
      </Modal>
      <Modal
        isOpen={mensajeModalIsOpen}
        onRequestClose={closeMensajeModal}
        contentLabel="Mensaje del invitado"
        className="custom-modal"
      >
        <Typography variant='h4'>Asistencia Confirmada</Typography>
        <Typography variant='body1'>{mensaje}</Typography>
      </Modal>
      </Box>

      
    </Box>
    




        
  );
}

export default Party;
