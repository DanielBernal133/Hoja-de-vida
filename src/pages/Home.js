import {
    Link
  } from "react-router-dom";


function Home(){

	return(
	<div className="container">
    <button className="btn btn-outline-primary"><Link to="/portafolio">Ir al portafolio</Link></button>      
      </div>
		);
}

export default Home;