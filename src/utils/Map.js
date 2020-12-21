/*global google*/
import React, { useRef, useEffect } from 'react'

export const Map = ({ placeName }) => {
  const googleMapRef = useRef();
  let googleMap;
  const createGoogleMap = (coordinates) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 18,
      center: {
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      },
      disableDefaultUI: true,
      zoomControl: true
    });
  };
  const getLatLng = () => {
    let lat, lng, placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          placeId = results[0].place_id;
          createGoogleMap(results[0].geometry.location);
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
          new window.google.maps.Marker({
            position: { lat, lng },
            map: googleMap,
            draggable: true,
            animation: window.google.maps.Animation.DROP,
            title: `${placeName}`,
          });
        } else {
          console.log("Geocode was not successful for the following reason: " + status)
        }
      }
    );
  }

  useEffect(() => {
    getLatLng()
  }, [])

  return (
    <div
      id="google-map"
      ref={googleMapRef}
    />
  );
};