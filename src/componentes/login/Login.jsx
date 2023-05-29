import { Link, useNavigate } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import { useRef, useState } from "react";
import {login as loginUser} from "./../../services/UsuarioService"



function Login(){

    const navigate = useNavigate();
    const [values,setValues] = useState({
        usuario:"",
        password:""
    });

    const submit = async (e)=>{        
    e.preventDefault();
    const token = await loginUser({...values});
    if(token){
        navigate("administrador/mapa");
    }
    }

    const onChangeInput =(event)=>{    
        const {name,value}= event.target;        
        setValues({
            ...values,
            [name]:value
        });
        
    }
    
    
    return (
       <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={submit}>
                                            <div className="form-floating mb-3">
                                                <input  onChange={onChangeInput} className="form-control" name="usuario" id="inputEmail" type="text" placeholder="usuario" />
                                                <label  htmlFor="inputEmail">Correo Electronico</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input onChange={onChangeInput} name="password" className="form-control" id="inputPassword" type="password" placeholder="Password" />
                                                <label htmlFor="inputPassword">Contrase&ntilde;a</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label className="form-check-label" htmlFor="inputRememberPassword">Recordar contrase&ntilde;a</label>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href="password.html">¿Olvistaste la contrase&ntilde;a?</a>
                                                <button className="btn btn-primary" type="submit">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><Link to="/registro">Registrarse !</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;