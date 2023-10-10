import React, { useState } from 'react';

function ModalsParty() {
  const [showCancionModal, setShowCancionModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const openCancionModal = () => {
    setShowCancionModal(true);
  };

  const closeCancionModal = () => {
    setShowCancionModal(false);
  };

  const openInfoModal = () => {
    setShowInfoModal(true);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  return (
    <section>
      <h4>Fiesta</h4>
      <p>Hagamos juntos una fiesta épica. Aquí los detalles a tener en cuenta.</p>
      <div className="contenedor-tarjeta-fiesta">
        <div className="tarjeta-fiesta">
          <h3>Música</h3>
          <img src="img/musica.gif" alt="" style={{ width: '80px', margin: '10px' }} />
          <p>¿Cuál es la canción que no debe faltar en la playlist de la fiesta?</p>
          <button id="open-form-btn3" className="botones" onClick={openCancionModal}>
            Sugerir Canción
          </button>
        </div>
        {showCancionModal && (
          <div id="form-modal3" className="modal modal-cancion">
            <div className="modal-content">
              <h4>Sugerir Canción</h4>
              <form action="php/enviarmensajefiesta.php" method="post" className="form" id="form">
                <span className="close3" onClick={closeCancionModal}></span>
                <input type="text" id="nombre" className="form-input" name="nombre" placeholder="Escriba su nombre" required /> <br />
                <input type="text" id="cancion" className="form-input" name="cancion" placeholder="Nombre de la canción y autor" required /> <br />
                <input type="text" id="link" className="form-input" name="link" placeholder="Link de YouTube o Spotify" /> <br />
                <button type="submit" className="botones">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        )}
        <div className="tarjeta-fiesta">
          <h3>Tips y notas</h3>
          <img src="img/cuaderno.gif" alt="" style={{ width: '80px', margin: '10px' }} />
          <p>Información adicional para tener en cuenta</p>
          <button id="open-info-btn" className="botones" onClick={openInfoModal}>
            Tips
          </button>
        </div>
        {showInfoModal && (
          <div id="info-modal" className="modal">
            <div className="modal-content">
              <span className="close1" onClick={closeInfoModal}></span>
              <h4>Información de interés</h4>
              <p>
                <i className="bi bi-star-fill"></i> Adoramos a sus hijos, pero creemos que necesitan una noche libre. Niños: dulces sueños. Adultos: Busquen sus zapatos de baile.
              </p>
              <p>
                <i className="bi bi-star-fill"></i> Les dejamos una mejor ruta para llegar al salón de fiestas <a href="">Google Maps</a>.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ModalsParty;
