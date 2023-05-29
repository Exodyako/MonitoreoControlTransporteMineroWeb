import axios from "axios";
import {header}  from "./Headers";
export async function listar(){
    
    const respuesta = await axios.get(`${import.meta.env.VITE_API}/trabajador`,
    {
       headers:{...header()}
    });
    const conductores = respuesta.data;
    return conductores;
}

