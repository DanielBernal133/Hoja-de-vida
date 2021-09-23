import {
    Link
  } from "react-router-dom";
function Error404(){

	return(
	<div>
		<div className="container">
         Error 404 Estás intentando acceder a una página que no existe
      </div>
	  <center><button className="btn btn-outline-primary"><Link to="/">Ir al Inicio</Link></button></center>
	</div>
	
	   
		);
}

export default Error404;