import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Mapa from './componentes/Mapa'
import Header from './componentes/layout/header/Header';
import SideMenu from './componentes/layout/sideMenu/SideMenu';
import Footer from './componentes/layout/footer/Footer';
import "./public/css/style.css";
import './App.css'
import logo from './public/images/v5_116.png';
function App() {
  const [count, setCount] = useState(0);
  const [conductor,setConductor]= useState([]);

  

  useEffect(()=>{
    const conductores = ()=>{       
      fetch("http://localhost/MonitoreoControlTransporteMinero/public/conductor")
      .then(r=>r.json())
      .then(r=>{
        console.log(r);
      setConductor(r)
      });
    };
    conductores();
  },[])
//

  return (
    <>
      
      <Header/>
      <SideMenu/> 
      <div className='v2_16'>
      <Mapa className="v2_8"/>
      
      <div className="v6_6">
                {/* <div className="v2_7"></div> */}
                {
                  conductor.map(con =>(
                    <div className='conductor'  key={con.co_id}>
                      <div className='item image'>
                      <figure className="img-c">
                       <img className="img" src={logo} alt="imagen no encontrada."/>
                      </figure>
                      </div>
                      
                      <div className='textos'>
                      <div className='item nombre'>Nombre: {con.co_nombre}</div>
                      <div className='item telefono'>Telefono: {con.co_telefono}</div>
                      </div>
                      
                    </div>
                  ))
                }
                </div>
      </div>

      
      
      <Footer/>
    </>
  )



}

export default App
