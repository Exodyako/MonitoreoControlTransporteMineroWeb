

function CardCamionero(){
    return (
    <div className='card card-camionero' style={{borderRadius:"0"}}>
       <div className='card-body'>
          <div className='row'>
             <div className='col-3'>
                <img src={"/public/images/ava3.webp"} className="card-img-camionero img-fluid mx-auto d-block" alt="imagen-conductor"/>
             </div>
             <div className='col-6 card-parrafos'>
               <h6>Nombre Conductor</h6>
               <p className='card-parrafo'>telefono</p>
               <p className='card-parrafo'>ubicacion</p>
             </div>
             <div className='col-3 card-activo'>
             <div className="form-check">
                <input className="form-check-input card-check" type="radio" id="card-activo" onChange={(e)=>{}} checked={true}/>
                <label className="form-check-label" htmlFor="card-activo">
                  Inactivo
                </label>
             </div>
             </div>
          </div>
       </div>
    </div>
 );
}

export default CardCamionero;