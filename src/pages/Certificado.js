import foto from '../pages/0001.jpg';
import foto2 from '../pages/critica.jpg';
import '../pages/Certificado.css';
import {
    Link
  } from "react-router-dom";

function Certificado(){

	return(
	<div className="certificados">
        <h1>Certificado Tecnico en Programador de Software</h1>
        <img src={foto} />
        <h1>Certificado En lectura Critica</h1>
        <img src={foto2} />
        <div className="container">
    <Link to="/portafolio">Ir al portafolio</Link>       
      </div>
    </div>
		);
}

export default Certificado;