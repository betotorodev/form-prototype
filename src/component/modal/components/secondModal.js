/*global google*/
import React, { useState, useEffect } from 'react'
import PlaceAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export const SecondModal = ({ handleClickModal, onClick }) => {
  const [address, setAddres] = useState('')
  const [choice, setChoice] = useState('')
  const [barrio, setBarrio] = useState('')
  const [optionalDirection, setOptionalDirection] = useState('')
  const [disabled, setDisabled] = useState(true)

  const handleBarrio = e => setBarrio(e.target.value)
  const handleOptionalDirection = e => setOptionalDirection(e.target.value)

  const searchOptions = {
    location:  new google.maps.LatLng(4.570868, -74.297333),
    radius: 200,
    types: ['address']
  }


  useEffect(() => {
    if(!!barrio && !!optionalDirection && !!choice) {
      setDisabled(false)
    }
    else setDisabled(true)
  }, [barrio, optionalDirection, choice])

  const handleSelect = async (value) => {
    setAddres(value)
  }

  return (
    <>
      <div className="address-container">
        <label>Dirección*</label>
        <PlaceAutocomplete
          // value={!choice ? address : choice}
          value={address}
          onChange={value => setAddres(value)}
          onSelect={handleSelect}
          searchOptions={searchOptions}
        >
          {({getInputProps, suggestions, getSuggestionItemProps, loading}) => {
              return (
                <>
                  <input {...getInputProps({placeholder: "Type Address"})}/>
                  <div className={`render-suggestion ${suggestions.length >0 && 'border'}`}>
                    {loading && <span>Loading...</span>}
                    {suggestions.map(suggestion => {
                      const style = {
                        backgroundColor: suggestion.active ? '#F5F4F4' : '#fff'
                      }
                      return (
                        <div key={suggestion.id} {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                        )
                    })}
                  </div>
                </>
              )
            }
          }
        </PlaceAutocomplete>
      </div>
      <label>{'Barrio (opcional)'}*</label>
      <input onChange={handleBarrio} type="text"/>
      <label>{'Complemento Dirección (opcional)'}*</label>
      <input onChange={handleOptionalDirection} type="text"/>
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
      <button disabled={disabled} onClick={handleClickModal}>ENVIAR</button>
    </>
  )
}
