import { useRef } from "react";
import { useState } from "react";
import Header from "../atoms/Header";
import "../../assets/styles/AltaAutobuses.css";

function FormAutobuses() {
    const [numero, setNumero] = useState();

    const handlerClickRandom =(e) =>{
        let num = Math.floor((Math.random() * 100000 + 1000000));
        setNumero(num) 
    }

    const formDataA = useRef()

    const handlerClick = (e) =>{
        const formData = new FormData(formDataA.current)
        let URI = "http://34.225.239.102/api/autobus/register";
        let options ={
            method: 'POST',
            headers:{"Content-Type": 'application/json'},
            body:JSON.stringify({
                clave: formData.get('claveAutobus'),
                placa: formData.get('placaAutobus'),
                numasientos: formData.get('numAsiento'),
                fecha: formData.get('fecha'),
                tipo: formData.get('tipo'),
                nombre: formData.get('nombreChofer'),
                licencia: formData.get('licencia')
            })
        }
        fetch(URI, options)
        .then(response =>response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }

    return ( 
            <div className="container-father">
                <Header/>
                <div className="container-child">
                    <div className="container-littleChild">
                        <form ref={formDataA}>
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
                                
                                <select name="tipo">
                                    <option>Turismo</option>
                                    <option>Lujo</option>
                                </select>
                            </p>
                            <p>
                                <label>Nombre del Chofer</label>
                                <input type="text" name="nombreChofer"/>
                            </p>
                            <p className="licencia">
                                <label>Numero de Licencia</label>
                                <input type="number" value={numero} name="licencia"/>
                                <button type="button" onClick={handlerClickRandom}>Generar numero de licencia</button>
                            </p>
                            <p>
                                <button type="button" onClick={handlerClick}>Alta de autobuses</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
     );
}

export default FormAutobuses;