import { useEffect } from 'react'
import Header from './componentes/layout/header/Header';
import SideMenu from './componentes/layout/sideMenu/SideMenu';
import Footer from './componentes/layout/footer/Footer';
import Nav from './componentes/main/Nav';
// import MapaContainer from './componentes/main/MapaContainer';
import Carousel from "./componentes/carousel/Carousel";
import './App.css'
import { Outlet } from 'react-router-dom';


function App() {

  useEffect(()=>{
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
  },[]);

  return (
    <>      
      <Header/>
      <div id="layoutSidenav">
      <SideMenu/> 
      <div id="layoutSidenav_content">
      <main>
        <Carousel/>
        <Nav/>
        <div className="container-fluid" style={{padding:0}}>
          <Outlet/>
        </div>
      </main>
      {/* FOOTER */}
      
      </div>
            
      </div>
      <Footer/>
      
    </>
  )
}

export default App
