import { useRef } from "react";
import Header from "../atoms/Header";
import "../../assets/styles/AltaAutobuses.css";

function FormAutobuses() {
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
                licencia: formData.get('licencia')
            })
        }
        fetch(URI, options)
        .then(response =>response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }

    return ( 
        <form ref={formDataA}>
        <Header />
        <div id="divpadre">
            <div className="titulo">
                <h1>Alta de Autobuses</h1>
            </div>
            <div>
                <div><label htmlFor="">Clave autobus</label></div>
                <div><input type="text" name="clave"/></div>
            </div>
            <div>
                <div><label htmlFor="">Placa autobus</label></div>
                <div><input type="text" name="placa"/></div>
            </div>
            <div>
                <div><label htmlFor="">Numero de asientos</label></div>
                <div><input type="text" name="numeroA"/></div>
            </div>
            <div>
                <div><label htmlFor="">Fecha de alta</label></div>
                <div><input type="date" name="fecha"/></div>
            </div>
            <div>
                <div><label htmlFor="">Tipo</label></div>
                <div>
                    <select name="tipo">
                        <option value="turismo">Turismo</option>
                        <option value="lujo">Lujo</option>
                    </select>    
                </div>
            </div>
            <div>
                <div><label htmlFor="">Nombre del chofer</label></div>
                <div><input type="text" name="nombre"/></div>
            </div>
            <div>
                <div><label htmlFor="">Numero de licencia</label></div>
                <div><input type="text" name="licencia"/></div>
            </div>
            <div>
                <div><button type="button" onClick={handlerClick}>Alta de autobuses</button></div>
            </div>
        </div>
        </form>
     );
}

export default FormAutobuses;