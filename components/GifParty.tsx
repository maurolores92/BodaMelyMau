import React from 'react';

function GifParty() {
  // Reemplaza 'ENLACE_DE_PAGO_DE_MERCADOLIBRE' con el enlace real de MercadoLibre
  const mercadolibreLink = 'ENLACE_DE_PAGO_DE_MERCADOLIBRE';

  return (
    <div>
      <h4>Regalos</h4>
      <img src="img/regalo.gif" alt="" style={{ width: '80px', margin: '25px' }} />
      <p>Nuestro mejor regalo es su presencia en este día tan especial, pero si desean colaborar con nuestra luna de miel...</p>
      <button className="botones" onClick={() => window.location.href = mercadolibreLink}>
        Pulsa aquí
      </button>
    </div>
  );
}

export default GifParty;
