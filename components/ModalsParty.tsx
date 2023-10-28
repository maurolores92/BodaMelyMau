import { Box, Button, Typography, Link, List, ListItem, ListItemText, TextField, Card, CardContent } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-modal';
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
    <>
    
      <Box sx={{
        backgroundImage: `url('/images/fondo-invitacion.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        flexDirection: 'column',
        position: 'relative',}}>
        <Box
          sx={{ 
          background: 'linear-gradient(0deg, transparent, rgba(255, 255, 255, 1))',
          height:'20px',
          }}
        />
        <Box sx={{width:'100%', textAlign:'center'}}>
          <Typography variant='body1' fontFamily='Inria_Sans' fontWeight='bold' color={'#206D7F'} >HAGAMOS JUNTOS UNA FIESTA EPICA. AQUI LOS DETALLES A TENER EN CUENTA</Typography>
        </Box>
      <Box sx={{display: {lg: 'flex', md:'flex', sm: '75%', xs: '95%'}}}>
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
          contentLabel="Modal de Sugerir Canción"
          style={{
            overlay: {
            display: 'flex',
            justifyContent: 'center',},
            content: {
              
                backgroundImage: `url('/images/fondo2.jpeg')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              border: '1px solid #18264D', 
              borderRadius: '5px', 
              width: '80%', 
              maxWidth: '400px',
              maxHeight: '60%', 
              margin: '0 auto',
              padding: '20px', 
            },}}>
          <span className="close-modal" onClick={closeCancionModal}> X </span>
          <Typography variant='h5' textAlign={'center'} fontFamily={'Inknut_Antiqua'} fontWeight='bold' color='#18264D' margin={2}>Sugerir Canción</Typography>
          <form action="php/enviarCancion.php" method="post"  className="form" id="form">
            <span className="close4" onClick={closeCancionModal}></span>
            <TextField
              id="nombre" className="form-input" name="nombre" label="Escriba su nombre" variant="filled" fullWidth margin="normal" required/>
            <TextField
              id="cancion" className="form-input" name="cancion"
              label="Nombre de la canción y autor" variant="filled" fullWidth margin="normal" required />
            <TextField id="link" className="form-input" name="link" label="Link de YouTube o Spotify" variant="filled" fullWidth margin="normal"/>
            <Button type="submit"
              sx={{
                fontFamily:'Inknut_Antiqua',
                fontWeight:'bold',
                color:'white', 
                backgroundColor:'#18264D', 
                margin:'1rem auto', 
                display:'flex', 
                textTransform: 'none', 
                textDecoration:'none',
                padding:'.5rem 3rem'}}> 
                Enviar
            </Button>
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
            <Icon icon="ph:star-fill" style={{fontSize:'1.8rem'}}/>Pulsa aqui
            </Button>
          </CardContent>
        </Box>
      </Card>
      </Box>
      <Modal
        isOpen={infoModalIsOpen}
        onRequestClose={closeInfoModal}
        contentLabel="Modal de Tips"
        style={{
          overlay: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',},
          content: {
            
              backgroundImage: `url('/images/fondo.jpeg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            border: '1px solid #18264D', 
            borderRadius: '5px', 
            width: '80%', 
            maxWidth: '400px',
            maxHeight: '60%', 
            margin: '0 auto',
            padding: '20px', 
          },}}>
        <span className="close-modal" onClick={closeInfoModal}> X </span>
        <Typography variant='h5' textAlign={'center'} fontFamily={'Inknut_Antiqua'} fontWeight='bold' color='#F48FB1' margin={2}>Información de interés</Typography>
        <List style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'justify' }}>
        <ListItem>
          <ListItemText primary="Adoramos a sus hijos, pero creemos que necesitan una noche libre. Niños: dulces sueños. Adultos: Busquen sus zapatos de baile." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Si eres celiaco, vegano o vegetariano haznoslo saber, asi te preparamos un menu especial" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <span>
                Les dejamos una mejor ruta para llegar al salón de fiestas{' '}
                <Link href="#" style={{ textDecoration: 'none', color: '#F48FB1' }}>
                  Google Maps
                </Link>
              </span>}/>
          </ListItem>
        </List>
      </Modal>
      </Box>
    </>
  );
}

export default ModalsParty;
