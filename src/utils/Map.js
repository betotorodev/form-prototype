/*global google*/
import React, { useRef, useEffect } from 'react'

export const Map = ({ placeName, hola, coordinates }) => {
  const googleMapRef = useRef();
  let googleMap;
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
    // let lat, lng, placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
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
            title: `${placeName}`,
          })

          marker.addListener('click', () => {
            console.log('click en el marker')
          })
          marker.addListener( 'dragend', (event) => {
            const { latLng } = event
            console.log(latLng.lat(), latLng.lng())
          })
        } else {
          console.log("Geocode was not successful for the following reason: " + status)
        }
      }
    );
  }

  const initMapa = (coordinates) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const UserPosition = coordinates.lat === 0 ? position : coordinates
      let geocoding ='https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&sensor=false';
      try {
        fetch(geocoding)
          .then((object) => console.log(object))
          .catch((error) => console.log(error))
      } catch (error) {
        console.log(error)
      }
      
      if(coordinates.lat === 0 && coordinates.lng === 0) {
        let { latitude, longitude } = position.coords
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