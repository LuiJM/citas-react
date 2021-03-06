import React from "react";
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Cliente <span>{cita.paciente}</span>
    </p>
    <p>
      Telefono <span>{cita.phone}</span>
    </p>
    <p>
      Fecha <span>{cita.fecha}</span>
    </p>
    <p>
      Hora <span>{cita.hour}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      Eliminar &times;
    </button>
  </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;
