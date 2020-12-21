/*global google*/
import React, { useState } from 'react'
import PlaceAutocomplete from 'react-places-autocomplete'

export const InputGoogleMaps = () => {
  const [address, setAddres] = useState('')

  const searchOptions = {
    location:  new google.maps.LatLng(4.570868, -74.297333),
    radius: 200,
    types: ['address']
  }
  const handleSelect = async (value) => {
    setAddres(value)
  }

  return (
    <>
            <div className="address-container">
        <label htmlFor="directions">Dirección*</label>
        <PlaceAutocomplete
          value={address}
          onChange={value => setAddres(value)}
          onSelect={handleSelect}
          searchOptions={searchOptions}
        >
          {({getInputProps, suggestions, getSuggestionItemProps, loading}) => {
              return (
                <>
                  <input id="directions" {...getInputProps({placeholder: "Type Address"})}/>
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
    </>
  )
}
