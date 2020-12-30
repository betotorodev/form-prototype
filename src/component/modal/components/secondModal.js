import React, { useState, useEffect } from 'react'
import { InputGoogleMaps } from '../../../utils/InputGoogleMaps'

export const SecondModal = ({ handleClickSecondModal, option }) => {
  const [barrio, setBarrio] = useState('')
  const [address, setAddress] = useState('')
  const [optionalDirection, setOptionalDirection] = useState('')
  const [disabled, setDisabled] = useState(true)

  const handleBarrio = e => setBarrio(e.target.value)
  const handleOptionalDirection = e => setOptionalDirection(e.target.value)
  const handleAddressInput = e => {setAddress(e)}

  useEffect(() => {
    if(!!barrio && !!optionalDirection && !!address) {
      setDisabled(false)
    }
    else setDisabled(true)
  }, [barrio, optionalDirection])

  useEffect(() => {
    if(!!address) {
      setDisabled(false)
    }
    else setDisabled(true)
  }, [address])

  return (
    <>
      {
        option === 1
          ? <>
              <InputGoogleMaps addressInput={handleAddressInput} option={option}/>
              <label htmlFor="barrio">{'Barrio (opcional)'}*</label>
              <input id="barrio" onChange={handleBarrio} type="text"/>
              <label htmlFor="optionalDirection">{'Complemento Dirección (opcional)'}*</label>
              <input id="optionalDirection" onChange={handleOptionalDirection} type="text"/>
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
          : <InputGoogleMaps addressInput={handleAddressInput} option={option} />
      }
      <button disabled={disabled} onClick={handleClickSecondModal}>ENVIAR</button>
    </>
  )
}
