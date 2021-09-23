import './header.css';
import foto from './foto.jpeg';
function Header() {
    return(
        <header className="cabecera">
            
            <div className="foto">
                <img src={foto} alt="foto Daniel Bernal" />
            </div>
            <div className="texto">
                <h1 className="titulonom">Daniel Bernal Ariza</h1>
                <h3>Analista y Diseñador de sistemas de información</h3>
            </div>
            
        </header>
    );
}

export default Header; 