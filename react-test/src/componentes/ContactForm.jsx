import React, { useState } from "react";
import Input from "./Input/Input";

const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

	
	const handleChange = (e, set) => {
		set(e.target.value)
	}

  /* const handleChangeNombre = (e) => {
    console.log(e.target.value);
    setNombre(e.target.value);
  };

  const handleChangeApellido = (e) => {
    console.log(e.target.value);
    setApellido(e.target.value);
  }; */

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <Input label="Nombre" value={nombre} handleChange={(e) => handleChange(e, setNombre)} />
      <Input label="Apellido" value={apellido} handleChange={(e) => handleChange(e, setApellido)} />
    </div>
  );
};

export default ContactForm;
