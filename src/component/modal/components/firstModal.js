import React from 'react'

export const FirstModal = () => {
  return (
    <>
      <label className="label">Nombre*</label>
      <input className="input" type="text"/>
      <label className="label">Apellido*</label>
      <input className="input" type="text"/>
      <section>
        <div>
          <label className="label">Tipo de documento*</label>
          <select name="Cédula">
            <option>Cédula</option>
            <option>Tarjeta de identidad</option>
            <option>Pasaporte de extranjería</option>
          </select>
        </div>
        <div>
          <label className="label">Número de documento*</label>
          <input className="input" type="text"/>
        </div>
      </section>
      <label className="label">Correo electrónico*</label>
      <input className="input" type="email"/>
      <label className="label">Número telefónico*</label>
      <input className="input" type="number"/>
    </>
  )
}
