function Nav(){
    return (<div className='container-fluid' style={{padding:"0"}} >
    <div className="btn-group col-12 row" role="group" aria-label="Basic mixed styles example">
       <button type="button" className="btn btn-success col-6 col-md-1">
         <img className='header-icono' src="/public/images/mapa-icono.png" alt="" /> Mapa</button>
       <button type="button" className="btn btn-success col-6 col-md-1">
         <img className='header-icono' src="/public/images/usuario-icono.png" alt="" />Usuario</button>
       <button type="button" className="btn btn-success col-6 col-md-1">
       <img className='header-icono' src="/public/images/camion-icono.png" alt="" /> Vehiculo</button>
       <button type="button" className="btn btn-success col-6 col-md-1">
       <img className='header-icono' src="/public/images/ticket-icono.png" alt="" /> Ticket</button>
       <button type="button" className="btn btn-success col-6 col-md-1">
       <img className='header-icono'src="/public/images/rutas-icono.png" alt="" /> Rutas</button>
       <button type="button" className="btn btn-success col-6 col-md-1">
       <img className='header-icono' src="/public/images/sitio-icono.png" alt="" /> Sitios interes</button>
    </div>
    </div>);
}

export default Nav;