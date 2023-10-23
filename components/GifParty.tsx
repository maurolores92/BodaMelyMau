import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

function GifParty() {
  // Reemplaza 'ENLACE_DE_PAGO_DE_MERCADOLIBRE' con el enlace real de MercadoLibre
  const mercadolibreLink = 'ENLACE_DE_PAGO_DE_MERCADOLIBRE';

  return (
    <>
      <Typography variant='h4'>Regalos</Typography>
      <Image src="/img/regalo.gif" alt="" width={100} height={100} style={{ margin: '25px' }} />
      <Typography variant='body1'>Nuestro mejor regalo es su presencia en este día tan especial, pero si desean colaborar con nuestra luna de miel...</Typography>
      <Button className="botones" onClick={() => window.location.href = mercadolibreLink}>
        Pulsa aquí
      </Button>
    </>
  );
}

export default GifParty;
