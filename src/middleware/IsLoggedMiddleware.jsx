import { useEffect, useState } from "react";
import { Navigate,Outlet, useLoaderData } from "react-router-dom";

function IsLoggedMiddleware(){

    const sigueLogeado = useLoaderData();    
    const [logeado,setLogeado] = useState(localStorage.getItem("token"));
    
    console.log(sigueLogeado,logeado);
    if(!sigueLogeado && logeado){
        localStorage.removeItem("token");
        setLogeado(null);
    }
    if(!logeado){
        return <Navigate to={"login"}/>
    }
    
    return (
        <Outlet/>
    );
}

export default IsLoggedMiddleware;