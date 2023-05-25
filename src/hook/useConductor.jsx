import { useState } from "react";
import {listar } from "./../services/ConductoresService";


export function useConductor(){

    const [conductores,setConductores]  = useState([]);

    async function getConductores(){
        const newConductores = await listar();
        setConductores(newConductores);
    }
    
    return {conductores, getConductores}

}