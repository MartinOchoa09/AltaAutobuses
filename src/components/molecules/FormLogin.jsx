import { Link } from "react-router-dom";
import Header from "../atoms/Header";
import '../../assets/styles/FormLogin.css';

function FormLogin() {
    return ( 
            <div id="loginmain">
                <form>
                <Header />
                <div className="login">
                    <h1>Inicio de Sesión</h1>
                </div>
                <div className="username">
                    <div><label>Username </label></div>
                    <div><input type="text" name="" id="usuario" /></div>
                </div>
                <div className="password">
                    <div><label>Password </label></div>
                    <div><input type="password" id="pass" /></div>
                </div>
                <div className="incioSesion">
                    <button type="button" className="button">Inciar Sesión</button>
                </div>
                <div className="registro">
                    <Link to={"/register"}>¿No tienes cuenta? registrate ahora</Link>
                </div>
                </form>
            </div>
     );
}

export default FormLogin;