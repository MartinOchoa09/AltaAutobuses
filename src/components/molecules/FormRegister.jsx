import { useRef } from "react";
import Header from "../atoms/Header";
import "../../assets/styles/FormRegister.css";
function FormRegister() {
    const formRegisterP = useRef()
    const handlerClick = (e) =>{
        const formRegister = new FormRegister(formRegisterP.current)
        const uri = "http://34.225.239.102/api/autobus/register";

        let options ={
            method: 'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({
                name: formRegister.get("name"),
                email: formRegister.get("correo"),
                username: formRegister.get("username"),
                password: formRegister.get("contrasena")
            })
        }
        fetch(uri, options)
        .then(response=>response.json())
        .then(data=>alert(JSON.stringify(data)))
    }

    return ( 
    <div id="container">
        <div className="child">
            <Header />
            <form ref={formRegisterP}> 
            <div className="register">
                <h1>Registro de usuario</h1>
            </div>
            <div className="nombre">
                <label >Nombre </label>
                <div><input type="text" name="name"/></div>
            </div>
            <div className="email">
                <label>E-mail </label>
                <div><input type="email" name="correo"/></div>
            </div>
            <div className="user">
                <label>Username </label>
                <div><input type="text" name="username"/></div>
            </div>
            <div className="pass">
                <label>Password </label>
                <div><input type="password" name="contrasena"/></div>
            </div>
            <div>
                <button type="button" onClick={handlerClick}>Registro</button>
            </div>
            </form> 
        </div>
    </div>
    );
}

export default FormRegister;