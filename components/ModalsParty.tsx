import { Box, Button, Typography, Container } from '@mui/material';
import { Inria_Sans } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Card, CardContent  } from '@mui/material';
import { Icon } from '@iconify/react';

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

  const mercadolibreLink = 'ENLACE_DE_PAGO_DE_MERCADOLIBRE';

  return (
    <Container sx={{backgroundColor:'#002434', paddingTop:'5rem', paddingBottom:'2rem'}}>
      <Box sx={{width:'100%', textAlign:'center'}}>
      <Typography variant='body1' color='#FFFFFF' fontFamily='Inria_Sans' fontWeight='bold'>HAGAMOS JUNTOS UNA FIESTA EPICA. AQUI LOS DETALLES A TENER EN CUENTA</Typography>
      </Box>

      <Card sx={{width:'320px', margin:'2rem auto', borderRadius:'10px', display:'flex'}}>
        <Box>
        <Icon icon="foundation:music" style={{fontSize:'3rem', margin:'1rem 10px', color:'#34ABA6'}}/>
        </Box>
        <Box>
        <CardContent>
          <Typography variant='body1' fontWeight='bold' color='#34ABA6' fontSize={14}>MUSICA</Typography>
          <Typography variant='body2' fontWeight='bold' marginBottom={1.5} fontSize={13}>¿Cuál es la canción que no debe faltar en la playlist de la fiesta?</Typography>
          <Button onClick={openCancionModal} sx={{ background: '#FFFFFF', border:'#34ABA6 1px solid', color:'#34ABA6',  textDecoration:'none', margin:' 0 auto', display:'flex', textTransform: 'none', fontWeight:'bold'}}>
          <Icon icon="foundation:music" style={{fontSize:'1.8rem'}}/>  Sugerir Cancion
          </Button>
        </CardContent>
        </Box>
      </Card>
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
            <Button type="submit" className="botones"> Enviar </Button>
          </form>
        </Modal>


        <Card sx={{width:'320px', margin:'2rem auto', borderRadius:'10px', display:'flex'}}>
        <Box>
        <Icon icon="ion:gift" style={{fontSize:'3rem',margin:'1rem 10px', color:'#AF0F1B'}}/>
        </Box>
        <Box>
        <CardContent>
          <Typography variant='body1' fontWeight='bold' color='#AF0F1B' fontSize={14}>REGALOS</Typography>
          <Typography variant='body2' fontWeight='bold' marginBottom={1.5} fontSize={13}>Nuestro mejor regalo es su presencia en este dia tan especial, pero si deseas colaborar con nuestra luna de miel...</Typography>
          <Button  onClick={() => window.location.href = mercadolibreLink} sx={{ background: '#FFFFFF', border:'#AF0F1B 1px solid', color:'#AF0F1B', textDecoration:'none', margin:' 0 auto', display:'flex', textTransform: 'none', fontWeight:'bold'}}>
          <Icon icon="ion:gift" style={{fontSize:'1.8rem'}}/>  Pulsa aqui
          </Button>
        </CardContent>
        </Box>
      </Card>

      
      <Card sx={{width:'320px', margin:'2rem auto', borderRadius:'10px', display:'flex'}}>
        <Box>
        <Icon icon="ph:star-fill"  style={{fontSize:'3rem', margin:'1rem 10px', color:'#F48FB1'}}/>
        </Box>
        <Box>
        <CardContent>
          <Typography variant='body1' fontWeight='bold' color='#F48FB1' fontSize={14}>CONSEJOS PARA LA FIESTA</Typography>
          <Typography variant='body2' fontWeight='bold' marginBottom={1.5} fontSize={13}>Nos encantaria que tuvieses en cuenta estos detalles</Typography>
          <Button onClick={openInfoModal} sx={{ background: '#FFFFFF', border:'#F48FB1 1px solid', color:'#F48FB1', textDecoration:'none', margin:' 0 auto', display:'flex', textTransform: 'none', fontWeight:'bold'}}>
          <Icon icon="ph:star-fill" style={{fontSize:'1.8rem'}}/>Sugerir Cancion
          </Button>
        </CardContent>
        </Box>
      </Card>
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

    </Container>
  );
}

export default ModalsParty;
