/*global google*/
import React, { useRef, useEffect, useState } from 'react'

export const Map = ({ placeName, reverseGeocode, coordinates }) => {
  const googleMapRef = useRef()
  const [address, setAdress] = useState('')
  let googleMap
  let latAndLng = {
    lat: 0,
    lng: 0
  }

  const createGoogleMap = (lat, lng ) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 18,
      center: {
        lat: lat,
        lng: lng,
      },
      disableDefaultUI: true,
      zoomControl: true
    });
  };
  const getLatLng = (position) => {
    let marker
    let { lat, lng } = position
    new window.google.maps.Geocoder().geocode({ location: {lat, lng} }, (results, status) => {
        setAdress(results[0].formatted_address)
        if (status === window.google.maps.GeocoderStatus.OK) {

          // placeId = results[0].place_id;
          // createGoogleMap(results[0].geometry.location);
          createGoogleMap(lat, lng)
          // lat = results[0].geometry.location.lat()
          // lng = results[0].geometry.location.lng()

          marker = new window.google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: googleMap,
            draggable: true,
            animation: window.google.maps.Animation.DROP,
            // title: `${placeName}`,
          })

          marker.addListener('click', () => {
            console.log('click en el marker')
          })
          marker.addListener( 'dragend', (event) => {
            const { latLng } = event
            latAndLng.lat = latLng.lat()
            latAndLng.lng = latLng.lng()
            reverseGeocode(latAndLng)
          })
        } else {
          console.log("Geocode was not successful for the following reason: " + status)
        }
      }
    );
  }

  const initMapa = (coordinates) => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords
      
      if(coordinates.lat === 0 && coordinates.lng === 0) {
        latAndLng.lat = latitude
        latAndLng.lng = longitude
        getLatLng(latAndLng)
      } else {
        latAndLng.lat = coordinates.lat
        latAndLng.lng = coordinates.lng
        getLatLng(latAndLng)
      }
    })
  }

  useEffect(() => {
  initMapa(coordinates)
  }, [coordinates])

  return (
    <div
      id="google-map"
      ref={googleMapRef}
    />
  );
};