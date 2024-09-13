/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
"use client";

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";

//Map's styling
export const defaultMapContainerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapCenter = {
  lat: 24.71352613834053,
  lng: 46.675276297626546,
};

const defaultMapZoom = 13;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
};

const MapComponent = () => {
  return (
    <div className="w-full">
      <GoogleMap mapContainerStyle={defaultMapContainerStyle} center={defaultMapCenter} zoom={defaultMapZoom} options={defaultMapOptions}>
        <Marker position={defaultMapCenter}></Marker>
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
