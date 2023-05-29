import useMainNav from "./../../hook/useMainNav";
import { NavLink } from "react-router-dom";
function Nav(){
  const {navigation} = useMainNav();    
    
    return (<div className='container-fluid' style={{padding:"0"}} >    
     <div className="btn-group col-12 row" role="group" aria-label="Basic mixed styles example">
       {
        navigation.map((nav,i)=>
        <NavLink 
                 key={`nav_${i}`} 
                 className={"btn btn-success col-6 col-md-1"} 
                 to={nav.url}> <img className='header-icono'
                 src={`/public/images/${nav.img}.png`} 
                 alt={nav.nombre}
        />{nav.nombre}</NavLink>)
       }
       {/* <NavLink  className={"btn btn-success col-6 col-md-1"} to={"/usuario"}> <img className='header-icono' src="/public/images/usuario-icono" alt="" />Algo</NavLink> */}
    </div>
    </div>);
}

export default Nav;