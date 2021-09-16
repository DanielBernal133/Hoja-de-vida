import './footer.css'
import foto1 from './footer.png';
function Footer(){
    return(
        <footer>
            <div className="footer">
                <div className="imagen">
                    <img src={foto1} alt="foto footer" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;