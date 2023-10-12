import React, { useState } from 'react';
import Modal from 'react-modal';
// Esto asegura que react-modal funcione correctamente

function Conference() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openMapsConferencia = () => {
    var direccion = "Cramer 2880 belgrano CABA";
    var mapsUrl = "https://www.google.com/maps/place/" + encodeURIComponent(direccion);
    window.open(mapsUrl, "_blank");
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => { 
    setModalIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Por ejemplo, puedes prevenir el envío del formulario aquí
    // Resto del código de tu función
  };

  return (
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
        <p>Salón del Reino de los testigos de Jehová</p>
        <button onClick={openModal} className="botones">
          Confirmar Asistencia
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmar Asistencia Modal"
        className="custom-modal" 
      >
        <h4>Confirmar asistencia</h4>
        <form onSubmit={handleSubmit} className="form" id="form">
          <span className="close4" onClick={closeModal}></span>
          <input
            type="text"
            id="nombreyapellido"
            className="form-input"
            name="nombreyapellido"
            placeholder="Ingrese su nombre completo"
          />
          <br />
          <button type="submit" className="botones">
            Enviar
          </button>
        </form>
      </Modal>
      <div>
        <h3>DIRECCION</h3>
        <p>Cramer 2880, Belgrano - CABA</p>
        <button onClick={openMapsConferencia} className="botones">
  ¿Cómo llegar?
</button>
      </div>
    </section>
  );
}

export default Conference;
