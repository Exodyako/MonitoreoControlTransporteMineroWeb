import axios from "axios";

export async function listar(){
    const respuesta = await axios.get("/MonitoreoControlTransporteMinero/public/trabajador",
    {headers:{"Accept":"application/json","Content-Type":"application/json"}});
    const conductores = respuesta.data;
    return conductores;
}

