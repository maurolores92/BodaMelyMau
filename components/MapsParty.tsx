import React, { useState } from 'react';

function MapsParty() {

    const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

    const openMapsConferencia = () => {
      var direccion = "Cramer 2880 belgrano CABA";
      var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);
      window.open(mapsUrl, "_blank");
    };
  
    const openMapsFiesta = () => {
      var direccion = "Av. 101 Dr. Ricardo Balbín 5580, Billinghurst, Provincia de Buenos Aires, Argentina";
      var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);
      window.open(mapsUrl, "_blank");
    };

  return (
    <div>
      <section className="informacion-boda">
        <section>
          <img src="./img/boda.gif" alt="" className="fiesta-confeti" /><br />
          <h2>Conferencia de Boda</h2>
          <div>
            <h3>DIA</h3>
            <p>Viernes 15 de Diciembre - 20Hs</p>
            <button id="btn-agendar-conferencia" className="botones">
              <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NXByZzNwcmw0Mmg5MzF2ZmVpamcy4" className="enlaceAgendar">Agendar Evento</a>
            </button>
          </div>
          <div>
            <h3>LUGAR</h3>
            <p>Salon del Reino de los testigos de Jehová</p>
            <button onClick={openModal} className="botones">Confirmar Asistencia</button>
          </div>
          {modalVisible && (
        <div id="form-modal4" className="modal modal-cancion">
          <div className="modal-content">
            <h4>Confirmar asistencia</h4>
            <form action="php/asistenciaCeremonia.php" method="post" className="form" id="form">
              <span className="close4" onClick={closeModal}></span>
              <input type="text" id="nombreyapellido" className="form-input" name="nombreyapellido" placeholder="Ingrese su nombre completo" /><br />
              <button type="submit" className="botones">Enviar</button>
            </form>
          </div>
        </div>
      )}
          <div>
            <h3>DIRECCION</h3>
            <p>Cramer 2880, Belgrano - CABA</p>
            <button onClick={openMapsConferencia} className="botones">¿Cómo llegar?</button>
          </div>
        </section>
        <section className="conferenciaDeBoda">
          <img src="./img/fiesta.gif" alt="" className="fiesta-confeti" /><br />
          <h2>Fiesta</h2>
          <div>
            <h3>DIA</h3>
            <p>Viernes 15 de Diciembre - 21.30Hs</p>
            <button id="btn-agendar" className="botones">
              <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NzBpZDAyMmtjOTI0cXRocHRnamRrNzFjZjIgbWF1cm9sb3JlczE5OTJAbQ&amp;tmsrc=maurolores1992%40gmail.com" className="enlaceAgendar">Agendar evento</a>
            </button>
          </div>
          <div>
            <h3>LUGAR</h3>
            <p>Salon de fiesta NyA Celebraciones</p>
            <button onClick={openModal} className="botones">Confirmar Asistencia</button>
          </div>
          {modalVisible && (
        <div id="form-modal5" className="modal modal-cancion">
          <div className="modal-content">
            <h4>Confirmar asistencia</h4>
            <form action="php/asistenciaCeremonia.php" method="post" className="form" id="form">
              <span className="close5" onClick={closeModal}></span>
              <input type="text" id="NombreApellido" className="form-input" name="nombre" placeholder="Ingrese su nombre completo" /><br />
              <input type="text" id="codigo-input" className="form-input" name="codigo" placeholder="Ingrese su código de confirmación" />
              <span id="codigo-icon" className="icon"></span><br />
              <input type="text" id="datoImportante" className="form-input" name="datoImportante" placeholder="Ingrese algún dato importante. Ej: Soy vegetariano" /><br />
              <button type="submit" className="botones">Enviar</button>
            </form>
          </div>
        </div>
      )}
          <div>
            <h3>DIRECCION</h3>
            <p>Av. 101 Dr. Ricardo Balbín 5580, Billinghurst</p>
            <button onClick={openMapsFiesta} className="botones">Cómo llegar</button>
          </div>
        </section>
      </section>
    </div>
  );
}
export default MapsParty