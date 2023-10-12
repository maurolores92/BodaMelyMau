import React, { useState } from 'react';
import Modal from 'react-modal';
import invitados from '../data/invitados.json';
import { Box, Button, Typography } from '@mui/material';

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
    <Box className="conferenciaDeBoda">
      <img src="./img/fiesta.gif" alt="" className="fiesta-confeti" /><br />
      <Typography variant='h2'>Fiesta</Typography>
      <Box>
        <Typography variant='h3'>DIA</Typography>
        <Typography variant='body1'>Viernes 15 de Diciembre - 21.30Hs</Typography>
        <Button id="btn-agendar" className="botones">
          <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NzBpZDAyMmtjOTI0cXRocHRnamRrNzFjZjIgbWF1cm9sb3JlczE5OTJAbQ&amp;tmsrc=maurolores1992%40gmail.com" className="enlaceAgendar">Agendar evento</a>
        </Button>
      </Box>
      <Box>
      <Typography variant='h3'>LUGAR</Typography>
      <Typography variant='body1'>Salon de fiesta NyA Celebraciones</Typography>
        <Button onClick={openModal} className="botones">
          Confirmar Asistencia
        </Button>
      </Box>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmar Asistencia Modal"
        className="custom-modal"
      >
        <Typography variant='h4'>Confirmar asistencia</Typography>
        <form onSubmit={handleSubmit} className="form" id="form">
          <span className="close5" onClick={closeModal}></span>
          <input type="text" id="nombre" className="form-input" name="nombre" placeholder="Ingrese su nombre completo" /><br />
          <input
            type="text"
            id="codigo-input"
            className="form-input"
            name="codigo"
            placeholder="Ingrese su código de confirmación"
          />
          <span id="codigo-icon" className="icon"></span><br />
          <input type="text" id="datoImportante" className="form-input" name="datoImportante" placeholder="Ingrese algún dato importante. Ej: Soy vegetariano" /><br />
          <Button type="submit" className="botones">Enviar</Button>
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
      <Box>
        <Typography variant='h3'>DIRECCION</Typography>
        <Typography variant='body1'>Av. 101 Dr. Ricardo Balbín 5580, Billinghurst</Typography>
        <Button onClick={openMapsFiesta} className="botones">
          ¿Cómo llegar?
        </Button>
      </Box>
    </Box>
  );
}

export default Party;
