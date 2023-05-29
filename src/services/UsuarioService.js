import axios from "axios";
import { header } from "./Headers";

export async function login(user){

    const {usuario,password} = user;
    let token = null;
    const respuesta = await axios.post("/MonitoreoControlTransporteMinero/public/login",user,
    {headers:{"Accept":"application/json","Content-Type":"application/json"}})
    if((await respuesta).status == 200){
        token = respuesta.data.token;
        localStorage.setItem("token",token);
    }

    return token;
    
}

export async function isLogged(){
    let respuesta={};
    respuesta.status=401;
    try{
        respuesta = await axios.get(`${import.meta.env.VITE_API}/isLogged`,{
            headers:{...header()}
        });
    }catch(error){
        console.error("Ruta no autorizada")
    }finally{
        return respuesta.status===200;    
    }
    
}

export async function logout(){
    const respuesta =  await axios.put(`${import.meta.env.VITE_API}/logout`,{},{
        headers:{...header()}
    });
    return respuesta.status===204;
}