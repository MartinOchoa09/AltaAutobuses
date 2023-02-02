import { Link } from "react-router-dom";
import Header from "../atoms/Header";
import '../../assets/styles/FormLogin.css';

function FormLogin() {
    return ( 
        <body>
            <div className="padre">
                <Header/>
                <div className="hija">
                    <div className="hijachica">
                    <h1>Inicio de Sesión</h1>
                        <form action="">
                            <p>
                                <label>Username</label>
                                <input type="text" name="username"/>
                            </p>
                            <p>
                                <label>Password</label>
                                <input type="email" name="password" />
                            </p>
                            <p>
                            <button type="button">Iniciar Sesión</button>
                            </p>
                            <p>
                                <h3><Link to={"/register"}>¿No tienes cuenta? registrate ahora</Link></h3>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </body>
     );
}

export default FormLogin;