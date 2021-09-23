import Header from '../components/header/header';
import Contact from '../components/contact/Contact';
import Acerca from '../components/acerca/Acerca';
import Footer from '../components/footer/footer'
function Portafolio() {
  return (
    <div className="container">
      <Header />
      <section id="informacion">
        <div className="contact">
        <Contact />
        </div>
        <div className="acerc">
        <Acerca />
        </div>
        
      </section>
      <div className="footar">
        <Footer />
        </div>

    </div>
  );
}

export default Portafolio;