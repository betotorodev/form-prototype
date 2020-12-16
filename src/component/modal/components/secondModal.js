import React from 'react'

export const SecondModal = () => {
  return (
    <>
      <label>Dirección*</label>
      <input type="text"/>
      <label>{'Barrio (opcional)'}*</label>
      <input type="text"/>
      <label>{'Complemento Dirección (opcional)'}*</label>
      <input type="text"/>
      <article className="checkbox-container">
        <div>
          <input className="checkbox" id="terminos" type="checkbox"/>
          <label className="checkbox-label" for="terminos">Acepto Términos, Condiciones</label>
        </div>
        <div>
          <input className="checkbox" id="politicas" type="checkbox"/>
          <label className="checkbox-label" for="politicas">Acepto <a>Política de Tratamiento de Datos.</a></label>
        </div>
      </article>
    </>
  )
}
