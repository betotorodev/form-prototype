/*global google*/
import React, { useState } from 'react'
import PlaceAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import { IconContext } from "react-icons"
import { MdSearch } from "react-icons/md";

import { Map } from './Map'

export const InputGoogleMaps = ({ option }) => {
  const [address, setAddres] = useState('')
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0})
  const searchOptions = {
    location:  new google.maps.LatLng(4.570868, -74.297333),
    radius: 200,
    types: ['address']
  }

  const handleClickMap = (e) => {
    e.preventDefault()
    geocodeByAddress(address)
      .then(results => {
        const {lat, lng} = results[0].geometry.location
        setCoordinates({lat: lat(), lng: lng()})
      })
      .catch(error => console.error(error))
  }

  const handleReverseGeocode = (coordinates) => {
    const { lat, lng } = coordinates
    new window.google.maps.Geocoder().geocode({ location: {lat, lng}}, (results, status) => {
      setAddres(results[0].formatted_address)
    })
  }
  const handleSelect = async (value) => setAddres(value)

  return (
    <>
      <div className="address-container">
        <section className="inputs-container">
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
          
        </section>
        {
          option === 2 &&
          <button onClick={handleClickMap} className="map-button">
            <IconContext.Provider value={{ size: "22px", color: '#fff' }}>
              <MdSearch />
            </IconContext.Provider>
          </button>
        }
      </div>
      {option === 2 && <Map coordinates={coordinates} reverseGeocode={handleReverseGeocode} />}
    </>
  )
}
