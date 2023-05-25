function SidePerfil(){
    return (
        <div className="card text-bg-dark ">
                                <div className="card-body"  style={{borderBottom:"white 1px solid"}}>
                                    <div className="row">
                                    <div className="col-12 card-img-perfil">
                                    <img src="/public/images/ava3.webp"  className="img-fluid img-perfil" alt="img-perfil" />
                                    </div >
                                    <div className="col-12 text-center mt-3">
                                       <h6> Administrador</h6>
                                       <h6>Alejandro Julian Sequeda Quiroga</h6>
                                    </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="text-btn-perfil text-center col-4">
                                            <img className="perfil-btb-img white mb-2" src="/public/images/usuario-icono.png" alt="" />
                                        <p>Ver perfil</p>
                                        </div>
                                        <div className="text-btn-perfil text-center col-4">
                                            <img className="perfil-btb-img mb-2" src="/public/images/editar-icono.png" alt="" />
                                        <p>Editar datos</p>
                                        </div>
                                        <div className="text-btn-perfil text-center col-4">
                                            <img className="perfil-btb-img mb-2" src="/public/images/notificar-icono.png" alt="" />
                                        <p>Notificaciones</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
}

export default SidePerfil;