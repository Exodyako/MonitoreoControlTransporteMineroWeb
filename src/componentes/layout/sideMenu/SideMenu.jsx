import SidePerfil from "./SidePerfil";
function SideMenu(){
    return (

<div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <SidePerfil/>
                            {/* <div className="sb-sidenav-menu-heading">Core</div> */}
                            <a className="nav-link" href="index.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Personalizar
                            </a>
                            <a className="nav-link" href="index.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Ayuda
                            </a>
                            <a className="nav-link" href="index.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Cerrar Sesión
                            </a>                            
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Propiedad de :</div>
                        Exploraciones Mineras del Norte FC SAS
                    </div>
                </nav>
            </div>
    );
}

export default SideMenu;