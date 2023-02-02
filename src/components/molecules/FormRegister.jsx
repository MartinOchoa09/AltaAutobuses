import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../atoms/Header";
import "../../assets/styles/FormRegister.css";
function FormRegister() {

    const formRegisterP = useRef()
    const navigate = useNavigate()
    
    const handlerClick = (e) =>{
        e.preventDefault()
        const formRegister = new FormData(formRegisterP.current)
        let uri = "http://34.225.239.102/api/registrar/usuario";
        
        let options = {
            method: 'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({
                nombre: formRegister.get('name'),
                usuario: formRegister.get('user'),
                correo: formRegister.get('correo'),
                contrasenia: formRegister.get('contrasena')
            })
        }
        fetch(uri, options)
        .then(response=>response.json())
        .then(data=>alert(JSON.stringify(data)))
        navigate("/")
    }

    return (
            <div className="container">
                <Header/>
                <div className="child">
                    <div className="littlechild">
                        <h1>Registro</h1>
                        <form ref={formRegisterP}>
                            <p>
                                <label>Nombre</label>
                                <input type="text" name="name"/>
                            </p>
                            <p>
                                <label>Email</label>
                                <input type="email" name="correo" />
                            </p>
                            <p>
                                <label>Username</label>
                                <input type="text" name="user" />
                            </p>
                            <p>
                                <label>Password</label>
                                <input type="password" name="contrasena"/>
                            </p>
                            <p>
                                <button type="button" onClick={handlerClick}>Registrarse</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default FormRegister;