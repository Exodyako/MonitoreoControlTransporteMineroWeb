import { useState } from 'react';
import { render } from 'react-dom';
import './Mapa.css';
import { MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import Marca from "./Marca";

 function Mapa (){      
    return (
      <MapContainer center={[7.903866, -72.500559]} zoom={15} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marca/>
      </MapContainer>
    );
};





export default Mapa;