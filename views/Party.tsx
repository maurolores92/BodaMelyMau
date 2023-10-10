import React, { useState } from 'react';

function Party() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openMapsFiesta = () => {
    var direccion = "Av. 101 Dr. Ricardo Balbín 5580, Billinghurst, Provincia de Buenos Aires, Argentina";
    var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);
    window.open(mapsUrl, "_blank");
  };

  return (
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
  );
}

export default Party;
