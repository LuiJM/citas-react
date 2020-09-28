import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";

const Formulario = ({ crearCita }) => {
  //Crear State de Citas

  const [cita, actualizarCita] = useState({
    paciente: "",
    phone: "",
    fecha: "",
    hour: "",
  });

  const [error, actualizarError] = useState(false);

  //Funciion de actualizacion del state cada vez que se escribe en un input

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extrer los Valores

  const { paciente, phone, fecha, hour } = cita;

  //Cuando se envia el formulario

  const submitCita = (e) => {
    e.preventDefault();

    //Validar

    if (
      paciente.trim() === "" ||
      phone.trim() === "" ||
      fecha.trim() === "" ||
      hour.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //Eliminar el mensaje previo
    actualizarError(false);

    //Asignar un ID
    cita.id = uuid();

    //Crear Cita
    crearCita(cita);

    //Reiniciar Formulario
    actualizarCita({
      paciente: "",
      phone: "",
      fecha: "",
      hour: "",
    });
  };

  return (
    <Fragment>
      <h2> Crear Cita </h2>

      {error ? <p className="alerta-error">Rellene todos los campos</p> : null}

      <form onSubmit={submitCita}>
        <label>Nombre de Cliente</label>
        <input
          type="text"
          name="paciente"
          className="u-full-width"
          placeholder="Nombre del Paciente"
          onChange={actualizarState}
          value={paciente}
        />
        <label>Telefono de Cliente</label>
        <input
          type="text"
          name="phone"
          className="u-full-width"
          placeholder="Nombre del Paciente"
          onChange={actualizarState}
          value={phone}
        />
        <label>Fecha de Cita</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora de Cita</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={actualizarState}
          value={hour}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
