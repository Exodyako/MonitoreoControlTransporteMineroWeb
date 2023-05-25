import { useEffect, useState } from 'react';
import { useConductor } from '../../../hook/useConductor';
import CardCamionero from './CardCamionero'
// import axios from 'axios';


function CamioneroContainer(){
  const {conductores,getConductores} = useConductor();
    
useEffect(()=>{
    getConductores();
  },[])
    

    return (
        <div className="card mb-4" style={{borderRadius:"0"}}>           
            <div className="card-body card-camiones">
           {
             conductores.map(con =>(
                <CardCamionero key={con.co_id}/>
            ))
           }
              
            </div>
        </div>
    )
}


export default CamioneroContainer;