import { useState } from "react";

function useMainNav(){

    const [nav,setNav]=useState([
        {
          nombre:"Mapa",
          img:"mapa-icono",
          url:"mapa"
        },
        {
          nombre:"Usuario",
          img:"usuario-icono",
          url:"usuario"
        },
        {
          nombre:"Vehiculo",
          img:"mapa-icono",
          url:"vehiculo"
        },
        {
          nombre:"Ticket",
          img:"mapa-icono",
          url:"ticket"
        },
        {
          nombre:"Rutas",
          img:"mapa-icono",
          url:"rutas"
        },
        {
          nombre:"Sitios interes",
          img:"mapa-icono",
          url:"sitios"
        }
      ])

      return {navigation:[...nav]};
}

export default useMainNav;