//import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Contact from './components/contact/Contact';
import Acerca from './components/acerca/Acerca';
import Footer from './components/footer/footer'
function App() {
  return (
    <div className="container">
      <Header />
      <section id="informacion">
        <Contact />
        <Acerca />
        
      </section>
      <Footer />

    </div>
  );
}

export default App;
