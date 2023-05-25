import { Marker,Popup, useMapEvents, useMap} from 'react-leaflet';
import L from 'leaflet'
import { useEffect, useState } from 'react';

function Marca({punto}){
  const mapa = useMap();
  const [coor, setCoor]= useState([7.908706, -72.497395]);

  useEffect(()=>{  
    const [long,lat]= punto.coordenada.coo_coordenada.coordinates;
    console.log(long,lat)    
    setCoor([lat,long])
    mapa.setView(L.latLng(lat,long),20);
    
  },[])

  const [iconSize,setIconSize] = useState([35, 35]);
    const map = useMapEvents({
        click: () => {
          map.locate();
          
          const lo = `/images/casa.png`;
          setIcono(lo);
          
        },
        locationfound: (location) => {
          // console.log('location found: asas', location)
        },
        zoomend:(evt)=>{  
          setIconSize(map.getZoom()<=16 ? [20,20]:[30, 30]);                 
        }
      })
      const [icono,setIcono] =  useState("/images/casa.png");
    return (
        <Marker position={coor} 
                icon={L.icon({
                  iconUrl: icono,
                  iconSize: iconSize
                })}>
      <Popup>
        <h3>{punto.pi_nombre}</h3>
      </Popup>
      </Marker>
    );
}

export default Marca;