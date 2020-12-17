import React, { useState } from 'react'
import PlaceAutocomplete, { geocodeByAddress, getLating } from 'react-places-autocomplete'

export const SecondModal = () => {
  const [address, setAddres] = useState('')

  const handleSelect = async () => {}

  return (
    <>
      <div className="address-container">
        <label>Dirección*</label>
        <PlaceAutocomplete
          value={address}
          onChange={setAddres}
          onSelect={handleSelect}
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
