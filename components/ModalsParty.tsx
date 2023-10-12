import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-modal';

function ModalsParty() {
  const [cancionModalIsOpen, setCancionModalIsOpen] = useState(false);
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false);

  const openCancionModal = () => {
    setCancionModalIsOpen(true);
  };

  const closeCancionModal = () => {
    setCancionModalIsOpen(false);
  };

  const openInfoModal = () => {
    setInfoModalIsOpen(true);
  };

  const closeInfoModal = () => {
    setInfoModalIsOpen(false);
  };

  return (
    <>
      <Typography variant='h4'>Fiesta</Typography>
      <Typography variant='body1'>Hagamos juntos una fiesta épica. Aquí los detalles a tener en cuenta.</Typography>
      <Box className="contenedor-tarjeta-fiesta">
        <Box className="tarjeta-fiesta">
          <Typography variant='h3'>Música</Typography>
          <img src="img/musica.gif" alt="" style={{ width: '80px', margin: '10px' }} />
          <Typography variant='body1'>¿Cuál es la canción que no debe faltar en la playlist de la fiesta?</Typography>
          <button id="open-form-btn3" className="botones" onClick={openCancionModal}> Sugerir Canción </button>
        </Box>
        <Modal
          isOpen={cancionModalIsOpen}
          onRequestClose={closeCancionModal}
          contentLabel="Modal de Sugerir Canción">
          <span className="close-modal" onClick={closeCancionModal}> X </span>
          <Typography variant='h4'>Sugerir Canción</Typography>
          <form action="php/enviarmensajefiesta.php" method="post" className="form" id="form">
            <span className="close4" onClick={closeCancionModal}></span>
            <input type="text" id="nombre" className="form-input" name="nombre" placeholder="Escriba su nombre" required /> <br />
            <input type="text" id="cancion" className="form-input" name="cancion" placeholder="Nombre de la canción y autor" required /> <br />
            <input type="text" id="link" className="form-input" name="link" placeholder="Link de YouTube o Spotify" /> <br />
            <button type="submit" className="botones"> Enviar </button>
          </form>
        </Modal>
        <Box className="tarjeta-fiesta">
          <Typography variant='h3'>Tips y notas</Typography>
          <img src="img/cuaderno.gif" alt="" style={{ width: '80px', margin: '10px' }} />
          <Typography variant='body1'>Información adicional para tener en cuenta</Typography>
          <button id="open-info-btn" className="botones" onClick={openInfoModal}> Tips </button>
        </Box>
        <Modal
          isOpen={infoModalIsOpen}
          onRequestClose={closeInfoModal}
          contentLabel="Modal de Tips" >
          <span className="close-modal" onClick={closeInfoModal}> X </span>
          <Typography variant='h3'>Información de interés</Typography>
          <ul style={{maxWidth:'600px', margin:'0 auto', textAlign:'justify'}}>
            <li>
              <i className="bi bi-star-fill"></i> Adoramos a sus hijos, pero creemos que necesitan una noche libre. Niños: dulces sueños. Adultos: Busquen sus zapatos de baile.
            </li>
            <li>
              <i className="bi bi-star-fill"></i> Les dejamos una mejor ruta para llegar al salón de fiestas <a href="">Google Maps</a>.
            </li>
          </ul>
        </Modal>
      </Box>
    </>
  );
}

export default ModalsParty;
