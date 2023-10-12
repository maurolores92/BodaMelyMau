import React from 'react';
import Conference from '@/views/Conference';
import Party from '@/views/Party';
import { Box } from '@mui/material';

function MapsParty() {
  return (
    <>
      <Box className="informacion-boda">
        <Conference />
        <Party />
      </Box>
    </>
  );
}

export default MapsParty;