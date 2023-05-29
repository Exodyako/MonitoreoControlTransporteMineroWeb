import "./Footer.css"
function Footer(){
    return (
        <footer className=" footer-fixed ">
                    <div className="container-fluid ">
                        <div className="row text-white" style={{margin:"0",padding:"0"}}>
                            <h2 className="text-center mt-4">CONTACTO</h2>
                                <div className="row col-12 text-center">
                                    <div className="elemento-footer col-4">
                                        <h2><img className='footer-img' src="/public/images/telefono-icono.png" alt=""/>Telefono</h2>                                     
                                    </div><div className="elemento-footer col-4">
                                        <h2><img className='footer-img' src="/public/images/correo-icono.png" alt=""/>Correo electronico</h2>                                     
                                    </div>
                                    <div className="elemento-footer col-4">
                                        <h2><img className='footer-img' src="/public/images/descargar-icono.png" alt=""/>Descargar App</h2>                                     
                                    </div>
                                    <div className="elemento-footer col-4">
                                        <h2><img className='footer-img' src="/public/images/telefono-icono.png" alt=""/>Telefono Alterna.</h2>                                     
                                    </div>
                                    <div className="elemento-footer col-4">
                                        <h2><img className='footer-img' src="/public/images/wp-icono.png" alt=""/>Whatsapp</h2>                                     
                                    </div>
                                    <div className=" d-none d-sm-block elemento-footer col-4">
                                        <p ><img className='footer-img' src="/public/images/convenio-icono.png" alt=""/>Exploraciones Mineras del Norte FC SAS - Convenio UDES Cúcuta</p>                                     
                                    </div>
                                    
                                </div>                       
                        </div>
                    </div>
                </footer>
    );
}

export default Footer;