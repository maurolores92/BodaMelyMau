import { Box, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-modal';
// Esto asegura que react-modal funcione correctamente

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
    e.preventDefault(); // Por ejemplo, puedes prevenir el envío del formulario aquí
    // Resto del código de tu función
  };

  return (
    <Box>
      <img src="./img/boda.gif" alt="" className="fiesta-confeti" /><br />
      <Typography variant='h2'>Conferencia de Boda</Typography>
      <Box>
        <Typography variant='h3'>DIA</Typography>
        <Typography variant='body1'>Viernes 15 de Diciembre - 20Hs</Typography>
        <Button id="btn-agendar-conferencia" className="botones">
          <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NXByZzNwcmw0Mmg5MzF2ZmVpamcy4" className="enlaceAgendar">Agendar Evento</a>
        </Button>
      </Box>
      <Box>
        <Typography variant='h3'>LUGAR</Typography>
        <Typography variant='body1'>Salón del Reino de los testigos de Jehová</Typography>
        <Button onClick={openModal} className="botones"> Confirmar Asistencia </Button>
      </Box>
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
      <Box>
        <Typography variant='h3'>DIRECCION</Typography>
        <Typography variant='body1'>Cramer 2880, Belgrano - CABA</Typography>
        <Button onClick={openMapsConferencia} className="botones"> ¿Cómo llegar? </Button>
      </Box>
    </Box>
  );
}

export default Conference;
