import React, { useState, useEffect, useRef } from 'react'
import { InputGoogleMaps } from '../../../utils/InputGoogleMaps'

export const SecondModal = ({ handleClickSecondModal, option }) => {
  const termsAndConditions = useRef()
  const policies = useRef()
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)
  const [barrio, setBarrio] = useState('')
  const [address, setAddress] = useState('')
  const [optionalDirection, setOptionalDirection] = useState('')
  const [disabled, setDisabled] = useState(true)

  const handleBarrio = e => setBarrio(e.target.value)
  const handleOptionalDirection = e => setOptionalDirection(e.target.value)
  const handleAddressInput = e => {setAddress(e)}
  const handleChange1 = () => setCheckbox1(!checkbox1)
  const handleChange2 = () => setCheckbox2(!checkbox2)

  useEffect(() => {
    console.log(checkbox1, checkbox2)
    if(!!address && checkbox1 && checkbox2) {
      setDisabled(false)
    }
    else setDisabled(true)

    option === 2 &&
      !!address
        ? setDisabled(false)
        : setDisabled(true)
  }, [barrio, optionalDirection, checkbox1, checkbox2, address])

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
                  <input onChange={handleChange1} ref={termsAndConditions} className="checkbox" id="terminos" type="checkbox"/>
                  <label className="checkbox-label" for="terminos">Acepto Términos, Condiciones</label>
                </div>
                <div>
                  <input onChange={handleChange2} ref={policies} className="checkbox" id="politicas" type="checkbox"/>
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
