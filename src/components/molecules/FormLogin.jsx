import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Header from "../atoms/Header";
import '../../assets/styles/FormLogin.css';

function FormLogin() {
    const form = useRef()
    const navigate = useNavigate()

    const handlerClick = (e) =>{
        const formLogin = new FormData(form.current)
        let uri = "http://34.225.239.102/api/iniciar"
        let options={
            method: 'POST',
            headers:{"Content-Type": 'application/json'},
            body: JSON.stringify({
                usuario: formLogin.get('username'),
                contrasenia: formLogin.get('password')
            })
        }
        fetch(uri, options)
        .then(response=>response.json())
        .then(data=>alert(JSON.stringify(data)))
        navigate("/altaautobuses")
    }

    return ( 
            <div className="padre">
                <Header/>
                <div className="hija">
                    <div className="hijachica">
                    <h1>Inicio de Sesión</h1>
                        <form ref={form}>
                            <p>
                                <label>Username</label>
                                <input type="text" name="username"/>
                            </p>
                            <p>
                                <label>Password</label>
                                <input type="password" name="password" />
                            </p>
                            <p>
                            <button type="button" onClick={handlerClick}>Iniciar Sesión</button>
                            </p>
                            <p>
                                <h3><Link to={"/register"}>¿No tienes cuenta? registrate ahora</Link></h3>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
     );
}

export default FormLogin;