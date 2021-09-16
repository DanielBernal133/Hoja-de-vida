import './Contact.css'

function Contact() {
    return(
        <div className="contacto">
            <h2>Descripcion personal</h2>
            <p>Mi nombre es Daniel Bernal Ariza, tengo 19 años, me gusta programar y todo sobre este arte porque para mi es un arte el programar y crear valiosas paginas, tengo buena experiencias programando proyectos en el tecnico y en el tegnologo.</p>
            <h2>Contacto</h2>
            <div className="info"><i class="fas fa-phone-square-alt"></i>3213638149</div>
            <div className="info"><i class="far fa-envelope"></i>bernalarizad7gmail.com</div>
            <div className="info"><i class="fab fa-github"></i><a href="https://github.com/DanielBernal133">https://github.com/DanielBernal133</a></div>
            <div className="info"><i class="fas fa-map-marker-alt"></i>Cll 66c #122 A 69</div>

            <h2>Talentos</h2>
            <p>Tocar la guitarra</p>
            <p>Cantar</p>
        </div>
    );
}

export default Contact;