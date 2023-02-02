import { useRef } from "react";
import { useState } from "react";
import Header from "../atoms/Header";
import "../../assets/styles/AltaAutobuses.css";

function FormAutobuses() {
    const [numero, setNumero] = useState()

    const handlerClickRandom =(e) =>{
        let aleatorio = Math.floor((Math.random() * 100000 + 1000000));
        setNumero(aleatorio) 
        console.log(setNumero)
    }
    const formDataA = useRef()
    const handlerClick = (e) =>{
        console.log('Prueba')
        const formData = new FormData(formDataA.current)
        let URI = "http://34.225.239.102/api/autobus/register";
        let options ={
            method: 'POST',
            headers:{"Content-Type": 'application/json'},
            body:JSON.stringify({
                clave: formData.get('clave'),
                placa: formData.get('placa'),
                numasientos: formData.get('numeroA'),
                fecha: formData.get('fecha'),
                tipo: formData.get('tipo'),
                nombre: formData.get('nombre'),
                licencia: formData.get('numeroL')
            })
        }
        fetch(URI, options)
        .then(response =>response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }

    return ( 
        <body>
            <div className="container-father">
                <Header/>
                <div className="container-child">
                    <div className="container-littleChild">
                        <form action="">
                            <h1>Alta de Autobuses</h1>
                            <p>
                                <label>Clave autobus</label>
                                <input type="text" name="claveAutobus"/>
                            </p>
                            <p>
                                <label>Placa Autobus</label>
                                <input type="text" name="placaAutobus"/>
                            </p>
                            <p>
                                <label>Numero de Asiento</label>
                                <input type="number" name="numAsiento"/>
                            </p>
                            <p>
                                <label>Fecha de Alta</label>
                                <input type="date" name="fecha"/>
                            </p>
                            <p>
                                <label>Tipo </label>
                                <select>
                                    <option>Turismo</option>
                                    <option>Lujo</option>
                                </select>
                            </p>
                            <p>
                                <label>Nombre del Chofer</label>
                                <input type="text" name="nombreChofer"/>
                            </p>
                            <p>
                                <label>Numero de Licencia</label>
                                <input type="text" value={numero} name="numeroL"/>
                                <button type="button" onClick={handlerClickRandom}>Generar numero de licencia</button>
                            </p>
                            <p>
                                <button type="button" onClick={handlerClick}>Alta de autobuses</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </body>
     );
}

export default FormAutobuses;