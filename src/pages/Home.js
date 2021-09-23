import {
    Link
  } from "react-router-dom";


function Home(){

	return(
	<div className="container">
    <Link to="/portafolio">Ir al portafolio</Link>       
      </div>
		);
}

export default Home;