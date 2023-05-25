import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './Mapa.css';
import { MapContainer,TileLayer,Marker,Popup, Circle  } from 'react-leaflet';
import Marca from "./Marca";
import axios from 'axios';

 function Mapa (){  
  
  const [puntosInteres,setPuntosInteres] = useState([]);
  
  useEffect(()=>{
    axios.get("/MonitoreoControlTransporteMinero/public/punto-interes",
    {headers:{"Accept":"application/json","Content-Type":"application/json"}})
    .then((puntosInteress)=>{  
      console.log(puntosInteress.data)       
     setPuntosInteres(puntosInteress.data);
    });
  },[]);
    return (
      <>
         <MapContainer  zoom={20} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {puntosInteres.map(punto=>(            
                <Marca key={punto.pi_id}  punto={punto}/>
              ))
            }      
         </MapContainer>      
      </>
    );    
};





export default Mapa;