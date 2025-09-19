import React from "react";

function RegistrationForm() {
  return (
    <form>
      <h2>Formulario de Registro</h2>

      <label>Nombre</label>
      <input type="text" placeholder="Ingresa tu nombre" />

      <label>Email</label>
      <input type="email" placeholder="Ingresa tu correo" />

      <label>Nivel</label>
      <select>
        <option value="">Selecciona tu nivel</option>
        <option value="basico">Básico</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </select>

      <button type="submit">Enviar Registro</button>
    </form>
  );
}

export default RegistrationForm;
