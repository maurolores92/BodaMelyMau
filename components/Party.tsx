import invitados from '../data/invitados.json' ;
import {CardContent, Typography, Box, Button, Divider  } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-modal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

function Party() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mensajeModalIsOpen, setMensajeModalIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [codigoValido, setCodigoValido] = useState(false);

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

  const openMensajeModal = () => {
    setMensajeModalIsOpen(true);
  };

  const closeMensajeModal = () => {
    setMensajeModalIsOpen(false);
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const codigoIngresado = e.currentTarget.codigo.value;
  const invitado = invitados.find((invitado) => invitado.codigo === codigoIngresado);

  if (invitado) {
    setMensajeModalIsOpen(false);
  } else {
    alert('Código no válido');
  }

  closeModal();
};

const handleCodigoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const codigoIngresado = e.target.value;
  setCodigoValido(false);

  const invitado = invitados.find((invitado) => invitado.codigo === codigoIngresado);
  setCodigoValido(!!invitado);

  if (invitado) {
    setMensaje(invitado.mensaje);
    setMensajeModalIsOpen(true);
  }
};

  return (

    <Box >
<Box sx={{margin:'3rem auto 0 auto', textAlign:'center'}}>
<Box sx={{backgroundColor:'white', width:'130px', height:'130px', borderRadius:'20rem', margin:'0 auto', border:'1px solid #AE739E'}}>
          <Image
            src='/images/fiesta.png'
            alt=''
            width={100}
            height={100}
            style={{
              color: '#206D7F',
              marginTop:'10px',
              
              }}/>
          </Box>
        <Box>
          <Typography fontFamily="WindSong" fontSize={40} textAlign='center' color="#002434" fontWeight={900}>Fiesta</Typography>
          </Box>
      
        
      </Box>
      <Box textAlign="center" sx={{margin:'auto 1rem'}} >
        <Box sx={{display:'flex', justifyContent:'space-evenly', margin:'2rem auto'}}> 
        <Typography variant='body2' fontWeight='bold' fontSize={24} color="#AE739E" >15 Dic</Typography>
        <Divider orientation="vertical" flexItem color="#AE739E"/>
        <Typography variant='body2' fontWeight='bold' fontSize={24} color="#AE739E">21:00 Hs</Typography>
        </Box>
        <Typography variant='body2' fontSize={24} fontFamily='Dancing Script' fontWeight='bold'>Salon de fiesta NyA Celebraciones</Typography>
        <Typography variant='body2' fontSize={24} fontFamily='Dancing Script' fontWeight='bold'>Av. 101 Dr. Ricardo Balbín 5580, Billinghurst</Typography>
        <Button onClick={openMapsFiesta} sx={{ background: ' #AE739E', border:' #AE739E 1px solid', color:'white', textDecoration:'none', display:'flex', textTransform: 'none', fontWeight:'bold', margin:'.8rem auto 0', padding:'5px 2rem',  borderRadius: '2rem'}}>
          <LocationOnIcon/>Como llegar
        </Button>
      </Box>

      <Box sx={{margin:'3rem auto', textAlign:'center'}}>
        <Typography  fontFamily='Dancing Script' variant='body2' fontSize={24} sx={{margin:'auto 2rem'}}>Es muy importante para nosotros que confirmes tu asistencia</Typography>
        <Button onClick={openModal} 
        sx={{ background: ' white', border:' #AE739E 1px solid', color:'#AE739E', textDecoration:'none', display:'flex', textTransform: 'none', fontWeight:'bold', margin:'.8rem auto 0', padding:'5px 2rem'}}> 
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
            justifyContent: 'center'},
            content: {
              backgroundImage: `url('/images/fondo.jpeg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
              border: '1px solid #D38D8D', 
              borderRadius: '5px', 
              width: '80%', 
              maxWidth: '400px',
              maxHeight: '80%', 
              margin: '0 auto',
              padding: '20px'},}}>
        <Typography variant='h5' textAlign={'center'} fontFamily={'Inknut_Antiqua'} fontWeight='bold' color='#D38D8D' margin={2}>Confirmar asistencia</Typography>
        <form action="php/asistenciaFiesta.php" method="post" className="form" id="form">
          <span className="close5" onClick={closeModal}></span>
          <TextField id="nombre" className="form-input" name="nombre" label="Ingrese su nombre completo" variant="filled" fullWidth margin="normal"/>
          <TextField
        id="codigo"
        className="form-input"
        name="codigo"
        label="Ingrese su código de confirmación"
        variant="filled"
        fullWidth
        margin="normal"
        onChange={handleCodigoChange}
        InputProps={{
          endAdornment: codigoValido ? <CheckIcon color="success" /> : <ClearIcon color="error" />,
        }}
      />
          <TextField id="datoImportante" className="form-input" name="datoImportante" label="Dato importante. Ej: Soy vegetariano, celiaco" variant="filled" fullWidth margin="normal"/>
          {mensajeEnviado && (
            <Box sx={{fontWeight:'bold', fontSize:'1.4rem', color: '#18264D'}}>Tu confirmación ha sido enviada</Box>
          )}
          <Button onClick={openMensajeModal} type="submit"
            sx={{
              fontFamily:'Inknut_Antiqua',
              fontWeight:'bold',
              color:'white', 
              backgroundColor:'#D38D8D', 
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
  style={{
    overlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'},
      content: {
        backgroundImage: `url('/images/fondo.jpeg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
        border: '1px solid #D38D8D', 
        borderRadius: '5px', 
        width: '80%', 
        maxWidth: '400px',
        maxHeight: '80%', 
        margin: '0 auto',
        padding: '20px'},}}>
        <Typography variant='body1' margin={2} fontWeight='bold' sx={{color: '#18264D', textAlign:'justify', fontFamily:'Inknut_Antiqua',}}>{mensaje}</Typography>
      </Modal>
      </Box>
</Box>



  );
}

export default Party;