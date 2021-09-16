import './Acerca.css'
function Acerca(){
    return(
        <div className="acerca">
            <div className="infolab">
                <h1 className="Titulo"><i class="fas fa-graduation-cap"></i>Estudios</h1>
                <div className="estudio">
                    <h4 className="TituloCar">General Santander - Bachiller</h4>
                    <p>Durante ese periodo de colegiatura me desenvolví muy bien en cada campo de todas las asignaturas, fui un buen estudiante en mi periodo escolar. </p>
                </div>
                <div className="estudio">
                    <h4 className="TituloCar">Técnico en programación de software</h4>
                    <p>Me enamore de la programación cuando hice mi técnico en el SENA me desempeñe
                        super bien con los lenguajes básicos de programación ya sea HTML, CSS y Bootstrap.</p>
                </div>
                <div className="estudio">
                    <h4 className="TituloCar">Tecnólogo en Análisis y Diseño de Sistemas de Información – SENA </h4>
                    <p>En este transcurso de mi tecnólogo llevo un buen conocimiento de varios 
                        lenguajes de programación, me desempeño bien en actividades de este mismo y soy un buen compañero al ayudar.</p>
                </div>
                <h1 className="Titulo2">Habilidades</h1>
                <div className="habilidades">
                <p className="info">PHP</p><progress max="100" value="90"></progress>
                </div>
                <div className="habilidades">
                <p className="info">Java</p><progress max="100" value="65"></progress>
                </div>
                <div className="habilidades">
                <p className="info">Fron-ent</p><progress max="100" value="75"></progress>
                </div>
                <div className="habilidades">
                <p className="info">Back-end</p><progress max="100" value="85"></progress>
                </div>
                <div className="habilidades">
                <p className="info">SQL</p><progress max="100" value="90"></progress>
                </div>
            </div>
        </div>
    );
}


export default Acerca; 