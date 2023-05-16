import { Marker,Popup, useMapEvents} from 'react-leaflet';


function Marca(){
    const map = useMapEvents({
        click: () => {
          map.locate()
        },
        locationfound: (location) => {
          console.log('location found: asas', location)
        },
      })
    return (
        <Marker position={[51.505, -0.09]}>
      <Popup>
        Si funcionó boludos
      </Popup>
      </Marker>
    );
}

export default Marca;